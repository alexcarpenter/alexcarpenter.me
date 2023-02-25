const CHARACTERS = [
  "A",
  "a",
  "B",
  "b",
  "C",
  "c",
  "D",
  "d",
  "E",
  "e",
  "F",
  "f",
  "G",
  "g",
  "H",
  "h",
  "I",
  "i",
  "J",
  "j",
  "K",
  "k",
  "L",
  "l",
  "M",
  "m",
  "N",
  "n",
  "O",
  "o",
  "P",
  "p",
  "Q",
  "q",
  "R",
  "r",
  "S",
  "s",
  "T",
  "t",
  "U",
  "u",
  "V",
  "v",
  "W",
  "w",
  "X",
  "x",
  "Y",
  "y",
  "Z",
  "z",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  ",",
  ".",
  "/",
  "<",
  ">",
  "?",
];

const scramble = (text: string) => {
  const chars = text.split("");
  const obfuscatedChars = chars.map((char) => {
    if (/^\s$/.test(char)) {
      return char;
    }
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    return CHARACTERS[randomIndex];
  });
  return obfuscatedChars.join("");
};

const getScrambledState = (
  text: string,
  windowSize: number,
  windowStart: number
) => {
  const unscrambled = text.slice(0, windowStart);
  const scrambled = scramble(text.slice(windowStart, windowStart + windowSize));
  return [unscrambled, scrambled];
};

export { getScrambledState };
