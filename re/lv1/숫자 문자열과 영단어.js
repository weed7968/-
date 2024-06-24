function solution(s) {
  let answer = "";
  let word = "";

  const wordsToNumbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let char of s) {
    if (!isNaN(char)) {
      answer += char;
    } else {
      word += char;

      if (wordsToNumbers[word] !== undefined) {
        answer += wordsToNumbers[word];
        word = "";
      }
    }
  }

  return +answer;
}
