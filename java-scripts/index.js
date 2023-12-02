// // let number = 999;
// // let firstNum = parseInt(number / 100);
// // let secondNum = parseInt((number / 10) % 10);
// // let thirdNum = parseInt(number % 10);
// // console.log(firstNum + secondNum + thirdNum);

// // 10aas ih too ba baga toog shalgah

// // if (number % 2 === 0) {
// //   if (number > 10) {
// //     console.log("tegsh too bna 10-aas ih ");
// //   } else {
// //     console.log("tegsh too bna 10-aas baga ");
// //   }
// // } else {
// //   if (number > 10) {
// //     console.log("sondgoi too 10-aas ih");
// //   } else {
// //     console.log("sondgoi too 10-aas baga");
// //   }
// // }

// // if (number % 2 === 0 && number > 10) {
// //   console.log("tegsh too ba 10 aas ih ");
// // } else if (number % 2 === 0 && number < 10) {
// //   console.log("tegsh too ba 10 - aas baga");
// // } else if (number % 2 !== 0 && number < 10) {
// //   console.log("sondgoi too ba 10-aas baga");
// // } else {
// //   console.log("songoi too ba 10 - aas ih");
// // }

// //doloo honogiin odoruud

// // let number = 3;
// // if (number === 1) {
// //   console.log("Monday");
// // } else if (number === 2) {
// //   console.log("Tuesday");
// // } else if (number === 3) {
// //   console.log("Wednesday");
// // } else if (number === 4) {
// //   console.log("Thursday");
// // } else if (number === 5) {
// //   console.log("Friday");
// // } else if (number === 6) {
// //   console.log("Saturday");
// // } else if (number === 7) {
// //   console.log("Sunday");
// // }

// //eyreg sorog oloh

// // let number = -23;
// // if (number < 0) {
// //   console.log("sorog too bna ");
// // } else {
// //   console.log("eyreg too ");
// // }

// //3n tooni ihiig oloh

// // let firstNum = 213;
// // let secondNum = 32;
// // let thirdNum = 34;
// // if (firstNum < secondNum) {
// //   if (secondNum < thirdNum) {
// //     console.log(thirdNum);
// //   } else {
// //     console.log(secondNum);
// //   }
// // } else {
// //   if (firstNum > thirdNum) {
// //     console.log(firstNum);
// //   } else {
// //     console.log(thirdNum);
// //   }
// // }

// // jingiin index oloh

// // let height = 175;
// // let weight = 70;
// // let secondHeight = (height / 100) ** 2;
// // index = weight / secondHeight;
// // console.log(index);
// // if (index < 18.5) {
// //   console.log("Jingiin dutagdaltai");
// // } else if (index >= 18.8 && index < 24.9) {
// //   console.log("eruul");
// // } else if (index >= 24.9 && index < 30) {
// //   console.log("iluudel jintei");
// // } else {
// //   console.log("het targan bna turaach");
// // }

// //switch case

// // let day = 8;
// // let dayName;
// // switch (day) {
// //   case 1:
// //     dayName = "Monday";
// //     break;
// //   case 2:
// //     dayName = "Tuesday";
// //     break;
// //   case 3:
// //     dayName = "Wednesday";
// //     break;
// //   case 4:
// //     dayName = "Thursday";
// //     break;
// //   case 5:
// //     dayName = "Friday";
// //     break;
// //   case 6:
// //     dayName = "Saturday";
// //     break;
// //   case 7:
// //     dayName = "Sunday";
// //     break;
// //   default:
// //     dayName = "Tiim odor bhgui ";
// //     break;
// // }
// // console.log(dayName);

// // ajildaa irsen humuus

// // let person = "Miigaa";
// // let irsenHumuus;
// // switch (person) {
// //   case "Naraa":
// //     irsenHumuus = "Naraa";
// //     break;
// //   case "Baldan":
// //     irsenHumuus = "Baldan - irlee";
// //     break;
// //   case "Dulmaa":
// //     irsenHumuus = "Dulmaa - irlee";
// //     break;
// //   case "Galt":
// //     irsenHumuus = "Galt - irlee";
// //     break;
// //   case "Goldon":
// //     irsenHumuus = "Goldon - irlee";
// //     break;
// //   default:
// //     irsenHumuus = "Tm hun bhgui";
// //     break;
// // }
// // console.log(irsenHumuus);

// //TERNARY

// // let age = 18;
// // let info = age >= 18 ? "Nasand hursen bna " : "Nasand hureegui bna ";
// // console.log(info);

// // ondor jil oloh bodlogo

// // let year = 2001;
// // year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
// //   ? console.log("true")
// //   : console.log("false");

// // triangle-type

// // let sideOne = 1;
// // let sideTwo = 3;
// // let sideThree = 2;
// // if (
// //   (sideOne === sideTwo && sideOne !== sideThree) ||
// //   (sideOne === sideThree && sideOne !== sideTwo) ||
// //   (sideOne === sideTwo && sideThree !== sideTwo) ||
// //   (sideThree === sideTwo && sideOne !== sideTwo) ||
// //   (sideThree === sideOne && sideThree !== sideTwo) ||
// //   (sideThree === sideTwo && sideThree !== sideOne)
// // ) {
// //   console.log("isosceles");
// // } else if (sideOne === sideTwo && sideOne === sideThree) {
// //   console.log("equilateral");
// // } else {
// //   console.log("scalene");
// // }

