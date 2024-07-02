function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    answer += parseInt(n / a) * b;
    let r = n % a;
    n = parseInt(n / a) * b + r;
  }
  return answer;
}
