function solution(s) {
  let arr = [];

  for (let word of s) {
    if (arr.length === 0 || arr[arr.length - 1] !== word) {
      arr.push(word);
    } else {
      arr.pop();
    }
  }

  return arr.length === 0 ? 1 : 0;
}
