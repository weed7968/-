// function solution(people, limit) {
//   var answer = 0;
//   people.sort((a, b) => a - b);
//   while(people.length !== 0){
//       if(people[0] + people[people.length -1] <= limit){
//           people.pop()
//           people.shift()
//       }else{
//           people.pop()
//       }
//       answer ++
//   }
//   return answer;
// }

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  let left = 0; // 가장 가벼운 사람의 인덱스
  let right = people.length - 1; // 가장 무거운 사람의 인덱스

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    answer++;
  }

  return answer;
}
