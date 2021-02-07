const widont = (str) => {
  // Find the last word in a string with a space before it
  const REGEX = /\s((?=(([^\s<>]|<[^>]*>)+))\2)\s*$/;
  // Replace the space with &nbsp;
  return str.replace(REGEX, '\u00A0$1');
};

export default widont;
