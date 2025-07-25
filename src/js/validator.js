import { isValidCardNumber, getCardType } from "./core";

export function setupCardForm(cardTypes) {
  const iconsContainer = document.querySelector(".card-icons");
  iconsContainer.innerHTML = "";
  const icons = {};
  cardTypes.forEach(({ type, src, alt }) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.className = "card-icon";
    img.dataset.type = type;
    iconsContainer.append(img);
    icons[type] = img;
  });

  const input = document.querySelector(".card-input");
  const form = document.querySelector(".card-form");
  const result = document.querySelector(".card-result");

  function highlightCardIcon(type) {
    Object.values(icons).forEach((icon) => {
      if (icon.dataset.type === type) {
        icon.classList.add("active");
      } else {
        icon.classList.remove("active");
      }
    });
  }

  input.addEventListener("input", () => {
    // Фильтрация: только цифры
    const cleanValue = input.value.replace(/\D/g, "");
    if (input.value !== cleanValue) {
      input.value = cleanValue;
      result.textContent = "Только цифры!";
      result.className = "card-result error";
      highlightCardIcon(null);
      return;
    }
    const type = getCardType(input.value);
    highlightCardIcon(type);
    result.textContent = "";
    result.className = "card-result";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    if (/\D/.test(value) || value === "") {
      result.textContent = "Введите только цифры";
      result.className = "card-result error";
      highlightCardIcon(null);
      return;
    }
    const type = getCardType(value);
    highlightCardIcon(type);
    if (!type) {
      result.textContent = "Неизвестная платёжная система";
      result.className = "card-result error";
      return;
    }
    if (isValidCardNumber(value)) {
      result.textContent = "Карта действительна";
      result.className = "card-result success";
    } else {
      result.textContent = "Некорректный номер карты";
      result.className = "card-result error";
    }
  });
}
