import assert from "node:assert/strict";
import { test } from "node:test";
import type { Element, Root } from "hast";
import { rehypeExternalLinks } from "./rehype-external-links.ts";

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
