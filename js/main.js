// JavaScript Değişkenler
// 3 adet değişken tanımlamak için kullanabileceğimiz anahtar kelime bulunmakta

// var, let ve const anahtar kelimeleri

// var
// var anahtar kelimesinden sonra tanımlanan değişken tanımlanır. aşağıda olduğu gibi. Bu yöntemin günümüzde çok kullanılmamasının nedeni bir değişken tanımlandıktan sonra sonra tanımlanan değişkene yeni bir değer ataması yapılabilmesidir.
var isim = "Ali";

document.write("İsim: ", isim, "<br>");

var isim = "Ahmet";

document.write("İsim: ", isim, "<br>");

// let
// let anahtar kelimesinden sonra değişen ismi tanımlanır. Ardından değişkenin değeri girilir. var metodunda olan tanımlanan değişkene tekrardan değer atama işlemi bu metotda kullanılmaz.

let kullaniciAdi = "ali35";
document.write("Kullanıcı Adı: ", kullaniciAdi, "<br>");

// let metodunda tanımlanan değişeken değer ataması daha sonra yapılabilir.
let araba;

araba = "Bmw";

document.write("Araba", araba, "<br>");

// const
// const anahtar kelimesinde sonra değişken adı ve değişken içeriği tanımlanır. let metodu gibi aynı değişken ismini tekrar kullanılmasına izin vermez. let ten farklı olarak let metodunda değişken içeriğini daha sonradan tanımlayabilirken constta bu özellik bulunmuyor.
const yas = 20;
document.write("Kullanıcı Yaşı: ", yas, "<br>");

const model = "MB";
document.write("Araba Model: ", model, "<br>");

document.write(
  "----------------------------------------------------------------------------------------------",
  "<br>",
);

// JavaScript Fonksiyonlar
// klasik yöntem fonksiyon
// function anahtar kelimesinden sonra fonksiyon ismi yazılır. fonksiyon isminden sonra () ardından {} açılır. Fonksiyon içerisinde yapılacak işlemlerin tamamını {} içerisinde tanımlarız. Dışarıdan bir değer almak istediğimiz durumlarda almak istenilen değeri fonksiyondaki () içerisinde tanımlarız. Fonksiyonu tanımladıktan sonra kullanmak için çağırdığımız zaman dışarıdan alınan parametre değerini de göndermemiz gerekir.
function ciktiver(mesaj) {
  document.write(mesaj, "<br>");
}

ciktiver("Merhaba");
ciktiver("Nasılsın");
ciktiver("Javascript dersleri nasıl gidiyor");

function carp(x, y) {
  let carpim = x * y;

  document.write("çarpma sonucu: ", carpim, "<br>");
}

carp(1, 5);
carp(15, 5);

// fonksiyon içerisindeki bir değeri dışarı çıkarmak istersek return anahtar kelimesi kullanılır. return anahtar kelimesinden sonra dışarı çıkartmak istediğimiz değer yazılır.
function stokHesapla(a, b, c) {
  let toplam = a + b + c;

  return toplam;
}

document.write("Stok: ", stokHesapla(12, 11, 13), "<br>");

// Arrow fonksiyon
let notOrtalama = () => {
  a = 10;
  b = 20;
  c = 30;

  let ortalama = (a + b + c) / 3;

  document.write("not ortalaması: ", ortalama, "<br>");
};

notOrtalama();

const sayilar = [98765, 13, 3445, 1234, 1768, 5];

document.write("Sayılar: ", sayilar, "<br>");

document.write(
  "Sıralı Sayılar: ",
  sayilar.sort(function (a, b) {
    return a - b;
  }),
  "<br>",
);

document.write(
  "Sıralı Sayılar Ok Fonksiyon: ",
  sayilar.sort((a, b) => a - b),
  "<br>",
);

document.write(
  "----------------------------------------------------------------------------------------------",
  "<br>",
);

// JavaScript Arrays

