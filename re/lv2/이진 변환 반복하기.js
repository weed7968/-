function solution(s) {
  let arr = [0, 0];
  while (s.length > 1) {
    arr[0]++;
    arr[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return arr;
}
