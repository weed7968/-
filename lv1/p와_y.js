function solution(s) {
  let countP = 0;
  let countY = 0;

  s.split("").map((obj) => {
    if (obj === "p" || obj === "P") {
      countP += 1;
    } else if (obj === "y" || obj === "Y") {
      countY += 1;
    }
  });

  return countP === countY ? true : false;
}
