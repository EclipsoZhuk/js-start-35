// Task 1
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// Task 12
// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     propCount = Object.keys(object).length;
//     // Change code above this line
//     return propCount;
// }

// Task 13
// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// Task 17
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// Task 18
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
//     }

//     return null;

//     // Change code above this line
// }

// Task 19
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     const arrayValues = [];

//     for (const item of products) {
//         let value = item[propName];
//         console.log(value);
//         if (value !== undefined) {
//             arrayValues.push(value);
//         }
//     }
//     console.log(arrayValues);
//     return arrayValues;

//     // Change code above this line
// }

// Task 20
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки

//     let totalPrice = 0;
//     for (const item of products) {
//         if (item.name === productName) {
//             totalPrice = item.price * item.quantity;
//             // console.log(totalPrice);
//         }
//     }
//     return totalPrice;

//     // Пиши код выше этой строки
// }

// Task 25
// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line
// const {
//     today: {
//         high: highToday,
//         low: lowToday,
//         icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//     },
//     tomorrow: {
//         high: highTomorrow,
//         low: lowTomorrow,
//         icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//     },
// } = forecast;

// Task 26
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//     const {
//         today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//     } = forecast;
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// Task 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// Task 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//     ...firstGroupScores,
//     ...secondGroupScores,
//     ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// Task 29
// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// Task 30
// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
//     // Change code below this line
//     const task = {
//         ...{
//             completed,
//             category,
//             priority,
//         },
//         ...data,
//     };
//     return task;
//     // Change code above this line
// }

// Task 31
// // Change code below this line
// function add(...args) {
//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
//     // Change code above this line
// }

// Task 32
// // Change code below this line
// function addOverNum(number, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > number) {
//             total += arg;
//         }
//     }

//     return total;
//     // Change code above this line
// }

// Task 33
// function findMatches(newArray, ...args) {
//     const matches = []; // Don't change this line
//     for (const arg of args) {
//         if (newArray.includes(arg)) {
//             matches.push(arg);
//         }
//     }
//     // Change code above this line
//     return matches;
// }

// Task 34
// const bookShelf = {
//     // Change code below this line
//     books: ['The last kingdom', 'The guardian of dreams'],
//     getBooks() {
//         return 'Returning all books';
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`;
//     },
//     // Change code above this line
// };

// Task 35
// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const bookIndex = this.books.indexOf(oldName);
//         this.books.splice(bookIndex, 1, newName);

//         return this.books;
//         // Change code above this line
//     },
// };

// Task 36
// const atTheOldToad = {
//     // Change code below this line
//     // Change code above this line
// };
// atTheOldToad.potions = [];

// Task 37
// const atTheOldToad = {
//     // Change code below this line
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     getPotions() {
//         return this.potions;
//     },
//     // Change code above this line
// };

// Task 41
// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {
//         if (this.potions.includes(potionName)) {
//             return `Potion ${potionName} is already equipped!`;
//         }

//         this.potions.push(potionName);
//     },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === potionName) {
//                 this.potions.splice(i, 1);
//             }
//         }
//     },
//     updatePotionName(oldName, newName) {
//         for (let obj of this.potions) {
//             if (obj.name === oldName) {
//                 obj.name = newName;
//             }
//         }
//     },
//     // Change code above this line
// };
