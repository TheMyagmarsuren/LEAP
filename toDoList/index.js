const show = () => {
  document.getElementsByClassName("modalContainer")[0].classList.add("show");
};

const hide = () => {
  document.getElementsByClassName("buttonClass")[0].classList.remove("show");
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
    id: titleValue + Math.ceil(Math.random() * (999 - 0) + 0),
    title: titleValue,
    description: textValue,
    status: statusValue,
    priority: priorityValue,
  };
  arr.push(obj);
  document.getElementsByClassName("modalContainer")[0].classList.remove("show");
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
    id="${el.id}"
  >
    <div class="circle" onclick="select(event.target.parentElement.id)">&#10003;</div>
    <div class="display-flex">
      <div>${el.title}</div>
      <div>${el.description}</div>
      <div class="level">${el.status}</div>
    </div>
    <div class="edit">
      <div class="circle"  onclick="x(event.target.parentElement.parentElement.id)">&#10006;</div>
      <div class="circle" onclick="edit(event.target.parentElement.parentElement.id)">&#9985;</div>
    </div>
  </div>`;
    document.getElementById("todo").innerHTML = todo;
  });

  filteredInProgress.forEach((el, i) => {
    inprogress += `<div
    class="iishee"
    draggable="true"
    ondragstart="drag(event)"
    id="${el.id}"
  >
    <div class="circle" onclick="select(event.target.parentElement.id)">&#10003;</div>
    <div class="display-flex">
      <div>${el.title}</div>
      <div>${el.description}</div>
      <div class="level">${el.status}</div>
    </div>
    <div class="edit">
      <div class="circle"  onclick="x(event.target.parentElement.parentElement.id)">&#10006;</div>
      <div class="circle" onclick="edit(event.target.parentElement.parentElement.id)">&#9985;</div>
    </div>
  </div>`;
    document.getElementsByClassName("inProgress")[0].innerHTML = inprogress;
  });
  filteredStuck.forEach((el, i) => {
    stuck += `<div
    class="iishee"
    draggable="true"
    ondragstart="drag(event)"
    id="${el.id}"
  >
    <div class="circle" onclick="select(event.target.parentElement.id)">&#10003;</div>
    <div class="display-flex">
      <div>${el.title}</div>
      <div>${el.description}</div>
      <div class="level">${el.status}</div>
    </div>
    <div class="edit">
      <div class="circle"  onclick="x(event.target.parentElement.parentElement.id)">&#10006;</div>
      <div class="circle" onclick="edit(event.target.parentElement.parentElement.id)">&#9985;</div>
    </div>
  </div>`;
    document.getElementsByClassName("STUCK")[0].innerHTML = stuck;
  });
  filteredDone.forEach((el, i) => {
    done += `<div
    class="iishee"
    draggable="true"
    ondragstart="drag(event)"
    id="${el.id}"
  >
    <div class="doneCircle" onclick="select(event.target.parentElement.id)">&#10003;</div>
    <div class="display-flex">
      <div>${el.title}</div>
      <div>${el.description}</div>
      <div class="level">${el.status}</div>
    </div>
    <div class="edit">
      <div class="circle"  onclick="x(event.target.parentElement.parentElement.id)">&#10006;</div>
      <div class="circle" onclick="edit(event.target.parentElement.parentElement.id)">&#9985;</div>
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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == data) {
      let changeStatus = (arr[i].status = `${ev.target.id}`);
      render();
    }
  }
}

const x = (ev) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == ev) {
      arr.splice(i, 1);
    }
  }
  render();
  document.getElementById(`${ev}`).style.display = "none";
};
const select = (ev) => {
  for (let i = 0; i < arr.length; i++) {
    if (ev == arr[i].id) {
      arr.push((arr[i].status = "done"));
      render();
      document.getElementById(`${ev}`).style.display = "none";
      break;
    }
  }
  render();
};
const edit = (ev) => {
  document.getElementsByClassName("modalContainer")[0].classList.add("show");
  let save = document.getElementsByClassName("done")[0];
  save.innerHTML = "<button id='save'>done</button>";
  let done = document.getElementById("save");
  done.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == ev) {
        let titleValue = document.getElementById("title-value").value;
        let textValue = document.getElementById("textarea-value").value;
        let statusValue = document.getElementById("status-value").value;
        let priorityValue = document.getElementById("priority-value").value;
        arr[i].id = ev;
        arr[i].title = titleValue;
        arr[i].description = textValue;
        arr[i].status = statusValue;
        arr[i].priority = priorityValue;
      }
    }

    document
      .getElementsByClassName("modalContainer")[0]
      .classList.remove("show");
    render();
  });
};
