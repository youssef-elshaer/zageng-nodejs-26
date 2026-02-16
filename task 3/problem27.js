let num;

while (true) {
  num = Math.floor(Math.random() * 10) + 1;
  console.log(num);

  if (num === 7) {
    break;
  }
}
