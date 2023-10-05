function solution(s, n) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === " ") {
      result += " ";
    } else {
      const isUpperCase = char === char.toUpperCase();
      const alphabet = isUpperCase
        ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        : "abcdefghijklmnopqrstuvwxyz";
      const charIndex = alphabet.indexOf(char);

      const newIndex = (charIndex + n) % alphabet.length;
      const newChar = alphabet[newIndex];
      result += isUpperCase ? newChar : newChar.toLowerCase();
    }
  }

  return result;
}
