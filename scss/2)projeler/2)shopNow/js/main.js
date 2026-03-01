import {uiElement} from "./ui.js";

uiElement.mobileMenuBtn.addEventListener("click", () => {
  uiElement.nav.classList.toggle("active");
});
