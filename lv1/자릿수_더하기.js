function solution(n) {
  var answer = (n + "")
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0);

  return answer;
}
