function solution(s) {
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]
      .split("")
      .map((obj, ind) => {
        return ind % 2 === 0 ? obj.toUpperCase() : obj.toLowerCase();
      })
      .join("");
  }
  return arr.join(" ");
}
