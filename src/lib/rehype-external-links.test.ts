import assert from "node:assert/strict";
import { test } from "node:test";
import type { Element, Root } from "hast";
import { rehypeExternalLinks } from "./rehype-external-links.ts";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";

test("renders formatted link text with the external-link icon", async () => {
  const processor = await createMarkdownProcessor({
    syntaxHighlight: false,
    rehypePlugins: [rehypeExternalLinks],
  });
  const { code } = await processor.render(
    '[**Example**](https://example.com "Title")',
  );
  assert.match(code, /target="_blank"/);
  assert.match(code, /title="Title"/);
  assert.match(code, /class="relative inline-block pr-3.5"/);
  assert.match(code, /<strong>Example<\/strong><svg aria-hidden="true"/);
});

test("preserves attributes and adds only one icon when run twice", () => {
  const node = link("//example.com");
  node.properties.rel = ["nofollow"];
  node.properties.className = ["custom"];
  run([node]);
  const first = structuredClone(node);
  run([node]);
  assert.deepEqual(node, first);
  assert.deepEqual(node.properties.rel, ["nofollow", "noopener", "noreferrer"]);
  assert.ok((node.properties.className as string[]).includes("custom"));
  assert.equal(node.children.length, 1);
});

test("leaves same-origin absolute links alone when a site is provided", () => {
  const node = link("https://alexcarpenter.me/notes/");
  const before = structuredClone(node);
  rehypeExternalLinks({ site: "https://alexcarpenter.me" })({
    type: "root",
    children: [node],
  });
  assert.deepEqual(node, before);
});

test("opens http and https links in a new tab", () => {
  const links = [link("https://example.com"), link("http://example.com")];
  run(links);
  for (const node of links) {
    assert.equal(node.properties.target, "_blank");
    assert.deepEqual(node.properties.rel, ["noopener", "noreferrer"]);
  }
});

test("finds links nested inside other elements", () => {
  const nested = link("https://example.com");
  run([element("p", [element("strong", [nested])])]);
  assert.equal(nested.properties.target, "_blank");
});

test("leaves internal, hash, and non-http links alone", () => {
  const links = [
    link("/notes/"),
    link("#heading"),
    link("mailto:hi@example.com"),
    element("a", []),
  ];
  run(links);
  for (const node of links) {
    assert.equal(node.properties.target, undefined);
    assert.equal(node.properties.rel, undefined);
  }
});

function run(children: Root["children"]) {
  rehypeExternalLinks()({ type: "root", children });
}

function link(href: string): Element {
  return element("a", [], { href });
}

function element(
  tagName: string,
  children: Element["children"],
  properties: Element["properties"] = {},
): Element {
  return { type: "element", tagName, properties, children };
}
