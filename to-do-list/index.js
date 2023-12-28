let show = () => {
  let a = document.getElementsByClassName("task")[0];
  a.classList.add("show");
};

const taskContainer = document.getElementsByClassName("task")[0];
window.onclick = function (event) {
  if (event.target == taskContainer) {
    taskContainer.classList.remove("show");
  }
};
const arr = [];
const addTaskButton = document.getElementById("add-task");
const addValue = () => {
  const titleValue = document.getElementById("title-input").value;
  const descriptionValue = document.getElementById("description-input").value;
  const statusValue = document.getElementById("status-input").value;
  const priorityValue = document.getElementById("priority-input").value;

  const inputObj = {
    title: titleValue,
    description: descriptionValue,
    status: statusValue,
    priority: priorityValue,
  };
  arr.push(inputObj);
  render();
};
addTaskButton.addEventListener("click", addValue);

const render = () => {
  let boxString = "";
  arr.forEach((el, i) => {
    boxString += `<div ondragstart="drag(event)" class="box" draggable="true" id="box-${
      el.title + i
    }">
    <div id="inputs">
    <div class="circle"><span>&#10003;</span></div>
    <div class="direction-column">
      <div class="title-value">${el.title}</div>
      <div class = "width">${el.description}</div>
      <div class="level">${el.priority}</div>
    </div>
    <div>
      <div class="circle margin-left-100px direction-column">
        <span>&#10005;</span>
      </div>
      <div class="circle margin-left-100px margin-top-10px">
        <span>&#9986;</span>
      </div>
    </div>
  </div>
    </div>
    `;
    switch (el.status) {
      case "inprogress":
        document.getElementById("INPROGRESS").innerHTML = boxString;
        break;
      case "Stuckln-progress":
        document.getElementById("STUCK").innerHTML = boxString;
        break;
      case "todo":
        document.getElementById("TODO").innerHTML = boxString;
        break;
      case "Doneln-progress":
        document.getElementById("DONE").innerHTML = boxString;
        break;
    }
  });
};
render();
const allowDrop = (event) => {
  event.preventDefault();
};
const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};
const drop = (event) => {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(boxId));
};
