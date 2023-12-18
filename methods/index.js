//ner awah utga

// let name = window.prompt("Tanii ner:");
// function nameFun(a) {
//   console.log(name);
// }
// nameFun(name);
// calc

// let x = window.prompt("Too oruulna uu");
// let c = window.prompt("2 Dahi too oruulna uu");

// let add = (a, b) => {
//   var nemeh = a + b;
//   var hasah = Math.abs(a - b);
//   var huwaah = a / b;
//   var urjih = a * b;
//   let uildel = window.prompt(
//     "doorh uildelees songon uu \n1: +\n2: -\n3: /\n4: * "
//   );
//   let result;
//   switch (uildel) {
//     case "1":
//       result = nemeh;
//       break;
//     case "2":
//       result = hasah;
//       break;
//     case "3":
//       result = huwaah;
//       break;
//     case "4":
//       result = urjih;
//       break;
//     default:
//       result = "Tiim uildel bhgui";
//       break;
//   }

//   return;
// };

// let result = add(Number(x), Number(c));

// console.log(result);

// function bodolt() {
//   let tawi, tawanZuut, Amynga, mynga, tawMynga, price, hariult, tawZuut, tawZuu;

//   // Гараас утга авалт
//   let awahZuil = window.prompt(
//     "Авах барааны урд байгаа тоон утгийг оруулан бараагаа сонгоно уу!\n1: cola = 1200 төгрөг\n2: sprite = 1500 төгрөг\n3: lpenGold = 2000 төгрөг\n4: suu = 2200 төгрөг\n5: alh = 1000 төгрөг\n6: airmag = 500 төгрөг\n7: bohi = 150 төгрөг\n8: arhi = 15000 төгрөг"
//   );
//   let hiisenMongo = window.prompt(
//     "Зөвхөн доорх мөнгөн дэвсгэртээс сонгон оруулна уу!\n5000\n10000\n20000"
//   );

//   // Авах зүйлийн сонголтууд
//   switch (awahZuil) {
//     case "1":
//       price = 1200;
//       break;
//       price = 1500;
//       break;
//     case "3":
//       price = 2000;
//       break;
//     case "4":
//       price = 2200;
//       break;
//     case "5":
//       price = 1000;
//       break;
//     case "6":
//       price = 500;
//       break;
//     case "7":
//       price = 150;
//       break;
//     case "8":
//       price = 15000;
//       break;
//     default:
//       console.log("Тийм бараа байхгүй байна!");
//   }

//   // Хийсэн мөнгө нь таарч байна уу?
//   switch (hiisenMongo) {
//     case "5000":
//       orsonMongo = 5000;
//       break;
//     case "10000":
//       orsonMongo = 10000;
//       break;
//     case "20000":
//       orsonMongo = 20000;
//       break;
//     default:
//       console.log("Тийм мөнгөн дүн байхгүй");
//       break;
//   }

//   // Ternary нөхцөл мөнгөн дүн хүрсэн эсэх
//   hiisenMongo <= price
//     ? console.log("Мөнгө хүрсэнгүй! Авах зүйлээс их үнийн дүн оруулна уу!")
//     : (hariult = hiisenMongo - price);

//   // Бодолт
//   Amynga = parseInt(hariult / 10000);
//   tawMynga = parseInt((hariult % 10000) / 1000);
//   mynga = parseInt((hariult % 10000) / 1000);
//   tawZuu = parseInt((hariult % 1000) / 100);
//   tawi = parseInt((hariult % 100) / 10);

//   if (tawZuu >= 5) {
//     tawZuut = 1;
//     zuut = tawZuu - 5;
//   } else {
//     zuut = tawZuu;
//     tawZuut = 0;
//   }
//   if (tawMynga >= 5) {
//     mynga = tawMynga - 5;
//     tawMynga = 1;
//   } else {
//     mynga = tawMynga;
//     tawMynga = 0;
//   }
//   if (tawi >= 5) {
//     tawi = 1;
//   } else {
//     tawi = 0;
//   }

