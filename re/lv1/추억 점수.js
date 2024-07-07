function solution(name, yearning, photo) {
  var answer = [];
  for (let arr of photo) {
    let cnt = 0;
    for (let i of arr) {
      if (name.indexOf(i) > -1) {
        cnt += yearning[name.indexOf(i)];
      }
    }
    answer.push(cnt);
  }
  return answer;
}
