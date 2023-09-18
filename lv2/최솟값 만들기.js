function solution(A, B) {
  let arr = [];

  for (let i = 0; i < A.length; i++) {
    arr.push(A.sort((a, b) => a - b)[i] * B.sort((a, b) => b - a)[i]);
  }

  return arr.reduce((acc, curr) => acc + curr, 0);
}

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((acc, curr, i) => acc + curr * B[i], 0);
}
