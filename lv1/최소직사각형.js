function solution(sizes) {
  let arr = sizes.map((obj) => obj.sort((a, b) => a - b));

  let a = 0;
  let b = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] > a) {
      a = arr[i][0];
    }
    if (arr[i][1] > b) {
      b = arr[i][1];
    }
  }

  return a * b;
}
