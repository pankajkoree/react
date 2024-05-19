function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  let sum_ = 0
  for (const i of totalScores) {
    sum_ += i
  }

  if (getGrade(studentScore) !== "F") {
    return "Class average: " + (sum_ / totalScores.length) + "." + " Your grade: " + (getGrade(studentScore)) + "." + " You passed the course."
  }
  else if (getGrade(studentScore) === "A++") {
    return "Class average: " + (sum_ / totalScores.length) + "." + " Your grade: " + (getGrade(studentScore)) + "." + " You passed the course."
  }
  else {
    return "Class average: " + (sum_ / totalScores.length) + "." + " Your grade: " + (getGrade(studentScore)) + "." + " You failed the course."
  }

}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