let kişiler = ["Ali", "Mehmet", "Gamze", "Buse"];

document.write(`Kişiler: ${kişiler}`, "<br>"); // dizinin tüm elemanlarını yazar

document.write(`Kişiler 1. elemanı: ${kişiler[0]}`, "<br>"); // dizide bir elemanı yazar

kişiler.push("Deniz"); // Dizinin sonuna eleman ekler

document.write(`Kişiler: ${kişiler}`, "<br>");

kişiler.pop(); // Dizinin son elemanını kaldırır

document.write(`Kişiler: ${kişiler}`, "<br>");

kişiler.unshift("Yılmaz"); // Dizinin başına eleman ekler

document.write(`Kişiler: ${kişiler}`, "<br>");

kişiler.shift(); // Dizinin başındaki elemanı kaldırır

document.write(`Kişiler: ${kişiler}`, "<br>");

document.write(`Kişiler Slice: ${kişiler.slice(1, 3)}`, "<br>"); // dizinin belirli bir aralığını almak için kullanılır.

document.write(`Kişiler: ${kişiler.indexOf("Buse")}`, "<br>"); // dizi içerisindeki bir elemanın index'ini bulmak için kullanılır

// document.write(`Kişiler: ${kişiler.reverse()}`, "<br>");
// bir diziyi ters çevirmek için kullanılır

document.write(`Kişiler: ${kişiler.join(" ")}`, "<br>"); // bir dizi içerisindeki elemanların birbirinden nasıl ayrılacağını belirleriz. " ", ",", "-", "/" gibi bir çok ayraç kullanılabilir.

const öğrenciler = [
  {id: 1, isim: "Yılmaz", yaş: 18, not: 100},
  {id: 2, isim: "serdar", yaş: 19, not: 85},
  {id: 3, isim: "Gamze", yaş: 20, not: 100},
  {id: 4, isim: "Buse", yaş: 21, not: 88},
];

// console.table() metodu, bir dizi veya nesne gibi verileri tablo formatında görüntülemek için kullanılır. Bu yöntem, verilerin daha okunabilir ve düzenli bir şekilde sunulmasını sağlar. Özellikle büyük veri setleri veya karmaşık nesnelerle çalışırken oldukça faydalıdır.
// console.table(öğrenciler);

// find: bir dizi içerisindeki bir elemanı bulmak için kullanılır. find metodu, bir dizi içerisinde belirli bir koşulu sağlayan ilk elemanı döndürür. Eğer hiçbir eleman koşulu sağlamazsa undefined döndürür.

const ikiIdliKullanici = öğrenciler.find((öğrenci) => öğrenci.id === 1);

// console.log(ikiIdliKullanici);

const puanıyüzolanKullanici = öğrenciler.find((öğrenci) => öğrenci.not === 100);

console.log(puanıyüzolanKullanici);

const doksanveüstüKullanicilar = öğrenciler.filter(
  (öğrenci) => öğrenci.not === 100,
);

console.log(doksanveüstüKullanicilar);

// ! find ve filter bir dizinin elemanlarını dönerek dizi elemanına erişmek için kullanılır. find belirtilen koşula uygun olan ilk elemanı döndürürken filter belirtilen koşula uygun olan tüm elemanları getirir.

// Dizilerde Döngüler

// foreach döngüsü: bir dizi veya koleksiyonun her bir elemanını sırayla işlemek için kullanılan bir döngü yapısıdır. Bu döngü, genellikle diziler üzerinde işlem yapmak için tercih edilir ve her bir elemanı tek tek ziyaret eder. Foreach döngüsü, genellikle daha okunabilir ve kullanımı kolay olduğu için tercih edilir.

// bir dizi elemanlarını dönerek o dizinin her elemanı için bir işlem yapmak için kullanılır.

kişiler.forEach((kişi) => {
  document.write(`Hoşgeldin, ${kişi} <br>`);
});

