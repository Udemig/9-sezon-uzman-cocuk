import API from "./api.js";
import {renderCard, renderLoader, uiElements} from "./ui.js";

const api = new API();

// console.log(api);

api.getPopular();

// sayfanın yüklenme anını izle
document.addEventListener("DOMContentLoaded", async () => {
  renderLoader(uiElements.list);

  // Popüler şarkıları api'dan almak için istek at
  const songs = await api.getPopular();

  console.log("songs", songs);

  // Popüler şarkıları renderla
  renderCard(songs);
});

// Formun gönderilmesini izle
uiElements.form.addEventListener("submit", async (e) => {
  // sayfa yenilenmesini engelle
  e.preventDefault();

  // input içine girilen değere eriş
  const query = e.target[0].value;

  // eğer query değeri yoksa fonksiyonu durdur
  if (!query) {
    alert("Lütfen şarkı veya şarkıcı adı aratınız");

    return;
  }

  // loader'ı renderla
  renderLoader(uiElements.list);

  // input dan erişilen query değeri ile api isteği at
  const searchedMusics = await api.searchMusic(query);

  // aranan içeriğe göre title ı düzenle
  uiElements.title.textContent = `${query} için sonuçlar`;

  // aranan şarkıları renderla
  renderCard(searchedMusics);
});

// Music List kısmına bir olay izleyici ekle
uiElements.list.addEventListener("click", (e) => {
  // eğer play-icon'a tıklanırsa
  if (e.target.className == "play-icon") {
  }
});
