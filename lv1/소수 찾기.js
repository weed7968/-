function solution(n) {
  let answer = 1;
  for (let i = 3; i <= n; i++) {
    let cnt = 0;
    for (let j = 2; j <= parseInt(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        cnt++;
        break;
      }
    }
    if (cnt === 0) {
      answer++;
    }
  }
  return answer;
}

function solution(n) {
  const sieve = [];

  for (let i = 2; i <= n; i++) {
    sieve[i] = i;
  }

  for (let j = 2; j <= n; j++) {
    if (sieve[j] === 0) continue;
    for (let k = j + j; k <= n; k += j) {
      sieve[k] = 0;
    }
  }

  return sieve.filter((el) => el).length;
}
