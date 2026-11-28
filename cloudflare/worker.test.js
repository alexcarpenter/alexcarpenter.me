import assert from "node:assert/strict";
import { test } from "node:test";
import worker from "./worker.js";

async function serve(path, headers = {}, method = "GET") {
  let assetRequest;
  const response = await worker.fetch(
    new Request(`https://alexcarpenter.me${path}`, { headers, method }),
    {
      ASSETS: {
        async fetch(request) {
          assetRequest = request;
          return new Response(method === "HEAD" ? null : "asset", {
            headers: { "Content-Type": "text/html", Vary: "Accept-Encoding" },
          });
        },
      },
    },
  );
  return { response, assetRequest };
}

test("browser requests serve HTML with negotiation headers", async () => {
  const { response, assetRequest } = await serve("/", { accept: "text/html" });
  assert.equal(new URL(assetRequest.url).pathname, "/");
  assert.equal(response.headers.get("content-type"), "text/html");
  assert.equal(
    response.headers.get("vary"),
    "Accept-Encoding, Accept, User-Agent",
  );
});

test("Markdown and plain text requests rewrite the homepage", async () => {
  for (const accept of [
    "text/markdown",
    "text/plain",
    "text/html, text/markdown",
  ]) {
    const { response, assetRequest } = await serve("/?source=test", { accept });
    assert.equal(
      assetRequest.url,
      "https://alexcarpenter.me/index.md?source=test",
    );
    assert.equal(
      response.headers.get("content-type"),
      "text/markdown; charset=utf-8",
    );
  }
});

test("AI clients receive Markdown even when accepting HTML", async () => {
  for (const agent of [
    "GPTBot",
    "ChatGPT-User/1.0",
    "ClaudeBot",
    "PerplexityBot",
  ]) {
    const { assetRequest } = await serve("/", {
      accept: "text/html",
      "user-agent": agent,
    });
    assert.equal(new URL(assetRequest.url).pathname, "/index.md");
  }
});

test("other paths pass through regardless of client headers", async () => {
  for (const path of ["/notes/", "/index.md", "/missing/"]) {
    const { assetRequest } = await serve(path, { "user-agent": "GPTBot" });
    assert.equal(new URL(assetRequest.url).pathname, path);
  }
});

test("HEAD requests retain their method and have no body", async () => {
  const { response, assetRequest } = await serve(
    "/",
    { accept: "text/markdown" },
    "HEAD",
  );
  assert.equal(assetRequest.method, "HEAD");
  assert.equal(await response.text(), "");
});
