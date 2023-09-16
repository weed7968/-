function solution(s) {
  let arr = s.split("");

  return arr
    .map((obj, i) => {
      if (arr[i - 1] === " " || i === 0) {
        return obj.toUpperCase();
      } else {
        return obj.toLowerCase();
      }
    })
    .join("");
}
