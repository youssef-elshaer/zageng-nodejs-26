function number(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i] + 1);
    } else {
      result.push(arr[i] - 1);
    }
  }

  return result;
}