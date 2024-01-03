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
const addTodo = () => {
  let titleValue = document.getElementById("title-value").value;
  let textValue = document.getElementById("textarea-value").value;
  let statusValue = document.getElementById("status-value").value;
  let priorityValue = document.getElementById("priority-value").value;

  let obj = {
    id: Math.floor(Math.random(99 - 0) + 0),
    title: titleValue,
    description: textValue,
    status: statusValue,
    priority: priorityValue,
  };
  arr.push(obj);

  render();
};

const render = () => {
  let todo = "";
  let inprogress = "";
  let stuck = "";
  let done = "";

  const filteredToDo = arr.filter((el, i) => el.status === "todo");
  const filteredInProgress = arr.filter((el, i) => el.status === "inprogress");
  const filteredStuck = arr.filter((el, i) => el.status === "stuck");
  const filteredDone = arr.filter((el, i) => el.status === "done");
  document.getElementsByClassName("toDoCount")[0].innerHTML =
    filteredToDo.length;
  document.getElementsByClassName("inProgressCount")[0].innerHTML =
    filteredInProgress.length;
  document.getElementsByClassName("stuckCount")[0].innerHTML =
    filteredStuck.length;
  document.getElementsByClassName("doneCount")[0].innerHTML =
    filteredDone.length;
  filteredToDo.forEach((el, i) => {
    todo += `<div
    class="iishee"
    draggable="true"
    ondragstart="drag(event)"
    id="todo${i}"
  >
    <div class="circle">&#10003;</div>
    <div class="display-flex">
      <div>${el.title}</div>
      <div>${el.description}</div>
      <div class="level">${el.status}</div>
    </div>
    <div class="edit">
      <div class="circle" onclick="x()">&#10006;</div>
      <div class="circle">&#9985;</div>
    </div>
  </div>`;
    document.getElementById("flex").innerHTML = todo;
  });

  filteredInProgress.forEach((el, i) => {
    inprogress += `<div
    class="iishee"
    draggable="true"
    ondragstart="drag(event)"
    id="inprogress${i}"
  >
    <div class="circle">&#10003;</div>
    <div class="display-flex">
      <div>${el.title}</div>
      <div>${el.description}</div>
      <div class="level">${el.status}</div>
    </div>
    <div class="edit">
      <div class="circle">&#10006;</div>
      <div class="circle">&#9985;</div>
    </div>
  </div>`;
    document.getElementsByClassName("inProgress")[0].innerHTML = inprogress;
  });
  filteredStuck.forEach((el, i) => {
    stuck += `<div
    class="iishee"
    draggable="true"
    ondragstart="drag(event)"
    id="stuck${i}"
  >
    <div class="circle">&#10003;</div>
    <div class="display-flex">
      <div>${el.title}</div>
      <div>${el.description}</div>
      <div class="level">${el.status}</div>
    </div>
    <div class="edit">
      <div class="circle">&#10006;</div>
      <div class="circle">&#9985;</div>
    </div>
  </div>`;
    document.getElementsByClassName("STUCK")[0].innerHTML = stuck;
  });
  filteredDone.forEach((el, i) => {
    done += `<div
    class="iishee"
    draggable="true"
    ondragstart="drag(event)"
    id="done${i}"
  >
    <div class="circle">&#10003;</div>
    <div class="display-flex">
      <div>${el.title}</div>
      <div>${el.description}</div>
      <div class="level">${el.status}</div>
    </div>
    <div class="edit">
      <div class="circle">&#10006;</div>
      <div class="circle">&#9985;</div>
    </div>
  </div>`;
    document.getElementsByClassName("DONE")[0].innerHTML = done;
  });
};
render();

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

const x = (ev) => {
  console.log(ev);
};
