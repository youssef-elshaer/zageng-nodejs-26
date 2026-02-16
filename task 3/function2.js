function reverseArr(arr) {
  let newArr = arr;
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
    (i++, j--);
  }
  return newArr;
}
console.log(reverseArr([1, 2, 3, 4]));
console.log(reverseArr(["a", "b", "c"]));
