import products from "./products.js";
import {renderProducts, uiElement} from "./ui.js";

uiElement.mobileMenuBtn.addEventListener("click", () => {
  uiElement.nav.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
