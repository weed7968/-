function solution(s, skip, index) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].filter((el) => !skip.includes(el));

  return s
    .split("")
    .map((el) => alphabet[(alphabet.indexOf(el) + index) % alphabet.length])
    .join("");
}
