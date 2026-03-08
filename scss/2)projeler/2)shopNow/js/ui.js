// UI Element
const uiElement = {
  mobileMenuBtn: document.querySelector(".mobile-menu-btn"),
  nav: document.querySelector("nav"),
  productWrapper: document.querySelector(".product-wrapper"),
};

// UI Functions
const renderProducts = (products) => {
  // Dışarıdan gelen products dizisini dön ve bu dizinin her elemanı için bir html oluştur
  products.forEach((product) => {
    // Her ürün için bir div oluştur
    const productCard = document.createElement("div");

    // Oluştural ürün kartına product-card class'ı ekle
    productCard.classList.add("product-card");

    // Oluşturduğumuz ve class ataması yaptığımız elemanınn html'ini belirle

    productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />

            <div class="info">
              <h2>${product.name}</h2>
              <h4>${product.category}</h4>
              <p>₺${product.price}</p>
              <button class="btn">Sepete Ekle</button>
            </div>
    `;

    // Oluşturulan, class'ı eklenen ve html'i belirlenen elemanı arayüzdeki productWrapper içerisiine ekle
    uiElement.productWrapper.appendChild(productCard);
  });
};

export {uiElement, renderProducts};
