let arr = [];
for (let i = 0; i < 4; i++) {
  let dec = prompt();
  arr.push(dec);
}
let roundedArr = arr.map(function (num) {
  return Math.round(num);
});

for (let z = 0; z < roundedArr.length; z++) {
  if (roundedArr[z] >= 8) console.log("pass");
  else console.log("fail");
}
