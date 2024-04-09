function solution(progresses, speeds) {
  var answer = [];
  while (progresses.find((el) => el < 100)) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    let deployCount = 0;

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deployCount++;
    }

    if (deployCount > 0) {
      answer.push(deployCount);
    }
  }

  return answer;
}