// backtick kullanarak dizi elemanlarını yazdırmak
document.write(`Sayılar: ${sayilar} <br>`);

// map döngüsü: bir dizi veya koleksiyonun her bir elemanını sırayla işlemek ve her bir eleman üzerinde belirli bir işlemi gerçekleştirmek için kullanılan bir döngü yapısıdır. Map döngüsü, genellikle diziler üzerinde işlem yapmak için tercih edilir ve her bir elemanı tek tek ziyaret eder. Map döngüsü, genellikle daha okunabilir ve kullanımı kolay olduğu için tercih edilir.

const yeniSayılar = sayilar.map((sayi) => sayi * 10);

document.write(`Sayılar: ${sayilar} <br>`);
document.write(`Yeni sayılar: ${yeniSayılar} <br>`);

// map, bir dizinin elemanlarını dönerek o dizinin her elemanı için bir işlem yapmak ve işlem sonucunda yeni bir dizi oluşturmak için kullanılır.

// foreach ise bir dizinin elemanlarını dönerek o dizinin her elemanına bir işlem yapmak için kullanılır ancak yeni bir dizi oluşturmaz.

// Spread Operatörü: bir diziyi veya objeyi genişletmek için kullanılır.

const kullanicilar = ["Yılmaz", "Serdar", "Ahmet", "Mehmet"];

const yeniDizi = [...kullanicilar, "Merhaba", "Selam", true, 25];

document.write(`Kullanıcılar Dizisi: ${kullanicilar} <br>`);
document.write(`Yeni Dizi: ${yeniDizi} <br>`);

const user = {
  id: 1234342342,
  isim: "Ali",
  soyisim: "Yılmaz",
  yaş: 40,
};

console.log("Kullanıcı: ", user);

const newUser = {
  ...user,
  meslek: "Yazılımcı",
  email: "aliyılmaz@test.com",
};

console.log("Yeni Kullanıcı: ", newUser);

const yeniKişiler = [
  {id: 1, isim: "Elif", soyisim: "Kara", puan: 30},
  {id: 2, isim: "Aybüke", soyisim: "Yılmaz", puan: 60},
  {id: 3, isim: "Kübra", soyisim: "Kara", puan: 80},
  {id: 4, isim: "Yasin", soyisim: "Aktürk", puan: 20},
];

const güncelKişiler = yeniKişiler.map((kişi) => ({
  ...kişi,
  puan: kişi.puan * 10,
}));

console.table(yeniKişiler);
console.table(güncelKişiler);

yeniKişiler.find((kişi) => {
  if (kişi.isim === "Elif") {
    kişi.isim = "Fatma";
  }
});

console.log(yeniKişiler);

// Scope Kavramı bir değişkenin erişilebilir olduğu alanı ifade eder. Global scope program içerisinde heryerden erişilebilir olan spcope'dur. Function scope bir fonksiyon içerisinde tanımlanan değişkenlerin sadece o fonksiyon içerisinde erişilebilir olduğu scope türüdür. block scope: if-else,for... bir block içerisinde tanımlanan değişkenlerin sadece o block içerisinde erişilebilir olduğu scope türüdür.

// global scope örneği
const kullanıcıAdı = "tahaserdar";

document.write(`Kullanıcı Adı: ${kullanıcıAdı} <br>`);

// function scope örneği
function tanıtım() {
  const kullanıcıPuan = 30;
}

// document.write(`Kullanıcı Puan: ${kullanıcıPuan} <br>`);
// kullanıcıPuan değişkeni function scope içerisinde tanımlandığı için bu satırda hata verecektir. kullanıcıPuan değişkenine sadece tanıtım fonksiyonu içerisinde erişilebilir.

// block scope örneği
let mesaj;

let ortalama = 50;

if (ortalama === 50) {
  mesaj = "Ortalama 50'dir.";
}

document.write(`Mesaj: ${mesaj} <br>`);
