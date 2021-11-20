// // // let list = [
// // //     'milk',
// // //     'sugar',
// // //     'salt',
// // //     'butter',
// // //     'bread',
// // // ]

// // // // console.log(list);
// // // let [first, second, third, ...other] = list
// // // console.log(first, second, third, other);

// // // let arr = [
// // //     [1,2,3,4],
// // //     [5,6,7,8]
// // // ];
// // // let [[a,b,c,d], [newArr, ...other]] = arr
// // // console.log(a,b,c,d,newArr);

// // // let arr = [1,2,3,4,5]
// // // let [,,,four] = arr
// // // console.log(four);

// // // let obj = {
// // //     name: 'Kani',
// // //     color: 'yellow',
// // // };
// // // let obj2 = {
// // //     lastName: 'East'
// // // };

// // // let {color} = obj
// // // let newObj = {color, ...obj2}
// // // console.log(newObj);

// // let obj = {
// //     name: 'Kani',
// //     age: 22,
// //     position: [
// //         'Mentor',
// //         'Backend-dev',

// //     ],
// //     dog:{
// //         name:'Kora',
// //         age:2,
// //     }
// // };

// // // let {name, age} =objb

// // let {

// //     name,
// //     age,
// //     positions: [
// //         firstPosition,
// //         secondPosition,
// //         ...otherPositions
// //     ],
// //     dog:{
// //         name: dogName,
// //         age: dogAge
// //     }
// // } = obj;
// // console.log(name, age, firstPosition, secondPosition, otherPositions, dogName, dogAge);

// //поверхностное и глубокое копирование объектов

// let user = {
//     name: 'Aisultan',
//     age: 20,
//     languages: {
//         english: '2 l',
//         franch: '4 l'
//     }
// };
// // let newUser = user;
// // let newUser = Object.assign({}, user)
// let newUser = {...user}; // поверхностное копирование .(sread оператоr - rest)

// newUser.name = 'Aibek';
// newUser.languages.english = '6 l'
// console.log(user);
// console.log(newUser);

// let product = {
//     title : 'T-shirt',
//     price : {
//         s: 3000,
//         m: 4000,
//         l: 2000,
//     },
// };

// newProduct =
// // let newProduct = JSON.parse(JSON.stringify(product))
// // let str= JSON.stringify(product);

// console.log(str);
// console.log(product);

// let student = {
//     name: 'Melis',
//     lastName: 'Artykbaev'
// };
// // let name = student.name;
// // let lastName = student.lastName

// let name = 'sanjar'
// let {name: studentName, lastName, ...rest} = student
// console.log(studentName, lastName);

// let arr = ['true',20,null, 'str',77,false]
// let [boolean , , type,...rest] = arr;
// let [first, second] = rest;
// console.log(boolean,type, rest);
// console.log(first, second);

// let obj = {
//     name: 'market place',
//     frameworks: ['React', 'Django API'],
//     versions : {
//         legasy : [2011, 2012, 2013]
//     },
// }
// let { frameworks: [first], versions: {legasy:[drgr, oneTwo]}, name:projectName} = obj
// console.log(first);
// console.log(oneTwo);
// console.log(projectName);

// let product = {
//     //  title: 'Pencil',
//      price : 100,
// };
// let {title = 'def title'} = product;
// console.log(title);

// let user = {age:40}
// let {name= prompt('Vashe imya'), age } = user
// console.log(`name: ${name}, age: ${age}`)

// Дан объект {name: 'Jack', age: '22', hobbys: [football, swimming]}.
// Запишите в переменные hobby1 и hobby2 слова football и swimming соответственно.

// let showNameAndPhone = (user) => {
//     console.log(user.name, user.phone);
// }
// let obj = {
//     name: 'Nur',
//     phone : 0777222111,
// };
// showNameAndPhone(obj)

// let func =([first, second]) => {
//     console.log(first, second);
// //     arg.forEach((item) => {
// //         console.log(item);
// //     })
// }
// func([1,2,3,4,5])

// let func =({name = 'Primer', lastName ='Chotoev', age= 85}) =>{
// console.log(name, lastName, age)
// }
// let obj = {
//     name: 'Ishak',
//     // lastName: 'Andashev',
//     age: 24
// }

// func(obj)

// Вам дан объект с информацией о книге. С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

// const courseCatalogMetadata = [
//   {
//     title: "The Hobbit, or There and Back Again",
//     description:
//       "The hobbit tells a fantastic story of adventure, danger, friendship, and courage",
//     texts: [
//       {
//         author: "J. R. R. Tolkien",
//         price: 120,
//         ISBN: "912-6-44-578441-0",
//       },
//     ],
//   },
// ];

// let [
//   {
//     texts: [{ ISBN }],
//   },
// ] = courseCatalogMetadata;
// console.log(ISBN);
// var reverse = function (x) {
//   // return parseInt(x.toString().split(" ").reverse().join("")) * Math.sign(x);
//   x.split("").reverse().join("");
//   console.log(x);
// };
// // console.log(reverse(123));
// reverse(123);

// function reverseNum(num) {
//   return (
//     parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
//   );
// }

// console.log(reversedNum(-543.21));

// var reverse = function (x) {
//   x = x + "";
//   return Math.sign(x) * parseFloat(x.split("").reverse().join(""));
// };
// console.log(reverse(-123));

// var reverse = function (x) {
//   x = x + "";
//   return Math.sign(x) * parseFloat(x.split("").reverse().join(""));
// };
// console.log(reverse(1534236469));

// var reverse = function (x) {
//   x = x + " ";
//   return Math.sign(x) * parseInt(x.split("").reverse().join(""));
// };
// console.log(reverse(1534236469));

// /**
//  * @param {number} x
//  * @return {number}
//  */
//  var reverse = function(x) {
//   // if(reverse >= Math.pow(2, 10) - 1 || reverse <= Math.pow(-2, 10)){
//   //     return 0
//   // }
// x=x+'';
//  return Math.sign(x)*parseInt(x.split('').reverse().join(''));
// };
// console.log(reverse(1534236469));

// var addTwoNumbers = function (l1, l2) {
//   let sum = [];
//   for (let i = 0; i < l1.length; i++) {
//     for (let j = 0; j < l2.length; j++) {
//       sum.push(l1[i] + l2[j]);
//     }
//   }
//   return sum;
// };
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

var addTwoNumbers = function (l1, l2) {
  let sum = [];
  sum.map((a, b) => {
    return a + b;
  });
  console.log(sum);
};
addTwoNumbers([2, 4, 3], [5, 6, 4]);
