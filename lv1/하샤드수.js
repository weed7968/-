function solution(x) {
  let sum = (x + "").split("").reduce((acc, curr) => acc + curr * 1, 0);

  return sum;
}
