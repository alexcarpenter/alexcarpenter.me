export const formatDate = (
  date: string,
  format: "short" | "long" | "full" = "short"
) => {
  const formats: { [key: string]: any } = {
    short: {
      month: "numeric",
      day: "numeric",
    },
    long: {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
    full: {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    },
  };
  let options = formats[format];
  options.timeZone = "UTC";
  return new Date(date).toLocaleDateString("en-us", options);
};
