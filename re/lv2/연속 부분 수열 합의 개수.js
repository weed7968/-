function solution(elements) {
  let answer = new Set();
  let arr = [...elements, ...elements];
  for (let i = 1; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      answer.add(arr.slice(j, j + i).reduce((acc, curr) => acc + curr, 0));
    }
  }
  return answer.size + 1;
}
