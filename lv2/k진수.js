function solution(n, k) {
  let answer = 0;
  let arr = n.toString(k).split("0");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 1 || arr[i] === "") {
      continue;
    }

    let prime = true;
    for (let j = 2; j <= parseInt(Math.sqrt(arr[i])); j++) {
      if (arr[i] % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      answer++;
    }
  }

  return answer;
}
