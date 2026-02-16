let arr = [];
for (let i = 0; i < 5; i++) {
  let ages = prompt();
  arr.push(ages);
}

for (let z = 0; z < arr.length; z++) {
  if (arr[z] >= 18) console.log(arr[z]);
}
