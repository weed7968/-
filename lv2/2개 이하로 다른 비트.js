function solution(numbers) {
  let answer = [];

  for (let num of numbers) {
    let binaryStr = num.toString(2);

    if (!binaryStr.includes("0")) {
      binaryStr = "0" + binaryStr;
    }

    let arrNum = binaryStr.split("");
    for (let i = arrNum.length - 1; i >= 0; i--) {
      if (arrNum[i] === "0") {
        arrNum[i] = "1";
        if (i < arrNum.length - 1) {
          arrNum[i + 1] = "0";
        }
        break;
      }
    }

    answer.push(parseInt(arrNum.join(""), 2));
  }

  return answer;
}
