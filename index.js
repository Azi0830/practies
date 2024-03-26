//Masala01

//1.1
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

//1.2
// if (n % 2 == 0) {
//   console.log("juft");
// } else {
//   console.log("toq");
// }

//1.3
// var sum = 0;

// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//1.4
// if (n > 0) {
//   console.log("positive");
// } else if (n == 0) {
//   console.log("zero");
// } else {
//   console.log("negative");
// }

//1.5
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n}*${i}=${n * i}`);
// }

//1.6
// var sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

//1.8
// var sum = 1;
// for (let i = 1; i <= n; i++) {
//   console.log((sum *= i));
// }

//1.9
// var n = 2023;

// if (n % 4 == 0) console.log("kabisa yili");
// else console.log("not kabisa yili");

///////////////////////////////////////////////////////////////////////////////////////////////////
//Masala02
//2.1
/*1. Massivdagi elementlar ro'yxatini saqlaydigan va foydalanuvchiga ob'ekt usullaridan 
foydalangan holda ro'yxatdagi narsalarni qo'shish, o'chirish yoki yangilash imkonini beradigan dastur yozing. */

// var students = {

//   user1: {
//     name: "Azim",
//     age: 26,
//   },
//   user2: {
//     name: "Husan",
//     age: 22,
//   },
// };

// //delete
// delete students.user2;

// //create
// students.user2 = { name: "Sardor", age: 28 };

// console.log(students);

//2.2
/*2. Ob'ektlardan foydalangan holda oddiy xarid qilish savat tizimini amalga oshiring, bu erda foydalanuvchi
 savatga narsalarni qo'shishi, savatdan narsalarni olib tashlashi va savatdagi narsalarning umumiy narxini hisoblashi mumkin. */

// var shop = {
//   apple: {
//     count: 10,
//     price: 2500,
//   },
//   anor: {
//     count: 5,
//     price: 5000,
//   },
// };

// var v = Object.values(shop);
// var sum = 0;
// for (let i = 0; i < v.length; i++) {
//   sum += v[i].count * v[i].price;
// }
// console.log(sum);

//2.3
/*3. Ismi, yoshi, sinfi kabi xususiyatlarga ega o‘quvchilar ro‘yxatini saqlaydigan dastur tuzing. 
Foydalanuvchiga roʻyxatga yangi talabalar qoʻshish, talabalarni roʻyxatdan oʻchirish va tizimdagi barcha talabalar 
roʻyxatini koʻrsatishga ruxsat bering. */

// var students = {
//   student1: {
//     name: "Azim",
//     age: 25,
//     class: 12,
//   },
//   student2: {
//     name: "Lochin",
//     age: 25,
//     class: 11,
//   },
//   student3: {
//     name: "Husan",
//     age: 12,
//     class: 12,
//   },
// };

// //delete
// delete students.student2;

// students.student4 = {
//   name: "Sardor",
//   age: 28,
//   class: 9,
// };

// var v = Object.values(students);
// for (let i = 0; i < v.length; i++) {
//   console.log(v[i].name);
// }

////////////// class
// class Student {
//   constructor(name, age, clas) {
//     (this.name = name), (this.age = age), (this.clas = clas);
//   }
//   full() {
//     `${this.clas}${this.age}`;
//   }
// }

// class Uzbstudent extends Student {
//   constructor(name, age, clas, city) {
//     super(name, age, clas);
//     this.city = city;
//   }
// }

// var student1 = new Student("Azim", "25", "12");
// var student2 = new Student("Husan", "25", "8");
// var student3 = new Student("Lochin", "24", "11");

// var uzb = new Uzbstudent("Asadbek", "18", "9", "Namangan");

// console.log(student1.full());
// console.log(student2);
// console.log(student3);
// console.log(uzb.full());

//2.4
/* 4. Ismi, yoshi va jinsi kabi xususiyatlarga ega bo'lgan shaxsni ifodalovchi ob'ektni oladigan va 
shaxs ma'lumotlari bilan formatlangan qatorni qaytaradigan funktsiyani yozing.*/

// function login(passwort, gmail, callback) {
//   console.log("iltimos kuting");
//   setTimeout(() => {
//     if (passwort == "passwort" && gmail == "gmail") {
//       return callback("accountga marhamat");
//     } else {
//       return callback("error");
//     }
//   }, 3000);
// }

// login("passwort1", "gmail", (data) => {
//   console.log(data);
// });

///////////////// Promise
// let pw = "123";
// let email = "@gmail.com";

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (pw == "123" && email == "@gmail.com") {
//       resolve("ishlayabdi");
//     } else {
//       reject("not");
//     }
//   }, 3000);
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//////////////  fetch

function coffeshop(type) {
  fetch("https://api.sampleapis.com/coffee/hot")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      console.log(
        data.filter((value) => {
          return value.title === type;
        })[0].image
      );
    })
    .catch((error) => {
      console.log(error);
    });
}
coffeshop("Frozen Lemonade");