//   //Хариулт хэвлэх
//   if (
//     hiisenMongo >= price &&
//     (hiisenMongo == 5000 || hiisenMongo == 10000 || hiisenMongo == 20000)
//   ) {
//     let niit = Amynga + tawMynga + mynga + tawZuut + zuut + tawi;
//     console.log(
//       Amynga +
//         " Арван мянгат " +
//         tawMynga +
//         " Таван мянгат " +
//         mynga +
//         " Мянгат " +
//         tawZuut +
//         " Таван зуут " +
//         zuut +
//         " зуут " +
//         tawi +
//         " Тавьт " +
//         niit +
//         " Ширхэг дэвсгэрт хариулав: " +
//         " Хариулт нь " +
//         hariult +
//         " Төгрөг"
//     );
//   }
// }
// bodolt();
// let a = prompt("ehnii utga");
// let b = prompt("hoyr dahi utga");
// let c = prompt("guraw dahi utga");
// triangle(Number(a), Number(b), Number);
// function triangle(par1, par2, par3) {
//   let cK;
//   if (a > c && a > b) {
//     cK = a;
//     console.log("tegsh ontsogt gurvaljini talbai " + (b * c) / 2);
//   } else if (c > b && c > a) {
//     cK = c;
//     console.log("tegsh ontsogt gurvaljini talbai " + (a * b) / 2);
//   } else if (b > c && b > a) {
//     cK = b;
//     console.log("tegsh ontsogt gurvaljini talbai " + (a * c) / 2);
//   }
// }

// let x = prompt("Орлуулах утга аа оруулно уу!");
// function orluulalt(par1) {
//   let bodolt = x ** 2 + 5 * x + 6;
//   return bodolt;
// }
// let hariu = orluulalt(x);
// console.log(hariu);

//  zereg

// let a = prompt("1000 - aas baga utga oruulna uu ");
// let zereg = 1;
// let result = 0;
// if (a == 1000) {
//   console.log(a + " ийн " + zereg + " зэрэг" + " 1000 аас их байна ");
// } else {
//   while (result <= 1000) {
//     result = a ** zereg;
//     zereg++;
//   }
// }
// if (result >= 1000) {
//   zereg = zereg - 1;
//   console.log(a + " ийн " + zereg + " зэрэг" + " 1000 аас их байна ");
// }

// let input = prompt("Зэрэг дэвшүүлэх тоо оруулна уу1");

// let z = 1;
// let a = input;
// while (a <= 1000) {
//   a = input ** z;
//   z++;
// }
// if (a == 1000) {
//   console.log(a + " ийн " + z + " зэрэг" + " 1000 аас их байна ");
// } else {
//   console.log(input + " ийн " + (z - 1) + " зэрэг" + " 1000 аас их байна ");
// }

// let input = prompt("too");

// let t = 0;
// let i = 0;
// while (i <= input) {
//   if (i % 2 == 0) {
//     t = t + i;
//   }
//   i++;
// }
// console.log("tegsh " + t);

// let input = prompt("too");
// let i = 1;
// let j = 1;
// while (i <= input) {
//   let line = "";
//   while (j <= i) {
//     let line = "";
//     j++;
//   }
//   i++;
//   console.log(line);
// }

// const fullName = "Dulam Jantsan";
// const firstName = fullName.split(" ")[0];
// const lastName = fullName.split(" ")[1];
// const firstLetterToUpperCase = (str) => {
//   return str.slice(0, 1).toUpperCase();
// };

// const linkTwoStr = (str) => {
//   const firstStr = firstLetterToUpperCase(str);
//   const lastStr = str.slice(1, str.length);
//   return firstStr + lastStr;
// };

// const lastNameStr = firstLetterToUpperCase(lastName);
// console.log(lastNameStr + "." + " " + linkTwoStr(firstName, lastName));

// Объектийн мэдээлэлрүү key ээр нь дамжин утгын авна key.value; or key["value"]

// let person = {
//   name: "Miigaa",
//   age: 22,
// };
// console.log(person["age"]);
// console.log(person.name);

// let person1 = {
//   firstName: "MIigaa",
// };
// let person2 = {
//   firstName: "M",
// };
// person2 = person1;
// person2.firstName = "Erdene";
// console.log(person1.firstName);
// console.log(person2.firstName);

// ... =================: spread operator;

// const person = {
//   name: "Dorj",
//   age: 15,
// };

// const keys = Object.keys(person);
// console.log(keys); // гаралт: ["Dorj",15]

// homework

// let arr = [
//   {
//     firstName: Bat,
//     lastName: Bold,
//     age: 12,
//     gender: Male,
//   },
//   {
//     firstName: Tsetseg,
//     lastName: Nawchaa,
//     age: 25,
//     gender: Female,
//   },
//   {
//     firstName: Dondog,
//     lastName: Erdene,
//     age: 34,
//     gender: Male,
//   },
//   {
//     firstName: Miigaa,
//     lastName: Bayraa,
//     age: 20,
//     gender: Male,
//   },
// ];
// // let twentyUp = (arr) => {
// //   let index = 0;
// //   while (index <= arr.length) {
// //     if (Object.values(age) > 20) {
// //       console.log(index);
// //     }
// //     index++;
// //   }
// // };
// // twentyUp();
// console.log(Object.values.arr[0]);
