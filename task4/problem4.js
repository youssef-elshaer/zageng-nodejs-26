function getAverage(arr) {
  let sum = arr.reduce((total, current) => {
    return total + current;
  }, 0);

  return sum / arr.length;
}

console.log(getAverage([10, 20, 30, 40]));
