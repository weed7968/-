function solution(numbers, target) {
  let answer = 0;

  function dfs(num, sum) {
    if (num === numbers.length) {
      if (sum === target) {
        answer += 1;
      }

      return;
    }

    dfs(num + 1, sum + numbers[num]);
    dfs(num + 1, sum - numbers[num]);
  }

  dfs(0, 0);

  return answer;
}
