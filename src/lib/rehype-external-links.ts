import type { Element, Root, RootContent } from "hast";

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
