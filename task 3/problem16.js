let nums = [];
for (let i = 0; i < 5; i++) {
  let num = prompt();
  nums.push(num);
}
let maxNum = Math.max(...nums);
let minNum = Math.min(...nums);
console.log(maxNum);
console.log(minNum);
