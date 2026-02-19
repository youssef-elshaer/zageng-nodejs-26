function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Positive");
    } else if (num === 0) {
      resolve("Zero");
    } else {
      reject("Negative");
    }
  });
}
checkNumber(5)
  .then((result) => {
    console.log("Then/Catch Result:", result);
  })
  .catch((error) => {
    console.log("Then/Catch Error:", error);
  });
async function testNumber() {
  try {
    const result = await checkNumber(-3);
    console.log("Async/Await Result:", result);
  } catch (error) {
    console.log("Async/Await Error:", error);
  }
}

testNumber();
