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

  document.write(ortalama, "<br>");
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

document.write(`Kişiler: ${kişiler.reverse()}`, "<br>"); // bir diziyi ters çevirmek için kullanılır

document.write(`Kişiler: ${kişiler.join(" ")}`, "<br>"); // bir dizi içerisindeki elemanların birbirinden nasıl ayrılacağını belirleriz. " ", ",", "-", "/" gibi bir çok ayraç kullanılabilir.
