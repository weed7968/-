function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);
  for (let aNum of A) {
    let bMax = B[B.length - 1];
    if (bMax > aNum) {
      answer++;
      B.pop();
    }
  }
  return answer;
}
