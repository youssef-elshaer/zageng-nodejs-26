function removeSpaces(strParam) {
  let str = "#";
  for (let i = 0; i < strParam.length; i++) {
    if (strParam[i] == " ") {
      continue;
    } else {
      str = str.concat(strParam[i]);
    }
  }
  return str;
}
console.log(removeSpaces("my name is youssef"));
