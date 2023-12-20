// let a = (document.getElementsByClassName("dummy")[0].innerHTML = "bbb");
// console.log(a);
// 1. document.getElementById("id name"); id - gaar elementuudiig songoh

// 2. document.getElementsByClassName("class  name") class aar elementuudiig songoh

// 3. document.getElementsByTagName("body") tagaarni elementuudiig songoh

// 4. 4.1 document.querySelector(".ogsonClassNer") = ehnii class deerh elementiig awna
// 4.2 document.querySelector("#name")
// 4.3 document.querySelectorAll(".name"); = all

// let a = (document.getElementById("demo").innerHTML = "<p>Pinecone</p>");
// console.log(a);

// function bgColorChange() {
//   let d = document.getElementsByClassName("bgColor")[0];
//   d.style = "background-color: green";
// }
// let myButton = document.getElementsByTagName("button")[0];

// myButton.addEventListener("click", bgColorChange);

// 2.
let inputValue = document.getElementsByTagName("input")[0];
let crButton = document.getElementsByTagName("button")[0];
let doClass = document.getElementsByClassName("d")[0];
function a() {
  doClass.innerHTML = "";
  for (let i = 1; i <= Number(inputValue.value); i++) {
    let nDiv = document.createElement("div");
    nDiv.classList.add("flex");
    nDiv.style.backgroundColor = `rgb(31, 123, ${i}`;
    doClass.appendChild(nDiv);
  }
}
crButton.addEventListener("click", a);
