let addBtn = document.getElementsByClassName("add-btn")[0];
function add() {
  let id = document.getElementById("toDo");
  let divCreate = document.createElement("div");

  let myWindow = open("https://www.youtube.com/watch?v=hpJUuFpBsJA");
  id.appendChild(myWindow);
}
addBtn.addEventListener("click", add);
