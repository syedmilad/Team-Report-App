const StName = document.getElementById("name");
const category = document.getElementById("category");
const member = document.getElementById("member");
const addStudents = document.querySelector(".add-students");
const studentForm = document.getElementById("studentForm");

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, category, member) => {
  students.push({
    name,
    category,
    member,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, category, member };
};

const createStudentElement = ({ name, category, member }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentCategory = document.createElement("p");
  const studentMember = document.createElement("p");
  const addStudents = document.querySelector(".add-students");
  
  // Fill the content
  studentName.innerText = `student name: ${name}`;
  studentCategory.innerText = `Student category:  ${category}`;
  studentMember.innerText = `Student member:  ${member}`;

  // Add to the DOM
  studentDiv.append(studentName, studentCategory, studentMember);
  addStudents.appendChild(studentDiv);


    addStudents.style.display = students.length === 0 ? "none" : "block";
};
addStudents.style.display = students.length === 0 ? "none" : "grid";

students.forEach(createStudentElement);

studentForm.onsubmit = (e) => {
  e.preventDefault();

  const newStudent = addStudent(StName.value, category.value, member.value);

  createStudentElement(newStudent);

  StName.value = "";
  category.value = "";
  member.value = "";
};
