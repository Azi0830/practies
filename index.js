/*1. Muammo: 1 dan n gacha raqamlarni chop etish
   Foydalanuvchidan n kiritishni qabul qilib, 1 dan n gacha bo‘lgan barcha 
   raqamlarni alohida satrlarda chop etadigan dastur tuzing. */

// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

/*  2. Muammo: Juft yoki toqni toping. Foydalanuvchidan kiritilgan sonni oladigan va uning 
juft yoki toq ekanligini tekshiradigan dastur tuzing. Agar raqam 2 ga bo'linadigan bo'lsa, 
"Juft" ni chop eting, aks holda "Toq" ni chop eting. */

// if (n % 2 == 0) {
//   console.log("juft");
// } else {
//   console.log("toq");
// }

/*3. Masala: Juft sonlar yig’indisi
  Foydalanuvchidan kiritilgan n ni oladigan va 1 dan n gacha bo‘lgan barcha juft sonlar yig‘indisini hisoblaydigan dastur tuzing. */

// var sum = 0;

// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// if (n > 0) {
//   console.log("positive");
// } else if (n == 0) {
//   console.log("zero");
// } else {
//   console.log("negative");
// }

/*5. Masala: Ko‘paytirish jadvali
   Foydalanuvchidan n kiritishni oladigan va n ni 1 dan 10 gacha ko‘paytirish jadvalini chop etadigan dastur tuzing. */

// for (let i = 1; i <= 10; i++) {
//   console.log(`${n}*${i}=${n * i}`);
// }

/*6. Masala: Raqamlar yig‘indisi
   Foydalanuvchidan kiritilgan sonni oladigan va uning raqamlari yig‘indisini hisoblaydigan dastur tuzing. */

// var sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

/*8. Masala: Faktorial hisoblash
   Foydalanuvchidan kirish n ni oladigan va uning faktorialini hisoblaydigan dastur tuzing. */

// var sum = 1;
// for (let i = 1; i <= n; i++) {
//   console.log((sum *= i));
// }

/*9. Muammo: Kabisa yilini tekshiring
   Foydalanuvchidan kiritilgan yilni oladigan va uning kabisa yili yoki yo'qligini tekshiradigan dastur yozing. 
   Kabisa yili 4 ga bo'linadi va 100 ga bo'linmaydi yoki 400 ga bo'linmaydi. */

var n = 2023;

// if (n % 4 == 0) console.log("kabisa yili");
// else console.log("not kabisa yili");
