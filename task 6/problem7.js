let jsonData = '[{"id":1,"title":"Task 1"},{"id":2,"title":"Task 2"}]';
let data = JSON.parse(jsonData);

console.log("After Parse:", data);

let newObject = {
  id: 3,
  title: "Task 3",
};

data.push(newObject);

let updatedJSON = JSON.stringify(data);

console.log("Updated JSON:", updatedJSON);
