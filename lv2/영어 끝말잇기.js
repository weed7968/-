function solution(n, words) {
  var answer = [];
  let usedWords = new Set();
  let last = words[0][words[0].length - 1];

  usedWords.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    if (last !== words[i][0] || usedWords.has(words[i])) {
      answer.push((i % n) + 1);
      answer.push(Math.floor(i / n) + 1);
      break;
    }
    last = words[i][words[i].length - 1];
    usedWords.add(words[i]);
  }

  return answer.length === 0 ? [0, 0] : answer;
}
