function solution(s) {
  let upper = [];
  let lower = [];
  s.split("").map((obj) =>
    obj === obj.toUpperCase() ? upper.push(obj) : lower.push(obj)
  );

  return lower.sort().reverse().join("") + upper.sort().reverse().join("");
}
