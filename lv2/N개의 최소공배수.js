//두 수의 최소공배수
function gcd(a, b) {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

//두 수의 최소공배수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let n = arr[0];
  for (let i = 1; i < arr.length; i++) {
    n = lcm(n, arr[i]);
  }

  return n;
}
