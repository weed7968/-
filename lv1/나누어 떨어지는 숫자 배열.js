function solution(arr, divisor) {
  let answer = [];
  arr
    .sort((a, b) => a - b)
    .map((obj) => {
      if (obj % divisor === 0) {
        answer.push(obj);
      }
    });

  if (answer.length === 0) {
    return [-1];
  }
  return answer;
}
