function solution(phone_number) {
  let arr = (phone_number + "").split("").reverse();
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < 4) {
      newArr.push(arr[i]);
    } else {
      newArr.push("*");
    }
  }

  return newArr.reverse().join("");
}
