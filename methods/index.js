//NEr awah utga

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

//   return result;
// };

// let result = add(Number(x), Number(c));

// console.log(result);

function bodolt() {
  let tawi, tawanZuut, Amynga, mynga, tawMynga, price, hariult, tawZuut, tawZuu;

  // Гараас утга авалт
  let awahZuil = window.prompt(
    "Авах барааны урд байгаа тоон утгийг оруулан бараагаа сонгоно уу!\n1: cola = 1200 төгрөг\n2: sprite = 1500 төгрөг\n3: lpenGold = 2000 төгрөг\n4: suu = 2200 төгрөг\n5: alh = 1000 төгрөг\n6: airmag = 500 төгрөг\n7: bohi = 150 төгрөг\n8: arhi = 15000 төгрөг"
  );
  let hiisenMongo = window.prompt(
    "Зөвхөн доорх мөнгөн дэвсгэртээс сонгон оруулна уу!\n5000\n10000\n20000"
  );

  // Авах зүйлийн сонголтууд
  switch (awahZuil) {
    case "1":
      price = 1200;
      break;
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

  // Хийсэн мөнгө нь таарч байна уу?
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

  // Ternary нөхцөл мөнгөн дүн хүрсэн эсэх
  hiisenMongo <= price
    ? console.log("Мөнгө хүрсэнгүй! Авах зүйлээс их үнийн дүн оруулна уу!")
    : (hariult = hiisenMongo - price);

  // Бодолт
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
    mynga = tawMynga - 5;
    tawMynga = 1;
  } else {
    mynga = tawMynga;
    tawMynga = 0;
  }
  if (tawi >= 5) {
    tawi = 1;
  } else {
    tawi = 0;
  }

  //Хариулт хэвлэх
  if (
    hiisenMongo >= price &&
    (hiisenMongo == 5000 || hiisenMongo == 10000 || hiisenMongo == 20000)
  ) {
    let niit = Amynga + tawMynga + mynga + tawZuut + zuut + tawi;
    console.log(
      Amynga +
        " Арван мянгат " +
        tawMynga +
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
}
bodolt();
