// 1. Гурвалжны периметр

// let a = prompt("Эхний утга");
// let b = prompt("Хоёр дахь утга");
// let c = prompt("Гурав дахь утга");
// perimetr = (a, b, c) => {
//   p = a + b + c;
//   return p;
// };

// console.log(perimetr(Number(a), Number(b), Number(c)));

// 2. Өгөгдсөн кубын эзэлхүүн ба гүйцэд гадаргуугийн талбайг ол.

// let side = prompt("Кубын нэг талын урт оруулна уу!");
// let cube = (par1) => {
//   V = side * side * side;
//   surface = 6 * side ** 2;
//   console.log(V, surface);
// };
// cube(side);

// 3. Өгөгдсөн тэгш өнцөгтийн талбай ба периметрийг ол.

// let l = prompt("Tegsh ontsogtiin urt oruul!");
// let w = prompt("Tegsh ontsogtiin orgon oruul!");
// function rectangle(l, w) {
//   s = l * w;
//   p = (l + w) * 2;
//   console.log(s, p);
// }
// rectangle(Number(l), Number(w));

// 4, y = ол
// let x = prompt("X-д утга оноо!");
// equation = (x) => {
//   y = 3 * x - 5;
//   return y;
// };
// console.log(equation(Number(x)));

// 5. Тэгшитгэл бод

// let x = prompt("X-д утга оноо!");
// equation = (x) => {
//   y = 4 * x ** 2 - 3 * x + 5;
//   return y;
// };
// console.log(equation(Number(x)));

// 6. Өгөгдсөн тооны сүүлийн цифрийг ол

// let input = prompt("Тоо оруулна уу!");

// function lastDigit(input) {
//   a = input % 10;
//   return Math.abs(a);
// }
// console.log(lastDigit(Number(input)));

// 7. Аравтын орны цифр

// let input = prompt("Тоо оруулна уу!");

// function lastDigit(input) {
//   a = parseInt((input % 100) / 10);
//   return Math.abs(a);
// }
// console.log(lastDigit(Number(input)));

// 8. Өгөгдсөн хоёр тооны үржвэр

// let a = prompt("Эхний тоо");
// let b = prompt("Хоёр дахь тоо");
// function urjver(a, b) {
//   result = a * b;
//   return result;
// }
// console.log(urjver(Number(a), Number(b)));

// 9. Өгөгдсөн гурван оронтой тооны нийлбэр

// let a = prompt("Эхний цифр");
// let b = prompt("Хоёр дахь цифр");
// let c = prompt("Гурав дахь цифр");

// function add(a, b, c) {
//   result = a + b + c;
//   return result;
// }
// console.log(add(Number(a), Number(b), Number(c)));

// 10. Өгөгдсөн секундыг минут секунд болго

// let secund = prompt("Секунд");

// secToMinutSecund = (secund) => {
//   sec = secund % 60;
//   rSec = 0;
//   minute = parseInt(secund / 60);
//   rMin = 0;
//   time = parseInt(secund / 60 / 60);
//   rTime = 0;
//   if (sec >= 60) {
//     rSec = sec - 60;
//   } else {
//     rSec += sec;
//   }
//   if (minute >= 60) {
//     rMin += minute - 60;
//   } else {
//     rMin += minute;
//   }
//   if (time >= 24) {
//     rTime += 1;
//   } else {
//     rTime += time;
//   }
//   return console.log(rTime, rMin, rSec);
// };
// secToMinutSecund(secund);

// объектийн доторх утгийн хооронд нь солих функц

// const mockObject = {
//   key1: "value1",
//   key2: 42,
//   key3: ["item1", "item2"],
//   key4: { nestedKey: "nestedValue" },
//   key5: true,
//   key6: null,
// };

// let addNext = (obj) => {
//   const arr = Object.keys(obj);
//   console.log(arr);
//   let firstIndex = obj[arr[arr.length - 1]];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (i == 0) {
//       obj[arr[i]] = firstIndex;
//     } else {
//       obj[arr[i]] = obj[arr[i - 1]];
//     }
//   }
//   return obj;
// };
// let a = addNext(mockObject);
// console.log(a);
