function solution(s) {
  var answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s.slice(0, i).split("").reverse().indexOf(s[i]) !== -1) {
      answer.push(s.slice(0, i).split("").reverse().indexOf(s[i]) + 1);
    } else {
      answer.push(-1);
    }
  }

  return answer;
}
