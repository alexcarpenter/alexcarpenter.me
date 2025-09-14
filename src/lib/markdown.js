import MarkdownIt from "markdown-it";

// Create a singleton MarkdownIt instance to avoid multiple parser instances
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