// // 4n tooni baga oloh

// // let a = 1,
// //   b = 2,
// //   c = -34,
// //   d = 0;

// //   arga-1

// let minNumber = Math.min(a, b, c, d);
// console.log(minNumber);

// arga -2

// if (a <= b && a <= c && a <= d) {
//   console.log("hamgiin baga utga " + a);
// } else if (b <= a && b <= c && b <= d) {
//   console.log("hamgiin baga utga " + b);
// } else if (c <= a && c <= b && c <= d) {
//   console.log("hamgiin baga utga " + c);
// } else {
//   console.log("hamgiin baga utga " + d);
// }

// 2 bagiin dundaj oloh

// let oneA = 100;
// twoA = 100;
// threeA = 100;
// let oneB = 100;
// twoB = 100;
// threeB = 100;
// let aTeamAverage = (oneA + twoA + threeA) / 3;
// let bTeamAverage = (oneB + twoB + threeB) / 3;
// if (aTeamAverage < bTeamAverage && bTeamAverage >= 100) {
//   console.log("B-team ylsan");
// } else if (aTeamAverage > bTeamAverage && aTeamAverage >= 100) {
//   console.log("A-team ylsan");
// } else if (aTeamAverage === bTeamAverage && aTeamAverage >= 100) {
//   console.log("tentssen");
// } else {
//   console.log("ylagch bhgui");
// }

// garaas awah dewsgert
// 5000 , 10000, 20000

// hariult dewsgert;
// 50,100,500,1000,5000,10000;

// ajillagaa
// 1. awah zuilee songono
// 2. mongoo hiine
// 2.1 awah devsgertuudees oor mongo awahgui
// 2.2 awah ymnaas baga mongo awahgui
// 3. hariult bodno
// 3.1 Hariulah niit dung bodno
//3.2 Ymar2 devsgert tgd hden sh uguhig bodno. (Nemelt)
let tawi;
let tawanZuut;
let Amynga;
let mynga;
let tawMynga;
let price;
let hariult;
let tawZuut;
let tawZuu;
let tawMyngat;

let awahZuil = window.prompt(
  "Авах барааны урд байгаа тоон утгийг оруулан бараагаа сонгоно уу!\n1: cola = 1200 төгрөг\n2: sprite = 1500 төгрөг\n3: lpenGold = 2000 төгрөг\n4: suu = 2200 төгрөг\n5: alh = 1000 төгрөг\n6: airmag = 500 төгрөг\n7: bohi = 150 төгрөг\n8: arhi = 15000 төгрөг"
);
let hiisenMongo = window.prompt(
  "Зөвхөн доорх мөнгөн дэвсгэртээс сонгон оруулна уу!\n5000\n10000\n20000"
);

switch (awahZuil) {
  case "1":
    price = 1200;
    break;
  case "2":
    price = 1500;
    break;
  case "3":
    price = 2000;
    break;
  case "4":
    price = 2200;
    break;
  case "5":
    price = 1000;
    break;
  case "6":
    price = 500;
    break;
  case "7":
    price = 150;
    break;
  case "8":
    price = 15000;
    break;
  default:
    console.log("Тийм бараа байхгүй байна!");
}
switch (hiisenMongo) {
  case "5000":
    orsonMongo = 5000;
    break;
  case "10000":
    orsonMongo = 10000;
    break;
  case "20000":
    orsonMongo = 20000;
    break;
  default:
    console.log("Тийм мөнгөн дүн байхгүй");
    break;
}

hiisenMongo <= price
  ? console.log("Мөнгө хүрсэнгүй! Авах зүйлээс их үнийн дүн оруулна уу!")
  : (hariult = hiisenMongo - price);

Amynga = parseInt(hariult / 10000);
tawMynga = parseInt((hariult % 10000) / 1000);
mynga = parseInt((hariult % 10000) / 1000);
tawZuu = parseInt((hariult % 1000) / 100);
tawi = parseInt((hariult % 100) / 10);
if (tawZuu >= 5) {
  tawZuut = 1;
  zuut = tawZuu - 5;
} else {
  zuut = tawZuu;
  tawZuut = 0;
}
if (tawMynga >= 5) {
  tawMyngat = 1;
  mynga = tawMynga - 5;
} else {
  mynga = tawMynga;
  tawMyngat = 0;
}
if (tawi >= 5) {
  tawi = 1;
} else {
  tawi = 0;
}
if (
  hiisenMongo >= price &&
  (hiisenMongo == 5000 || hiisenMongo == 10000 || hiisenMongo == 20000)
) {
  let niit = Amynga + tawMyngat + mynga + tawZuut + zuut + tawi;
  console.log(
    Amynga +
      " Арван мянгат " +
      tawMyngat +
      " Таван мянгат " +
      mynga +
      " Мянгат " +
      tawZuut +
      " Таван зуут " +
      zuut +
      " зуут " +
      tawi +
      " Тавьт " +
      niit +
      " Ширхэг дэвсгэрт хариулав: " +
      " Хариулт нь " +
      hariult +
      " Төгрөг"
  );
}
