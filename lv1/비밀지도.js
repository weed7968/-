function solution(n, arr1, arr2) {
  let arr = arr1.map((obj, idx) => {
    let sum = Number(obj.toString(2)) + Number(arr2[idx].toString(2));
    return (
      "0".repeat(n - sum.toString().length) +
      sum.toString().replaceAll("2", "1")
    );
  });

  return arr.map((obj) => obj.replaceAll("1", "#").replaceAll("0", " "));
}
