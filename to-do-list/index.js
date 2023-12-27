let show = () => {
  let a = document.getElementsByClassName("task")[0];
  a.classList.add("show");
};
// let hide = (event) => {
//   let a = document.getElementsByClassName("task")[0];
//   window.onclick = function () {
//     if (event.target == a) {
//       a.classList.remove("show");
//     }
//   };
// };

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
  console.log(arr);
};

const render = () => {
  let boxString = "";
  boxArray.forEach((el, i) => {
    boxString += `<div ondragstart="drag(event)" class="box" draggable="true" id="box-${
      el.title + i
    }">
        <ul>
          <li>${el.title}</li>
          <li>${el.Description}</li>
          <li>${el.Status``}</li>
          <li>${el.Priority}</li>
        </ul>
      </div>
      `;
  });
  document.getElementById("cards").innerHTML = boxString;
};
render();
