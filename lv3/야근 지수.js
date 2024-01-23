function solution(n, works) {
  let answer = 0;

  if (works.reduce((a, b) => a + b) <= n) return 0;

  works.sort((a, b) => b - a);

  while (n) {
    let max_num = works[0];

    for (let i = 0; i < works.length; i++) {
      if (works[i] >= max_num) {
        works[i] -= 1;
        n -= 1;
      }
      if (!n) break;
    }
  }
  works.forEach((el) => {
    answer += el * el;
  });
  return answer;
}
