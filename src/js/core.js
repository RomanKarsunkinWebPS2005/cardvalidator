// Проверка номера карты по алгоритму Луна
export function isValidCardNumber(number) {
  const str = String(number).replace(/\D/g, "");
  if (/^(\d)\1+$/.test(str)) return false; // все цифры одинаковые
  let sum = 0;
  let shouldDouble = false;
  for (let i = str.length - 1; i >= 0; i--) {
    let digit = parseInt(str[i], 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

// Определение платёжной системы по номеру карты
export function getCardType(number) {
  const str = String(number).replace(/\D/g, "");
  if (/^4/.test(str)) return "visa";
  if (/^5[1-5]/.test(str) || /^2(2[2-9][1-9]|2[3-9][0-9]{2}|[3-6][0-9]{3}|7[01][0-9]{2}|7200)/.test(str)) return "mastercard";
  if (/^3[47]/.test(str)) return "amex";
  if (/^6(?:011|5|4[4-9])/.test(str)) return "discover";
  if (/^35(2[89]|[3-8][0-9])/.test(str)) return "jcb";
  if (/^3(?:0[0-5]|[68])/.test(str)) return "diners";
  if (/^220[0-4]/.test(str)) return "mir";
  return null;
} 