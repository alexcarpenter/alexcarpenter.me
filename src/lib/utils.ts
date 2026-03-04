export function enforceExhaustive(
  value: never,
  message = "Unexpected value",
): never {
  throw new Error(`${message} '${value}'`);
}

export function formatLinkHostname(urlString: string): string {
  const url = new URL(urlString);

  // For Twitter/X links, show x.com/username or twitter.com/username
  if (url.hostname.includes("twitter.com") || url.hostname.includes("x.com")) {
    const username = url.pathname.split("/")[1];
    return username ? `${url.hostname}/${username}` : url.hostname;
  }

  // For all other links, just show the hostname
  return url.hostname;
}
