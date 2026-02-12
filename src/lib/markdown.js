import MarkdownIt from "markdown-it";

let markdownParser = null;

export function getMarkdownParser() {
  if (!markdownParser) {
    markdownParser = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    });
  }
  return markdownParser;
}
