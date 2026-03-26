const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const errorMessage =  document.getElementById("error-message")

function addTask() {
  if (inputBox.value === "") {
    errorMessage.textContent = "Digite uma tarefa!!";
    errorMessage.style.display = "block"; // Mostra o erro"

  } else {
  errorMessage.style.display = "none"; // Esconde o erro se estiver tudo ok

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false,
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();