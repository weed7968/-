function solution(n, t, m, p) {
  let answer = "";
  let arr = [];
  let num = 0;
  while (arr.length < t * m) {
    num
      .toString(n)
      .toUpperCase()
      .split("")
      .forEach((e) => arr.push(e));
    num++;
  }

  for (let i = 0; i < t; i++) {
    answer += arr[m * i + p - 1];
  }

  return answer;
}
