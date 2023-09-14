function solution(s) {
  return /^\d{4}$|^\d{6}$/.test(s);
}

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] < "0" || s[i] > "9") {
      return false;
    }
  }

  return true;
}
