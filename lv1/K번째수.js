function solution(array, commands) {
  let answer = commands.map(
    (obj) => array.slice(obj[0] - 1, obj[1]).sort((a, b) => a - b)[obj[2] - 1]
  );
  return answer;
}
