export const getHostname = (url: string) => {
  let hostname;
  try {
    hostname = new URL(url).hostname;
  } catch (error) {
    throw new Error("Invalid url");
  }
  return hostname;
};
