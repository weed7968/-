function solution(s) {
  let cntOpen = 0;
  let cntClose = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      cntOpen++;
    } else {
      cntClose++;
    }

    if (cntClose > cntOpen) {
      return false;
    }
  }

  return cntOpen === cntClose ? true : false;
}

function solution(s) {
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? cnt++ : cnt--;

    if (cnt < 0) {
      return false;
    }
  }

  return cnt === 0 ? true : false;
}
