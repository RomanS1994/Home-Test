function finalGrade(exam, projects) {
  let grade;
  switch (true) {
    case exam > 90 || projects > 10:
      grade = 100;
      break;
    case exam > 75 && projects >= 5:
      grade = 90;
      break;
    case exam > 50 && projects >= 2:
      grade = 75;
      break;
    default:
      grade = 0;
  }
  return grade;
}
console.log(finalGrade(100, 12));
/************  ************/
