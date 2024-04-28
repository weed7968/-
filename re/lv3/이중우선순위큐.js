function solution(operations) {
  let arr = [];
  let op = operations.map((el) => el.split(" "));

  op.forEach((el) => {
    if (el[0] === "I") {
      arr.push(Number(el[1]));
    } else {
      let num = (el[1] === "1" ? Math.max : Math.min)(...arr);
      let idx = arr.indexOf(num);
      arr.splice(idx, 1);
    }
  });
  return arr.length ? [Math.max(...arr), Math.min(...arr)] : [0, 0];
}
