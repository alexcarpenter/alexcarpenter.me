export const isInternalLink = (url: string) => {
  if (url.startsWith("/") || url.startsWith("#")) {
    return true;
  }
  return false;
};
