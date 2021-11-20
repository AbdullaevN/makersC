// let func = (arg) => {
//   let uniqArr = [];
//   arg.forEach((elem) => {
//     let check = uniqArr;
//     console.log(uniqArr);
//   });
// };

// let arr = [1, 1, 2, 3, 4, 5, 5, 1, 3];
// let newArr = [];
// arr.forEach((item) => {
//   let check = newArr.filter((elem) => {
//     console.log("elem", elem, "item", item);
//     return elem === item;
//   });
//   if (check.length === 0) {
//     newArr.push(item);
//   }
// });
// console.log(newArr);

// let nums = [10, 21, 15, 2];
// let newArr = nums.map((item) => {
//   return item ** 2;
// });
// console.log(newArr);

// let student = {
//   name: "Aibek",
//   courses: {
//     js: {
//       price: 200,
//       duration: 3,
//     },
//   },
// };
// let {}

// let user = {
//   name: "Igor",
//   age: 25,
//   friends: ["Ilyas", "Kostya"],
//   children: [
//     { name: "Kolya", age: 3 },
//     { name: "Nika", age: 17 },
//   ],
//   parents: [
//     { name: "Viktor", age: 58 },
//     {
//       name: "Lisa",
//       age: 52,
//       friends: {
//         close: ["Shergazy", "Aleksandra", "Maria"],
//         notClose: [],
//       },
//     },
//   ],
// };
// let {
//   children: [, name],
// } = user;
// console.log(name);
// let {
//   parents: [
//     ,
//     {
//       friends: {
//         close: [, b],
//       },
//     },
//   ],
// } = user;
// console.log(b);

// const calcSquare = function () {
//   console.log(arguments);
//   let [first, second] = arguments;
//   console.log(first, second);
// };
// calcSquare(3, 5);

// let arr = [-100, 100, 330, -500];
// let newArr = arr.filter((item, index, array) => {
//   return item < 0;
// });
// console.log(newArr);

// let gamer = {
//   pseudoName: "Nick",
//   games: ["LoL", "Dota2", "CSGO"],
//   showUserGames() {
//     console.log(this.games);
//   },
// };
// gamer.showUserGames();

// let arr = [20, -15, 30];
// let newArr = arr.reduce((prev, current) => {
//   return prev * current;
// }, 1);
// console.log(newArr);
// let firstFunc = () => {
//   let str = " ";
//   return (firstFunc = (word) => {
//     return (str += word);
//   });
// };

// let func = firstFunc();
// console.log(func("hello "));
// console.log(func("world"));
// console.log(func("!"));
// let newFunc = firstFunc();
// console.log(newFunc("coding"));
// console.log(newFunc("is easy"));

// let str = "";
// function func(word) {
//   return (str += word);
// }
// console.log(func("hello"));
// console.log(func(" hello"));
// console.log(func(" world"));

// console.log(func(" coding"));
// console.log(func(" is easy"));

// function rec(start) {
//   console.log(start);
//   if (start >= 100) return;
//   rec(start + 1);
// }
// rec(1);

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// let i = 101;
// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// console.log((true && true && false) || true);

let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.filter((item) => {
  if (item % 2 === 0) {
    return item;
  }
});
console.log(newArr);
