function solution(files) {
  return files.sort((a, b) => {
    const arr1 = a.match(/^\D+/)[0];
    const arr2 = b.match(/^\D+/)[0];
    const num1 = parseInt(a.match(/\d+/)[0], 10);
    const num2 = parseInt(b.match(/\d+/)[0], 10);
    if (arr1.toUpperCase() < arr2.toUpperCase()) return -1;
    if (arr1.toUpperCase() > arr2.toUpperCase()) return 1;
    if (num1 < num2) return -1;
    if (num1 > num2) return 1;
  });
}
