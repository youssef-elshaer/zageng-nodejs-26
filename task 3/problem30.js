let arr = [];

for (let i = 0; i < 5; i++) {
  let value = prompt("Enter value " + (i + 1));

  if (isNaN(value)) {
    arr.push(value);
  }
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
