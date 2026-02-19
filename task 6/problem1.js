let students = [];
function addStudent() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const grade = document.getElementById("grade").value;

  if (!name || !age || !grade) {
    alert("Please fill all fields");
    return;
  }

  const student = {
    name: name,
    age: age,
    grade: grade
  };

  students.push(student);

  displayStudents();
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("grade").value = "";
}
function displayStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.textContent = ${student.name} - Age: ${student.age} - Grade: ${student.grade};
    list.appendChild(li);
  });
}
function saveToJSON() {
  const jsonString = JSON.stringify(students);
  document.getElementById("jsonOutput").value = jsonString;
}
function loadFromJSON() {
  const jsonString = document.getElementById("jsonOutput").value;

  if (!jsonString) {
    alert("No JSON data found");
    return;
  }

  students = JSON.parse(jsonString);
  displayStudents();
}