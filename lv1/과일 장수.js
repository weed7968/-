function solution(k, m, score) {
  var answer = 0;
  let arr = score.sort((a, b) => b - a);
  for (let i = 1; i <= parseInt(score.length / m); i++) {
    answer += arr[m * i - 1] * m;
  }

  return answer;
}
