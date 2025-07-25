import { isValidCardNumber, getCardType } from "./core";
import { setupCardForm } from "./validator";
import visa from "../img/visa.png";
import mastercard from "../img/mastercard.png";
import mir from "../img/mir.png";
import amex from "../img/amex.png";
import discover from "../img/discover.png";
import jcb from "../img/jcb.png";
import diners from "../img/diners.png";

const cardTypes = [
  { type: "visa", src: visa, alt: "Visa" },
  { type: "mastercard", src: mastercard, alt: "MasterCard" },
  { type: "mir", src: mir, alt: "Мир" },
  { type: "amex", src: amex, alt: "American Express" },
  { type: "discover", src: discover, alt: "Discover" },
  { type: "jcb", src: jcb, alt: "JCB" },
  { type: "diners", src: diners, alt: "Diners Club" },
];

setupCardForm(cardTypes);
