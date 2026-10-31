import type { Element, Root, RootContent } from "hast";
import { readFileSync } from "node:fs";
import { externalLinkClass, externalLinkIconClass } from "./external-link.ts";

// Rehype's stringifier accepts trusted raw HTML alongside standard HAST nodes.
type Raw = { type: "raw"; value: string };
declare module "hast" {
  interface ElementContentMap {
    raw: Raw;
  }
  interface RootContentMap {
    raw: Raw;
  }
}

// Plain Markdown emits HTML rather than Astro components. Use the component's
// shared classes and SVG source while preserving the original link contents.
const icon = readFileSync(
  new URL("../icons/arrow-up-right.svg", import.meta.url),
  "utf8",
).replace("<svg ", `<svg aria-hidden="true" class="${externalLinkIconClass}" `);

export function rehypeExternalLinks(options: { site?: string } = {}) {
  return (tree: Root) => {
    for (const node of elements(tree.children)) {
      if (
        node.tagName === "a" &&
        isExternal(node.properties.href, options.site)
      ) {
        node.properties.target = "_blank";
        node.properties.rel = [
          ...new Set([
            ...tokens(node.properties.rel),
            "noopener",
            "noreferrer",
          ]),
        ];
        node.properties.className = [
          ...new Set([
            ...tokens(node.properties.className),
            ...externalLinkClass.split(" "),
          ]),
        ];
        if (
          !node.children.some(
            (child) => child.type === "raw" && child.value === icon,
          )
        ) {
          node.children.push({ type: "raw", value: icon });
        }
      }
    }
  };
}

function isExternal(href: unknown, site?: string): boolean {
  if (typeof href !== "string" || !/^(https?:)?\/\//i.test(href)) return false;
  try {
    const url = new URL(href, site ?? "https://localhost");
    return !site || url.origin !== new URL(site).origin;
  } catch {
    return false;
  }
}

function tokens(value: unknown): string[] {
  return Array.isArray(value)
    ? value.map(String)
    : typeof value === "string"
      ? value.split(/\s+/).filter(Boolean)
      : [];
}

function* elements(nodes: RootContent[]): Generator<Element> {
  for (const node of nodes) {
    if (node.type === "element") {
      yield node;
      yield* elements(node.children);
    }
  }
}
