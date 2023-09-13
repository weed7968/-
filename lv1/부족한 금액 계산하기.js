function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += i;
  }

  return sum * price < money ? 0 : sum * price - money;
}
