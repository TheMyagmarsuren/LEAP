// 1. Гурвалжны периметр

// let a = 3,
//   b = 4,
//   c = 5;

// function trianglePerimeter(par1, par2, par3) {
//   let perimetr = par1 + par2 + par3;
//   return perimetr;
// }
// let result = trianglePerimeter(a, b, c);
// console.log("Perimetr: " + result);

// 2. Өгөгдсөн кубын эзэлхүүн ба гүйцэд гадаргуугын талбайг олох

// let input = 5;
// function cube(par1) {
//   let area = par1 ** 3;
//   let surface = par1 ** 2 * 6;
//   console.log(area, surface);
// }
// cube(input);

// 3. Өгөгдсөн тэгш өнцөгтийн талбай ба периметрийг ол.

// let input = 6,
//   input2 = 4;

// let s = input * input2;
// let p = (input + input2) * 2;
// console.log("Talbai: " + s + " Perimetr: " + p);

// 4. y=3x-5

// let input = 1;
// function yFind(par1) {
//   let y = 3 * par1 - 5;
//   return y;
// }
// let result = yFind(input);
// console.log(result);

// 5. y=4x2-3x+5
// let input = -2;
// function yFind(x) {
//   let y = 4 * x ** 2 - 3 * x + 5;
//   return y;
// }
// let result = yFind(input);
// console.log(result);

// 6. Өгөдсөн тооны сүүлийн цифрийг ол.
// let input = 476;
// function lastNumber(par1) {
//   let a = par1 % 10;
//   return a;
// }
// let result = lastNumber(input);
// console.log(result);

// 7. Өгөгдсөн тооны аравтын орны цифрийг ол.
// let input = 423;
// function lastTwo(par1) {
//   let a = parseInt((par1 % 100) / 10);
//   return a;
// }

// let result = lastTwo(input);
// console.log(result);

// 8. Өгөгдсөн 2 оронтой тооны цифрүүдийн үржвэрийг ол.
// let input = 27;
// function multi(par1) {
//   let a = parseInt(par1 / 10);
//   let b = par1 % 10;
//   let c = a * b;
//   return c;
// }
// let result = multi(input);
// console.log(result);

// 9.Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол.

// let input = 123;
// function addNumber(par1) {
//   let a = parseInt(par1 / 100);
//   let b = parseInt(par1 / 10) % 10;
//   let c = par1 % 10;
//   let sum = a + b + c;
//   return sum;
// }
// let result = addNumber(input);
// console.log(result);

// 10. Өгөгдсөн секундыг минут секунд болго

// let sec = 200;

// function minAndSec(par1) {
//   let min = parseInt(par1 / 60);
//   let sec = par1 % 60;
//   return console.log(min, sec);
// }
// minAndSec(sec);

// 11.Өгөгдсөн секундыг цаг минут секунд болго.
// let input = 3612;

// function time(par1) {
//   let rMin = 0;
//   let rTime = 0;
//   let time = parseInt(par1 / 60);
//   let sec = parseInt(par1 % 60);
//   let min = parseInt(par1 / 60);
//   if (min == 60) {
//     rMin = 0;
//   } else {
//     rMin = min;
//   }
//   if (time == 60) {
//     rTime = 1;
//   } else {
//     rTime = time;
//   }
//   console.log(rTime, rMin, sec);
// }
// time(input);

// 12. Минутыг секундруу шилжүүл.
// let min = 3;
// let sec = 4;

// function secToMin(par1, par2) {
//   let sec = par1 * 60 + par2;
//   return sec;
// }
// let result = secToMin(min, sec);

// console.log(result);

// 13. гөгдсөн цаг, минут, секундыг секунд рүү шилжүүл.

// let time = 1;
// let minute = 2;
// let s = 3;
// function sec(par1, par2, par3) {
//   let a = par1 * 60 * 60 + par2 * 60 + par3;
//   return a;
// }

// let result = sec(time, minute, s);
// console.log(result);

// 14.Өгөгдсөн цагийг хоног цагт шилжүүл.

// let input = 80;

// function dayTotime(par1) {
//   let t = 0;
//   let day = 0;
//   if (par1 <= 23) {
//     t = par1;
//   } else if (par1 == 24) {
//     day = 1;
//   } else {
//     day = parseInt(par1 / 24);
//     t = par1 % 24;
//   }
//   console.log(day, t);
// }
// dayTotime(input);

// 14. IOI үгийг өгөгдсөн тоон удаа хэвлэ.

// let input = 4;
// function d(par1) {
//   for (let i = 0; i < par1; i++) {
//     console.log("IOI");
//   }
// }
// d(input);

// 15. Эхний n тооны нийлбэрийг тодорхой давталт ашиглан ол.
// let input = 5;
// let sum = 0;
// for (let i = 1; i <= input; i++) {
//   sum += i;
// }
// console.log(sum);

// 16. Өгөгдсөн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.

// let input = 50;
// let dawt = 6;
// let sum = 0;
// for (let i = 0; i < dawt; i++) {
//   sum += input;
// }
// console.log(sum);

// 17. Өгөгдсөн тооны хүрдийг дараах хэлбэрээр гарга.

// let input = prompt("Хэдийн тооны хүрд ");

// function h(par1) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(par1 + " * " + i + " = " + par1 * i);
//   }
// }
// h(input);

// 18.
// let sum = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     sum += j + " ";
//   }
//   console.log(sum);
//   sum = "";
// }

// 19.
// let sum = "";
// for (let i = 5; i >= 1; i--) {
//   for (let j = 5; j >= i; j--) {
//     sum += j + " ";
//   }
//   console.log(sum);
//   sum = "";
// }

// 20.
// let sum = "";
// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     sum += j + " ";
//   }
//   console.log(sum);
//   sum = "";
// }
// 21.
// let sum = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     sum += j + " ";
//   }
//   console.log(sum);
//   sum = "";
// }

// 22.
// let sum = "";
// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= 5; j++) {
//     sum += j + " ";
//   }
//   console.log(sum);
//   sum = "";
// }
