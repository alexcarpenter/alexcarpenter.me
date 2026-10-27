import type { Element, Root, RootContent } from "hast";

export function rehypeExternalLinks() {
  return (tree: Root) => {
    for (const node of elements(tree.children)) {
      if (node.tagName === "a" && isExternal(node.properties.href)) {
        node.properties.target = "_blank";
        node.properties.rel = ["noopener", "noreferrer"];
      }
    }
  };
}

function isExternal(href: unknown): boolean {
  return typeof href === "string" && /^https?:\/\//i.test(href);
}

function* elements(nodes: RootContent[]): Generator<Element> {
  for (const node of nodes) {
    if (node.type === "element") {
      yield node;
      yield* elements(node.children);
    }
  }
}
