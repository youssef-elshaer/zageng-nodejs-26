let arr = [];
for (let i = 0; i < 5; i++) {
  let nums = prompt(i + 1);
  arr.push(nums);
}
for (let z = 0; z < arr.length; z++) {
  console.log(arr[z] / 2);
}
