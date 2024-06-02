function solution(msg) {
  let answer = [];
  let word = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  let str = "";

  for (let i = 0; i < msg.length; i++) {
    str += msg[i];
    if (!word[str]) {
      answer.push(word[str.slice(0, -1)]);
      word[str] = Object.keys(word).length + 1;
      str = msg[i];
    }
  }
  answer.push(word[str]);

  return answer;
}
