// let myButton = document.getElementsByTagName("button")[0];
// function test() {
//   window.confirm("Ustgahuu ?");
// }
// myButton.addEventListener("click", test);

let b1 = document.getElementsByTagName("button")[0];
let number = document.getElementsByTagName("input")[0];
let b2 = document.getElementsByTagName("button")[1];
number.value = 0;
function start() {
  number.value++;
}
let interval;
function a() {
  let interval = setInterval(start, 1000);
}
b1.addEventListener("click", a);

function stop() {
  clearInterval(interval);
}
b2.addEventListener("click", stop);
