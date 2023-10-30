function solution(k, score) {
  let answer = [];
  let arr = [];
  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    arr.sort((a, b) => a - b);
    if (i < k) {
      answer.push(arr[0]);
    } else {
      answer.push(arr[i - k + 1]);
    }
  }
  return answer;
}
