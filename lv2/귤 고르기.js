function solution(k, tangerine) {
  const counts = {};

  for (const size of tangerine) {
    if (counts[size]) {
      counts[size]++;
    } else {
      counts[size] = 1;
    }
  }

  let result = 0;

  const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  for (const [size, count] of sortedCounts) {
    if (count >= k) {
      result++;
      break;
    } else {
      result++;
      k -= count;
    }
  }

  return result;
}
