function count(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      cnt++;
    }
  }
  return cnt;
}

function solution(left, right) {
  let arr = [];
  for (let i = left; i <= right; i++) {
    count(i) % 2 === 0 ? arr.push(i) : arr.push(-i);
  }

  return arr.reduce((acc, curr) => acc + curr, 0);
}
