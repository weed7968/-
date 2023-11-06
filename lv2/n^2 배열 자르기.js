function solution(n, left, right) {
  let arr = Array(n)
    .fill()
    .map(() => []);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      for (let k = 0; k <= i; k++) {
        if (!arr[j][k]) {
          arr[j][k] = i + 1;
        }
      }
    }
  }

  return arr.reduce((acc, curr) => acc.concat(curr), []).slice(left, right + 1);
}

function solution(n, left, right) {
  const result = new Array(right - left + 1);

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    result[i - left] = Math.max(row, col) + 1;
  }

  return result;
}
