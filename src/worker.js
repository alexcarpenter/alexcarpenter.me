const markdownAccept = /text\/(markdown|plain)/i;
const aiUserAgent =
  /GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|Claude-User|Claude-Web|anthropic-ai|PerplexityBot|Perplexity-User|Google-Extended|GoogleOther|CCBot|cohere-ai|Bytespider|Meta-ExternalAgent|Applebot-Extended/i;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== "/") return env.ASSETS.fetch(request);

    const wantsMarkdown =
      markdownAccept.test(request.headers.get("accept") ?? "") ||
      aiUserAgent.test(request.headers.get("user-agent") ?? "");

    if (wantsMarkdown) url.pathname = "/index.md";

    const asset = await env.ASSETS.fetch(new Request(url, request));
    const response = new Response(asset.body, asset);
    response.headers.append("Vary", "Accept, User-Agent");

    if (wantsMarkdown && response.ok) {
      response.headers.set("Content-Type", "text/markdown; charset=utf-8");
    }

    return response;
  },
};
