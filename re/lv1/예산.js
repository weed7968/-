function solution(d, budget) {
  let cnt = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; budget >= 0; i++) {
    budget -= d[i];
    cnt++;
  }

  return cnt - 1;
}
