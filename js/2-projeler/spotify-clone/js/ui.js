const uiElements = {
  list: document.querySelector("#music-list"),
  form: document.querySelector("form"),
  title: document.querySelector("#title"),
  player: document.querySelector(".player"),
};

// Şarkı card'ı render edecek fonksiyon
const renderCard = (songs) => {
  uiElements.list.innerHTML = "";

  // her songs için bir html oluştur
  songs.forEach((song) => {
    // bir html oluştur
    const card = document.createElement("div");

    // oluşturulan html elemanına class ekle
    card.classList.add("card");

    const coverArt = song.attributes.artwork.url
      .replace("{w}", 250)
      .replace("{h}", 250);

    card.dataset.title = song.attributes.name;
    card.dataset.subtitle = song.attributes.artistName;
    card.dataset.image = coverArt;
    card.dataset.mp3 = song.attributes.previews[0].url;

    // Oluşturulan, class atanan elemanın html'ini belirle
    card.innerHTML = `
                <figure>
                <img
                  src="${coverArt}"
                  alt="card-image"
                />

                <div class="play-icon">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>

              <div class="card-info">
                <h4>${song.attributes.name}</h4>
                <h4>${song.attributes.artistName}</h4>
              </div>
    `;

    uiElements.list.appendChild(card);
  });
};

// Loader render edecek fonksiyon
const renderLoader = (outlet) => {
  outlet.innerHTML = `
<div class="banter-loader">
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
</div>`;
};

const renderPlayer = (song) => {
  // Player kısmının html içeriğini belirle
  uiElements.player.innerHTML = `
      <div class="info">
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg"
          alt="song-image"
        />

        <div>
          <h5>Mockingbird</h5>
          <p>Eminem</p>
        </div>
      </div>

      <audio
        src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/c6/15/65c61537-1c2f-e2bd-0f26-2ed9818fb86f/mzaf_9317418265960662555.plus.aac.ep.m4a"
        controls
      ></audio>

      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox-fill"></i>
        <i class="bi bi-pc-display"></i>
      </div>
    `;
};

export {renderCard, uiElements, renderLoader};
