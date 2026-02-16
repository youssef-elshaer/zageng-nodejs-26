function student(n, s) {
  let std = {
    name: n,
    score: s,
  };
  if (s >= 50) std.passed = "true";
  else std.passed = "false";
  console.log(std);
}
console.log(student("youssef", 85));
