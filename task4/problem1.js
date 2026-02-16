function convertArrayToUpper(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }

  return result;
}
console.log(convertArrayToUpper(["youssef", "ahmed", "mohamed"]));
