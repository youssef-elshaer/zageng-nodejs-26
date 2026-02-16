let arr = [];
for (let i = 0; i < 5; i++) {
  let i = prompt();
  arr.push(i);
}
for (let z = 0; z < arr.length; z++) {
  if (!isNaN(arr[z])) console.log(arr[z]);
}
