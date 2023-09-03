function solution(n) {
  var answer = [];
  (n + "").split("").map((obj) => answer.unshift(obj * 1));
  return answer;
}
