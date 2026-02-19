let images = [
  "assets/1.jpg",
  "assets/2.jpg",
  "assets/3.jpg",
  "assets/4.jpg",
  "assets/5.jpg",
];

const previous = document.getElementById("previous");
let current = 0;
previous.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = images.length - 1;
  }

  const img = document.querySelector("img");
  img.src = images[current];
});

const next = document.getElementById("next");
next.addEventListener("click", () => {
  current++;
  if (current > images.length - 1) {
    current = 0;
  }
  const img = document.querySelector("img");
  img.src = images[current];
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  current = 0;
  const img = document.querySelector("img");
  img.src = images[current];
});
