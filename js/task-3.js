"use strict"

function checkForSpam(message) {
  if (message && "spam" && message="sale") {
  }
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// * Логічні оператори

// console.log(true && "0" && "10");
// console.log(true && false && "10");
// console.log(true && 0 && "kiwi");

// console.log(true || 3);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);

// * Приведення типів до Boolean

// const number = 6;
// const booleanValue = Boolean(number);
// console.log(booleanValue);

// const str = "hello";
// console.log(!str);

// const age = 18;
// const isAdult = age >= 18;
// console.log(isAdult);

// * Розгалуження: if, if...else, else...if

// TODO:============task-1=========================
// Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = "abcde";

// // if(str.startsWith("a")) {
// //     console.log("Yes.");
// // } else {
// //     console.log("No.");
// // }

// str.startsWith("a") ? console.log("Yes.") : console.log("No.")

//TODO:============task-2=========================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

// const firstName = "Alex";
// const lastName = "Hrabelskyi"

// const firstNameLength = firstName.length;
// const lastNameLength = lastName.length;

// if (firstNameLength > 4 && lastNameLength > 5) {
//     console.log(firstNameLength + lastNameLength);
// } else {
//     console.log("неможливо виконати умову");
// }

//TODO:============task-3=========================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// function checkNumber() {
//     const number = parseInt(prompt("Enter number"));

//     if (number >= 55 && number <= 99) {
//         return "Число потрапляє в діапазон"
//     } else {
//         return "Число не потрапляє в діапазон"
//     }
// }

// const res = checkNumber();
// alert(res);

// TODO:============task-4=========================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const age = parseInt(prompt("Eneter age"));

// if (age >= 0 && age <= 16) {
//   alert("children");
// } else if (age >= 17 && age <= 60) {
//   alert("adult");
// } else if (age >= 61 && age <= 100) {
//   alert("old");
// } else {
//   alert("error");
// }

//TODO:============task-5=========================
// Напиши скрипт, який отримує мінімальне та максимальне значення від користувача через prompt. Зроби перевірку, що користувач передає саме числа, якщо користувач водить не числа виведіть в консоль 'Будь ласка, введіть числа.' Також додайте перевірку, щоб користувач не зміг ввести мінімальне число > за максимальне, якщо це сталось виведи у косоль повідомлення 'Мінімальне значення повинно бути менше максимального.'. У падку правильного ввода данних виведи у консоль рядок  "Випадкове число в діапазоні від мінімального до максимального : ("рандомне число")"

// const min = Number.parseInt(prompt("Enter min number"));
// const max = Number.parseInt(prompt("Enter max number"));

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// if (isNaN(min) || isNaN(max)) {
//     alert("Будь ласка, введіть числа.");
// } else if (min >= max) {
//     alert("Мінімальне значення повинно бути менше максимального.");
// } else {
//     const randomNum = getRandomNumber(min, max);
//     alert(
//       `Випадкове число в діапазоні від мінімального до максимального : ${randomNum}`
//     );
// }

//TODO:============task-7=========================
// Перепишіть if..else на тернарний оператор, за допомогою декількох операторів '?'.

// const login = '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);

// login === 'Співробітник' 
// ? console.log('Привіт') 
// : login === 'Директор' 
// ? console.log('Вітаю') 
// : login === '' 
// ? console.log('Немає логіну')
// : console.log("");