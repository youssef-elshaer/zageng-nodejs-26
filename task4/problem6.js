function fact(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}
console.log(fact(5));
