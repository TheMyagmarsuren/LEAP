// const arr = ["Mango", "Apple", "Orange"];
// console.log(arr.toString()); //String butsaana

// const arr = ["Mango", "Apple", "Orange"];
// console.log(arr.join(" or ")); // or and eer holbono

// const arr = ["Mango", "Apple", "Orange"];
// console.log(arr.includes("Mango")); // boolean butsaana bna uu bhgui bna uu

// const arr = ["Mango", "Apple", "Orange"];
// console.log(arr.indexOf("Mango")); // hed deh index deer bairlaj buig zaana

// const arr = ["Mango", "Apple", "Orange"];

// function findIndex(a) {
//   let index;
//   for (let i = 0; i <= length; i++) {
//     if (arr[i] == a) {
//       index = i;
//     }
//     if (arr[i] != a) {
//       index = -1;
//     }
//     return index;
//   }
// }
// let index = findIndex("Mang");
// console.log(index);

// toString;

// let arr = ["Mango", "Apple", "Orange"];
// let x = (arr) => {
//   let a = "and";
//   let b;
//   for (let i = 0; i <= arr.length; i++) {
//     b += arr[i] + a;
//   }
//   return b;
// };
// console.log(x(arr));

//push

// const arr = [1, 2, 3, 4];
// let input = prompt("Number");
// function push(input) {
//   let index = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     index = i + 1;
//   }
//   arr[index] = input;
//   return arr;
// }
// let result = push(Number(input));
// console.log(result);

//bod

// const arr = [1, 2, 3, 4];
// let input = prompt("Number");
// function remove(par1) {
//   for (let par1; par1 <= arr.length - 1; par1++) {
//     arr[par1] = undefined;
//     arr[par1] = arr[par1 + 1];
//   }
//   return arr;
// }
// let result = remove(input);
// console.log(result);

// toSum;

// const arr = [2, 4, 6, 8, 7];
// const target = 9;

// for (let i = 0; i <= arr.length; i++) {
//   for (let j = arr.length - 1; 0 <= j; j--) {
//     if (arr[i] + arr[j] == target) {
//       console.log(i, j);
//     }
//   }
// }

//average

// const arr = [1, 2, 3, 4, 5, 6];

// function average() {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let result = sum / arr.length;
//   return result;
// }
// let r = average();

// console.log(r);

//findMax

// const arr = [1, 2, 3, 4, 5, 6];
// function findMax() {
//   let i = 0;
//   let j = 0;
//   while (i < arr.length) {
//     if (arr[i] < j) {
//       j = j;
//     } else {
//       j = arr[i];
//     }
//     i++;
//   }
//   return j;
// }
// let result = findMax();
// console.log(result);

//reverse an array

// const arr = [1, 2, 3, 4, 5];

// function reverse() {
//   let arr2 = [];
//   for (let i = 0; i < length; i++) {
//     arr2[i] = arr[length - 1 - i];
//   }
//   return arr2;
// }
// let result = reverse();
// console.log(result);

// const arr = [1, 2, 3, 2, 4, 5, 4, 3, 2, 1];

// function reverse() {
//   let arr2 = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = length - 1; 0 <= length - 1; j--) {
//       if (arr[i] == arr[j]) {
//         arr2[i] = arr2;
//       } else {
//         arr2[i] = arr[j];
//       }
//     }
//   }
//   return arr2;
// }
// let a = reverse();
// console.log(a);

// const numbers = {
//   a: 5,
//   b: 10,
//   c: 3,
// };

// function add() {
//   let sum = Object.keys(numbers);
//   let a = 0;
//   for (let i = 0; i < sum.length; i++) {
//     a += numbers[sum[i]];
//   }

//   return a;
// }
// let b = add();
// // console.log(b);

// const stringObject = { name: "john", age: 25, city: "example" };
// function string() {
//   let value = Object.values(stringObject);
//   let arr = [];
//   let sum = "";
//   for (let i = 0; i < value.length; i++) {
//     let str = value[i].slice(0, 1);
//     let s = value[i].slice(1, length);
//     let str2 = str.toUpperCase();
//     sum += console.log(str2);
//   }
// }
// let a = string();
// console.log(a);
