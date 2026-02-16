let arr = [];
let counter = 0;
for (let i = 0; i < 5; i++) {
  let nums = prompt(i + 1);
  arr.push(nums);
}
for (let z = 0; z < arr.length; z++) {
  if (arr[z] > 10) counter++;
}
console.log(counter);
