// import demo from "./app";
import { isValidCardNumber, getCardType } from "./core";

describe("Пример теста", () => {
  test.each([
    { str: "Hello!", expected: "Demo: Hello!" },
    { str: "", expected: "Demo: " },
    { str: 100, expected: "Demo: 100" },
  ])("demo($str)", ({ str, expected }) => {
    expect(demo(str)).toBe(expected);
  });
});

describe("Проверка алгоритма Луна", () => {
  test.each([
    ["4111111111111111", true], // Visa
    ["5500000000000004", true], // MasterCard
    ["340000000000009", true], // Amex
    ["6011000000000004", true], // Discover
    ["3528000000000007", true], // JCB
    ["30000000000004", true], // Diners
    ["2200000000000053", true], // Мир
    ["1234567890123456", false],
    ["0000000000000000", false],
  ])("%s -> %s", (num, expected) => {
    expect(isValidCardNumber(num)).toBe(expected);
  });
});

describe("Определение платёжной системы", () => {
  test.each([
    ["4111111111111111", "visa"],
    ["5500000000000004", "mastercard"],
    ["340000000000009", "amex"],
    ["6011000000000004", "discover"],
    ["3528000000000007", "jcb"],
    ["30000000000004", "diners"],
    ["2200000000000053", "mir"],
    ["1234567890123456", null],
  ])("%s -> %s", (num, expected) => {
    expect(getCardType(num)).toBe(expected);
  });
});
