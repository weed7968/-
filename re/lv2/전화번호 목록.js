function solution(phone_book) {
  let phone = {};

  phone_book.forEach((obj) => (phone[obj] = true));

  for (let num of phone_book) {
    for (let i = 1; i < num.length; i++) {
      if (phone[num.slice(0, i)]) {
        return false;
      }
    }
  }

  return true;
}
