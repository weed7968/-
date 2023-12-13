function solution(n, m, section) {
  let answer = 0;
  let paint = 0;

  section.map((obj) => {
    if (obj > paint) {
      paint = obj + m - 1;
      answer++;
    }
  });

  return answer;
}
