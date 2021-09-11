const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddWebsite(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  tbodyEl.innerHTML += `
      <tr>
          <td>${email}</td>
          <td><button class="deleteBtn">Delete</button></td>
      </tr>
  `;
  localStorage.setItem("students-email",email)
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

formEl.addEventListener("submit", onAddWebsite);
tableEl.addEventListener("click", onDeleteRow);