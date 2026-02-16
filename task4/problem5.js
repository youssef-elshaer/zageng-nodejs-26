function getAdultNames(people) {
  return people
    .filter((person) => person.age >= 18)
    .map((person) => person.name);
}

let people = [
  { name: "youssef", age: 21 },
  { name: "mohamed", age: 24 },
  { name: "Omar", age: 17 },
  { name: "ahmed", age: 18 },
];

console.log(getAdultNames(people));
