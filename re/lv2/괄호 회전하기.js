function isBalanced(s) {
  const stack = [];
  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (char === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if (char === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

function solution(s) {
  let count = 0;
  const n = s.length;

  for (let x = 0; x < n; x++) {
    const rotatedString = s.slice(x) + s.slice(0, x);
    if (isBalanced(rotatedString)) {
      count++;
    }
  }

  return count;
}
