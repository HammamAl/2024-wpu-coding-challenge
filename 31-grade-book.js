function getGrade(s1, s2, s3) {
  const total = (s1 + s2 + s3) / arguments.length;
  if (total >= 90 && total <= 100) {
    return "A";
  } else if (total >= 80 && total < 90) {
    return "B";
  } else if (total >= 70 && total < 80) {
    return "C";
  } else if (total >= 60 && total < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));
