function solution(n) {
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let num = i;

    while (sum < n) {
      sum += num;
      num++;

      if (sum === n) {
        cnt++;
        break;
      }
    }
  }

  return cnt;
}
