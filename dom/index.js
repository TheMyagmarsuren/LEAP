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

let myButton = document.getElementsByTagName("button");
let orolt = document.getElementsByTagName("input");
function asdf() {
  let davtalt = Number(orolt.value);
  for (let i = 0; i < davtalt; i++) {
    let b = document.getElementsByClassName("divClass")[0];
    b[i].createElement("div");
    b.style =
      "width: 50px; height: 50px; border-radius: 50%; background-color: blue;";
  }
}
myButton.addEventListener("click", asdf);
