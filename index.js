/* 1. Satrni kiritish sifatida qabul qiluvchi va qatordagi so‘zlar sonini qaytaruvchi funksiya yozing.

2. Ob'ektlar uchun xossalari bo'lgan xarid qilish savatini ifodalovchi ob'ekt yarating 
(nom va narx bo'yicha xususiyatlarga ega ob'ektlar majmuasi). Savatcha ob'ektini argument
 sifatida qabul qiladigan va savatdagi barcha elementlarning umumiy qiymatini qaytaradigan funksiyani yozing.

3. Raqamni kiritish sifatida qabul qiladigan va agar son tub son bo‘lsa, rost,
 aks holda noto‘g‘ri qiymatini qaytaradigan funksiya yozing.

4. Ism, sinf va mavzular (satrlar massivi) xususiyatlariga ega talabani ifodalovchi ob'ekt yarating.
 Talaba obyektini argument sifatida oladigan va talabaning o‘rtacha bahosini qaytaruvchi funksiya yozing.

5. Satrni kirish sifatida qabul qiladigan va barcha unlilar “o” harfi bilan almashtirilgan qatorni qaytaradigan funksiya yozing.

6. Sarlavha, muallif va sahifalar xususiyatlariga ega kitobni ifodalovchi ob'ekt yarating.
 Kitob ob'ektini argument sifatida qabul qiladigan va "muallif bo'yicha sarlavha, sahifalar sahifalari"
  formatida qatorni qaytaradigan funktsiyani yozing.

7. Raqamlar massivini kirish sifatida qabul qiluvchi va massivdagi barcha sonlar yig‘indisini qaytaruvchi funksiya yozing.

8. Restoranni nomi, menyusi (mahsulot va narx boʻyicha xossalari boʻlgan obʼyektlar majmuasi)
va vegan (restoran vegan variantlari xizmat qilishini koʻrsatuvchi mantiqiy) koʻrsatuvchi obyekt yarating.
 Restoran ob'ektini argument sifatida qabul qiladigan va barcha menyu elementlari va narxlarni ko'rsatadigan
 qatorni qaytaradigan funktsiyani yozing.

9. Satrni kirish sifatida qabul qiladigan va agar satr palindrom bo'lsa, rost, 
aks holda noto'g'ri qiymatini qaytaradigan funksiya yozing.

10. Egasi, balansi va tranzaksiyalari uchun xossalari bo‘lgan bank hisobini ifodalovchi ob’ekt yarating 
(sana va summa bo‘yicha xossalari bo‘lgan obyektlar massivi). Bank hisobi obyektini argument sifatida oladigan va 
hisobning joriy qoldig‘ini qaytaruvchi funksiya yozing. */

// 1
// var fruits = ["olma", "anor", "shaftoli", "behi"];

// console.log(fruits.length);

// 2
var shop = {
  apple: {
    count: 5,
    price: 500,
  },
  anor: {
    count: 10,
    price: 600,
  },
};

var sum = 0;
var value = Object.values(shop);

for (let i = 0; i < value.length; i++) {
  sum += value[i].count + value[i].price;
}
console.log(sum);

// 3
// var number = 5;

// // 4
var students = {
  azim: {
    ball: 10,
  },
  sardor: {
    ball: 2,
  },
  asadbek: {
    ball: 3,
  },
  farruh: {
    ball: 4,
  },
  fah: {
    ball: 5,
  },
};

var value = Object.values(students);
var sum = 0;

for (let i = 0; i < value.length; i++) {
  sum += value[i].ball;
}
console.log(sum / value.length);

/*1. Massivdagi elementlar ro'yxatini saqlaydigan va foydalanuvchiga ob'ekt usullaridan foydalangan holda ro'yxatdagi
 narsalarni qo'shish, o'chirish yoki yangilash imkonini beradigan dastur yozing.

2. Ob'ektlardan foydalangan holda oddiy xarid qilish savat tizimini amalga oshiring,
 bu erda foydalanuvchi savatga narsalarni qo'shishi, savatdan narsalarni olib tashlashi va savatdagi 
 narsalarning umumiy narxini hisoblashi mumkin.

3. Ismi, yoshi, sinfi kabi xususiyatlarga ega o‘quvchilar ro‘yxatini saqlaydigan dastur tuzing. 
Foydalanuvchiga roʻyxatga yangi talabalar qoʻshish, talabalarni roʻyxatdan oʻchirish va tizimdagi barcha 
talabalar roʻyxatini koʻrsatishga ruxsat bering.

4. Ismi, yoshi va jinsi kabi xususiyatlarga ega bo'lgan shaxsni ifodalovchi ob'ektni oladigan va shaxs 
ma'lumotlari bilan formatlangan qatorni qaytaradigan funktsiyani yozing.

5. Ob'ektlardan foydalangan holda oddiy bank tizimini amalga oshirish, bu erda foydalanuvchi hisobvaraqlar yaratishi,
 hisobvaraqlarga pul qo'yishi, hisobvaraqlardan pul olishi va hisob balansini ko'rsatishi mumkin.

6. Ob'ektlar yordamida kutubxona tizimini simulyatsiya qiluvchi dastur yarating, bunda foydalanuvchi kutubxonaga kitob qo'shishi,
 kutubxonadan kitob olishi, olingan kitoblarni qaytarishi va kutubxonadagi barcha kitoblar ro'yxatini ko'rsatishi mumkin. */
