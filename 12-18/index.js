let input1 = document.getElementsByTagName("input")[0];
input1.value = Math.floor(Math.random() * (99 - 0) + 0);
let input2 = document.getElementsByTagName("input")[1];
input2.value = Math.floor(Math.random() * (99 - 0) + 0);
let answer = document.getElementsByTagName("input")[2];
let myButton1 = document.getElementsByTagName("button")[0];
let myButton2 = document.getElementsByTagName("button")[1];
function a() {
  if (Number(input1.value) + Number(input2.value) == Number(answer.value)) {
    alert("Zov hariult");
  } else {
    alert("Buruu hariult");
  }
}
function b() {
  input1.value = Math.floor(Math.random() * (99 - 0) + 0);
  input2.value = Math.floor(Math.random() * (99 - 0) + 0);
  answer.value = "";
}
myButton1.addEventListener("click", a);
myButton2.addEventListener("click", b);
