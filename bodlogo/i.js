let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
  },
  {
    name: "Тэмүүлэн",
    age: 24,
    gender: "male",
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
  },
];
// let obj = {
//   female: "",
//   male: "",
// };
// const findGender = () => {
//   let obj = {
//     female: 0,
//     male: 0,
//   };
//   let male = 0;
//   let female = 0;
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].gender == "male") {
//       male++;
//     } else {
//       female++;
//     }
//   }
//   obj.female = female;
//   obj.male = male;
//   return obj;
// };
// let result = findGender();
// console.log(result);

// 2.

// const ageAverage = () => {
//   let sum = 0;

//   students.forEach((el) => {
//     sum += el.age;
//   });
//   return Math.ceil(sum / students.length);
// };
// let result = ageAverage();
// console.log(result);

// 3.

const age = () => {
  let arr = [];
  for (let i = 0; i < students.length; i++) {
    for (let j = i + 1; j < students.length; j++) {
      if (students[i].age == students[j].age) {
        arr.push(students[i]);
        arr.push(students[j]);
      }
    }
  }

  return arr;
};
let result = age();
console.log(result);

// 4.

// const sumLastName = (par) => {
//   let arr = Object.values(par);
//   arr.forEach((el, i) => {
//     arr[i].lastName = " Bat";
//   });
//   return arr;
// };
// let result = sumLastName(students);
// console.log(result);
