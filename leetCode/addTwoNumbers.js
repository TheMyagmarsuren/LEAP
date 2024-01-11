const l1 = [2, 4, 3, 3, 10, 1],
  l2 = [5, 6, 4, 2, 12, 2];
const arr = [];
let divide = 0;
let a = 0;
for (let i = 0; i < l1.length; i++) {
  let sum = 0;
  for (let j = i; j < i + 1; j++) {
    if (l1[i] + l2[j] > 9) {
      a = l1[i] + l2[j];
      divide = Math.floor(a / 10);
      sum = a % 10;
    } else {
      sum = l1[i] + l2[j] + divide;
      divide = 0;
    }
  }
  arr.push(sum);
}
console.log(arr);
// const arr = [8, 4, 5, 9];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);
