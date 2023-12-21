function solution(str1, str2) {
  let arr1 = [];
  let arr2 = [];
  let inter = 0;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length - 1; i++) {
    if (
      str1[i] >= "a" &&
      str1[i] <= "z" &&
      str1[i + 1] >= "a" &&
      str1[i + 1] <= "z"
    ) {
      arr1.push(str1[i] + str1[i + 1]);
    }
  }

  for (let j = 0; j < str2.length - 1; j++) {
    if (
      str2[j] >= "a" &&
      str2[j] <= "z" &&
      str2[j + 1] >= "a" &&
      str2[j + 1] <= "z"
    ) {
      arr2.push(str2[j] + str2[j + 1]);
    }
  }

  for (let x = 0; x < arr1.length; x++) {
    for (let y = 0; y < arr2.length; y++) {
      if (arr1[x] === arr2[y]) {
        inter++;
        arr2[y] = ".";
        break;
      }
    }
  }
  let union = arr1.length + arr2.length - inter;

  return union === inter ? 65536 : Math.floor((inter / union) * 65536);
}
