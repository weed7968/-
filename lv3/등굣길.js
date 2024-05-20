function solution(m, n, puddles) {
  const matrix = Array.from({ length: n }).map((v) => Array.from({ length: m }).fill(1));

  puddles.forEach(([m, n]) => {
    matrix[n - 1][m - 1] = 0;
  });
  const result = matrix.reduce((prev, row, i) => {
    return row.reduce((a, v, j) => {
      a[j] = (v === 0 ? v : i === 0 ? a[j - 1] ?? 1 : prev[j] + (a[j - 1] ?? 0)) % 1000000007;
      return a;
    }, []);
  }, []);

  return result[m - 1] % 1000000007;
}
