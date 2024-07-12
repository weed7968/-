function solution(a, b) {
  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let dayIndex = 4;

  for (let i = 0; i < a - 1; i++) {
    dayIndex += daysInMonth[i];
  }

  dayIndex += b;
  dayIndex %= 7;

  return days[dayIndex];
}
