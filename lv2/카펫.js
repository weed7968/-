function solution(brown, yellow) {
  var answer = [];
  for (let i = 0; i < brown / 2; i++) {
    if (i * (brown / 2 - 2 - i) == yellow) {
      answer = [i + 2, brown / 2 - i];
    }
  }

  return answer;
}
