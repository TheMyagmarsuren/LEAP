const show = () => {
  document.getElementsByClassName("modalContainer")[0].classList.add("show");
};
for (let i = 0; i < 4; i++) {
  const addCardButton = document.querySelectorAll(".add-btn");
  addCardButton[i].addEventListener("click", show);
}
const modalContainer = document.getElementsByClassName("modalContainer")[0];
window.onclick = (event) => {
  if (event.target == modalContainer) {
    modalContainer.classList.remove("show");
  }
};

const addTaskButton = document.getElementById("submit");

const arr = [];
const render = () => {
  let todoContainerElemenents = "";
  let doneContainerElemenents = "";
  let stuckContainerELements = "";
  let inProgressContainerElements = "";
  const filteredTodo = arr.filter((el, i) => el.status === "todo");
  const filteredDone = arr.filter((el, i) => el.status === "done");
  const filteredStuck = arr.filter((el, i) => el.status === "stuck");
  const filteredInProgress = arr.filter((el, i) => el.status === "inprogress");
  filteredTodo.forEach((el, i) => {
    todoContainerElemenents += `<div class="iishee"><div class="circle">&#10003;</div><div class="display-flex"><div>${el.title}</div><div>${el.description}</div><div class="level">${el.status}</div></div><div class="edit"><div class="circle">&#10006;</div><div class="circle">&#9985;</div></div></div>`;
  });
  filteredStuck.forEach((el, i) => {
    stuckContainerELements += `<div class="iishee"><div class="circle">&#10003;</div><div class="display-flex"><div>${el.title}</div><div>${el.description}</div><div class="level">${el.status}</div></div><div class="edit"><div class="circle">&#10006;</div><div class="circle">&#9985;</div></div></div>`;
  });
  filteredDone.forEach((el, i) => {
    doneContainerElemenents += `<div class="iishee"><div class="circle">&#10003;</div><div class="display-flex"><div>${el.title}</div><div>${el.description}</div><div class="level">${el.status}</div></div><div class="edit"><div class="circle">&#10006;</div><div class="circle">&#9985;</div></div></div>`;
  });
  filteredInProgress.forEach((el, i) => {
    inProgressContainerElements += `<div class="iishee"><div class="circle">&#10003;</div><div class="display-flex"><div>${el.title}</div><div>${el.description}</div><div class="level">${el.status}</div></div><div class="edit"><div class="circle">&#10006;</div><div class="circle">&#9985;</div></div></div>`;
  });
  console.log(
    (document.getElementById("todo").innerHTML = todoContainerElemenents)
  );
  document.getElementById("inprogress").innerHTML = inProgressContainerElements;
  document.getElementById("done").innerHTML = doneContainerElemenents;
  document.getElementById("stuck").innerHTML = stuckContainerELements;
};
render();

const addTodo = () => {
  let titleValue = document.getElementById("title-value").value;
  let textValue = document.getElementById("textarea-value").value;
  let statusValue = document.getElementById("status-value").value;
  let priorityValue = document.getElementById("priority-value").value;

  let obj = {
    title: titleValue,
    description: textValue,
    status: statusValue,
    priority: priorityValue,
  };
  arr.push(obj);
  render();
};
addTaskButton.addEventListener("click", addTodo);
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
