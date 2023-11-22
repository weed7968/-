function solution(s) {
  let answer = [];
  let tuple = s
    .slice(2, -2)
    .split("},{")
    .sort((a, b) => a.length - b.length);

  tuple.forEach((el) => {
    let arr = el.split(",");
    answer.push(arr.find((e) => !answer.includes(e)));
  });

  return answer.map((e) => Number(e));
}
