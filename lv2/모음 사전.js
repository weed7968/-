function solution(word) {
  let answer = 0;
  let arr = ["A", "E", "I", "O", "U"];
  const plus = [781, 156, 31, 6, 1];

  for (let i = 0; i < word.length; i++) {
    answer += plus[i] * arr.indexOf(word[i]) + 1;
  }
  return answer;
}
