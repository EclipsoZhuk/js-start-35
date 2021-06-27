// Task 1
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// Task 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!"
//   // Change code above this line
// }

// Task 3
// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";;
//   // Change code above this line
// }

// Task 7
// const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
// const fruitsArrayLength = fruits.length;

// Task 8
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// Task 9
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array.shift();
//   const lastElement = array.pop();
//   const newArray = [firstElement, lastElement];
//   return newArray;
//   // Change code above this line
// }

// Task 11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// const array = message.split(" ");
// let totalPrice = 0;

// totalPrice = array.length * pricePerWord;
// return totalPrice;
//    // Change code above this line
// }

// Task 12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
// string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }

// Task 13
// function slugify(title) {
//   // Change code below this line
// const slug = title.toLowerCase().split(' ').join('-');

// return slug;
//   // Change code above this line
// }

// Task 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// Task 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// Task 16
// let tempArr = [];
// let array = firstArray.concat(secondArray);
//   tempArr = (array.length > maxLength) ? array.slice(0, maxLength) : array.slice(0, array.length);
// return tempArr;

// Task 17
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// Task 18
// function calculateTotal(number) {
//  // Change code below this line
// let totalPrice = 0;
// for (let i = 0; i < number; i += 1) {
//   totalPrice += i + 1;

// }

// return totalPrice;
//   // Change code above this line
// }

// Task 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// Task 20
// const order = [412, 371, 94, 63, 176];
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i += 1) {
// total += order[i];

//   // Change code above this line

// }

// Task 23
// function filterArray(numbers, value) {
//    // Change code below this line
// let result = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (value < numbers[i]) {
//         result.push(numbers[i]);
//     }

// }
// return result;
//   // Change code above this line
// }

// Task 25
// function getCommonElements(array1, array2) {
//   // Change code below this line
// const arr = [];
//   for (let i of array1) {
//     if (array2.includes(i)) {

//       arr.push(i);
//     }

//   }
//     return arr;
//  // Change code above this line
// }

// Task 26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

// for (const i of order) {
//       total += i;
//   }
//   // Change code above this line
//   return total;
// }

// Task 27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
// for (const number of numbers) {
//     if (number > value) {
//         filteredNumbers.push(number);
//     }
// }
//   return filteredNumbers;
//   // Change code above this line
// }

// Task 28

// Task 29
// function getEvenNumbers(start, end) {
//    // Change code below this line
// let array = [];
// for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//         array.push(i);
//     }

// }

// return array;
//     // Change code above this line
//   }

// Task 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// // Task 31
// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// Task 32
// function includes(array, value) {
//   // Change code below this line
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === value) {
//     return true; }
// }
//   return false;
//   // Change code above this line
// }
