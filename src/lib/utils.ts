export function enforceExhaustive(
  value: never,
  message = "Unexpected value",
): never {
  throw new Error(`${message} '${value}'`);
}

export function formatLinkHostname(urlString: string): string {
  const url = new URL(urlString);
  const hostname = url.hostname.replace(/^www\./, "");

  // For Twitter/X links, show x.com/username or twitter.com/username
  if (hostname.includes("twitter.com") || hostname.includes("x.com")) {
    const username = url.pathname.split("/")[1];
    return username ? `${hostname}/${username}` : hostname;
  }

  // For all other links, just show the hostname
  return hostname;
}
