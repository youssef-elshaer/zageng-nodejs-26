function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 1000);
  });
}

async function load() {
  const result = await getData();
  console.log(result);
}

load();
