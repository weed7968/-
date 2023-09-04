function solution(n) {
  var answer = (n + "")
    .split("")
    .sort(function compare(a, b) {
      return b - a;
    })
    .reduce((acc, curr) => acc + curr, "");

  return answer * 1;
}
