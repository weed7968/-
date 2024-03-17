function gcd(a, b) {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

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
