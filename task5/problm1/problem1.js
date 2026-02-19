let students = [];

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const gradeInput = document.getElementById("grade");
const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");
addBtn.addEventListener("click", function () {
  const name = nameInput.value;
  const age = ageInput.value;
  const grade = gradeInput.value;
  if (name === "" || age === "" || grade === "") {
    alert("Please fill all fields");
    return;
  }
  const student = {
    name: name,
    age: age,
    grade: grade,
  };
  students.push(student);
  nameInput.value = "";
  ageInput.value = "";
  gradeInput.value = "";

  renderStudents();
});
function renderStudents() {
  studentList.innerHTML = "";

  students.forEach(function (student, index) {
    const li = document.createElement("li");
    li.textContent = `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade} `;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      students.splice(index, 1);
      renderStudents();
    });

    li.appendChild(deleteBtn);
    studentList.appendChild(li);
  });
}
