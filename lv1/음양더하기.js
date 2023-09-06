function solution(absolutes, signs) {
  let arr = [];

  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? arr.push(+absolutes[i]) : arr.push(-absolutes[i]);
  }

  return arr.reduce((acc, curr) => acc + curr, 0);
}
