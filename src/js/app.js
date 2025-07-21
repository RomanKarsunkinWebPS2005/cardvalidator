import { isValidCardNumber, getCardType } from "./core";
import visa from '../img/visa.png';
import mastercard from '../img/mastercard.png';
import mir from '../img/mir.png';
import amex from '../img/amex.png';
import discover from '../img/discover.png';
import jcb from '../img/jcb.png';
import diners from '../img/diners.png';

const cardTypes = [
  { type: 'visa', src: visa, alt: 'Visa' },
  { type: 'mastercard', src: mastercard, alt: 'MasterCard' },
  { type: 'mir', src: mir, alt: 'Мир' },
  { type: 'amex', src: amex, alt: 'American Express' },
  { type: 'discover', src: discover, alt: 'Discover' },
  { type: 'jcb', src: jcb, alt: 'JCB' },
  { type: 'diners', src: diners, alt: 'Diners Club' },
];

const iconsContainer = document.querySelector('.card-icons');
iconsContainer.innerHTML = '';
const icons = {};
cardTypes.forEach(({ type, src, alt }) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.className = 'card-icon';
  img.dataset.type = type;
  iconsContainer.appendChild(img);
  icons[type] = img;
});

const input = document.querySelector('.card-input');
const form = document.querySelector('.card-form');
const result = document.querySelector('.card-result');

function highlightCardIcon(type) {
  Object.values(icons).forEach(icon => {
    if (icon.dataset.type === type) {
      icon.classList.add('active');
    } else {
      icon.classList.remove('active');
    }
  });
}

input.addEventListener('input', () => {
  const type = getCardType(input.value);
  highlightCardIcon(type);
  result.textContent = '';
  result.className = 'card-result';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value;
  const type = getCardType(value);
  highlightCardIcon(type);
  if (!type) {
    result.textContent = 'Неизвестная платёжная система';
    result.className = 'card-result error';
    return;
  }
  if (isValidCardNumber(value)) {
    result.textContent = 'Карта действительна';
    result.className = 'card-result success';
  } else {
    result.textContent = 'Некорректный номер карты';
    result.className = 'card-result error';
  }
});
