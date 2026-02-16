function getUniqueNumbers(arr) {
  return [...new Set(arr)];
}
console.log(getUniqueNumbers([1, 2, 3, 2, 4, 1, 5]));
