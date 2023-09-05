function solution(num) {
  let cnt = 0;
  let newN = num;
  for (let i = 1; i <= 500; i++) {
    if (newN === 1) {
      break;
    } else if (newN % 2 === 0) {
      cnt += 1;
      newN = newN / 2;
    } else {
      cnt += 1;
      newN = newN * 3 + 1;
    }
    if (i === 500) {
      cnt = -1;
    }
  }
  return cnt;
}
