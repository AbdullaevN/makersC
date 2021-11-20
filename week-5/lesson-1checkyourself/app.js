// // Import stylesheets
// // import './style.css';

// // Check Yourself! Week 4

// // Группа C ==============================================================
// // Задание №1
// // Создайте функцию которая принимает в качестве
// // аргумента два числа и возвращает их сумму.

// let sumFunc = (arg1, arg2) =>{
//     return arg1 + arg2;
// }
// console.log(sumFunc(5,5));

// // Задание №2
// // Дано число 5, выведите все числа от 5 до 1 используя рекурсию.

// // Вывод в консоль:
// // 5
// // 4
// // 3
// // 2
// // 1

// let x = 5; 
// function func() { 
//   if (x !== 0) { 
//     console.log(x--); 
//     func(); 
//   } 
// } 
// func();

// // Задание №3
// // Реализуйте стрелочную функцию, принимающую строку и инвертирующую ее.
// // Например, строка «JavaScript» должна стать строкой «tpircSavaJ».

// let strFunc = (str) => {
//     return str.split('').reverse().join('');
// }
// console.log(strFunc('JavaScript'));
// // Группа B =============================================================

// // Задание №4
// // Напишите функцию которая принимает
// // массив с названиями стран и возвращает
// // страну с самым длинным названием,
// // затем напишите вторую функцию которая возвращает
// // страну с самым коротким названием.

//     let countries = (names) => { 
//     names.sort((a, b) => b.length - a.length); 
//     return names[0]; 
//     } 
//     let countries2 = (names) => { 
//     names.sort((a, b) => a.length - b.length); 
//     return names[0]; 
//     } 
    
//     let names2 = countries(['Kyrgysztan', 'Korea', 'Uzbekistan', 'Russia']); 
//     console.log(names2); 
    
//     let names3 = countries2(['Chili', 'Korea', 'Kyrgysztan', 'USA']); 
//     console.log(names3); 
// // Задание №5
// // Сделать реверс слова через рекурсию (используйте методы substr() и charat())
// // function revFunc(word) {
// //     if (word.length === 0) {
// //       return '';
// //     }
  
// //     return revFunc(word.substr(1)) + word.charAt(0);
// //   }
  
// //   console.log(revFunc("tenet"));

// // Задание №6
// // Функция принимает параметр min.
// // В нем лежит число от 0 до 59.
// // Функция должна возвращать в какую четверть
// // часа попадает это число (в первую, вторую,
// // третью или четвертую).
// // let minFunc = (min) => {
// //         if(min > 0 && min < 14){
// //             console.log('В первую');
// //         }else if (min >= 15 && min <= 30){
// //             console.log('Во вторую');
// //         }else if (min >= 31 && min <= 44){
// //             console.log('В третью');
// //         }else if (min >= 45 && min <= 59){
// //             console.log('В четвертую');
// //         }else{
// //             console.log('неверный диапазон');
// //         }   
// // }
// // minFunc(45)
// // Задание №7
// // Дана строка с целыми числами. Найдите числа, стоящие в кавычках и увеличьте их в два раза.
// // Пример:
// // input: "2aaa'3'bbb'4'"
// // output: "2aaa'6'bbb'8'"
// let res = "2aaa'3'bbb'4'";
// res.replace(/\d+(?=')/g)
// let funcFunc =(match)=> { 
//     return match * 2; 
//   }; 
//   console.log(res);
// funcFunc()


// // Группа A ==============================================================

// // Задание №8
// // Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// // а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// // Например: ввод - 'hello', функция должна возвратить 'HLL'


// // function glasFunc(str) { 
// //   vaules = { 
// //     a: "a", 
// //     i: "i", 
// //     o: "o", 
// //     u: "i", 
// //     e: "e", 
// //   }; 
 
// //   let pust = ""; 
// //   for (let i = 0; i < str.length; i++) { 
// //     if (!vaules[str[i]]) { 
// //       pust += str[i].toUpperCase(); 
// //     } 
// //   } 
// //   return pust; 
// // } 
 
// // console.log(glasFunc("hello")); 
// // Задание №9
// // Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и false – если не совпадает.

// // let makePassword = (psword) => {
// //     return function () {
// //         if(psword === 'parol'){
// //             true
// //             console.log(true);
// //         }
// //         else{
// //             false
// //             console.log(false);
// //         }
// //     }
// // }
// // let ans = makePassword('parol')
// // ans()
// // Задание №10
// // Создайте объект person со свойством name, реализуйте метод introduce() который будет выдавать
// // имя объектa


// let person = {
//     name: 'Jhon',

//     introduce() {
//         console.log(person.name);
//     }
// }
// person.introduce()
// // Задание №11
// // С помощью test определите, что переданная строка является доменом. Примеры доменов: site.ru, site.com, my-site.com.
// // Пример:
// // 1)  input: 'google'
// //     output: false

// // 2)  input: 'google.com'
// //     output: true

// function testFunc(argStr) { 
//   let res = /\.com$|\.ru$|\.net$/; 
//   return res.test(argStr); 
// } 

// console.log(testFunc("google.com")); 




// let arr = [1,2,3,4,5,6,7,8,9]
// arr.forEach((value, index, arr) =>{
//     console.log(value * 2);
// })

// let filtered = arr.filter((value, index, arr) => {
//     return value > 0;
// })
// console.log(filtered);

// let reduceFunc = arr.reduce((previousVal, currentVal, currentIndex, array) => {
//     return previousVal + currentVal
// })

// for(let i = 0; i < arr.length; i++){
//     console.log(arr.length + 1 - arr[i]);
// }

// forEach()
// arr.forEach((item, index, array) => {
    // console.log(item);
    // console.log(index);
    // console.log(array);

// })

// let newArr = arr.map((item) => {
//     return item +10
// })
// console.log(newArr);

// //map()
// arr.map((item, index, array) => {
//     // console.log(item);
//     // console.log(index);
//     // console.log(array);
// })


// //filter()
// let newArr = arr.filter((item,index,array) => {
//     return item > 4
// })
// console.log(newArr);


// let arr = 'Ivan, Misha, Kani, Oleg, Aktan, Andrey'
// // let newStr = arr.split(', ');
// let filtered = arr.split(', ').filter(item => {
//     // return item.length > 4
//     return /a/gi.test(item)
// })
// console.log(filtered);
// // console.log(newStr);



// indexOf
// let arr = ['Ivan', 'Misha', 'Kani', 'Oleg', 'Aktan', 'Andrey']
// let index = arr.indexOf('Misha', 0);
// console.log(index);

// let index = arr.findIndex((item, index, array) => {
//     return item.length === 5
// })
// console.log(index);

// let arr = [
//     {
//         name: 'Jhon'
//     },
//     {
//         name: 'Ivan'
//     },
//     {
//         name: 'Oleg'
//     },
//     {
//         name: 'Aktan'
//     },
//     {
//         name: 'Emily'
//     }
// ] 
//find
// console.log(arr.find(item => item.name === 'Oleg') );
// console.log(arr.findIndex(item => item.name === 'Oleg') );

//every()

// let arr = [1,2,4,5,'6',8,9]
// // let result = arr.every((item, index, array) => {
// //     return typeof item === 'number'
// // })
// // console.log(result);
// //some()
// let result = arr.some(item => {
//     return typeof item === 'string'
// })
// console.log(result);

//includes(element, fromIndex)
// let arr = [1,2,3,4,5,6,7,8,9];
// let result = arr.includes(9, 3)
// console.log(result);


//УРОК
//Методы массивов
//  let arr = ['boolean' , 34, {} , true ]
//  for(let i = 0; i< arr.length; i++){
//      console.log(arr[i] , i, arr);
//  }

//  arr.forEach((item , index, array) => {
//      console.log(item, index, array);
//  })

// let arr = [1,2,3,4,'a',6,7]
// let newArr = arr.map((item, index, array) => {
//     if(item === 'a'){
//         return 5;
//     }
//     return item
// });
// console.log(newArr);

// let numbers = [33, 2, 43, 10, 25];
// let newNumbers = numbers.filter(item => {
//     return item > 15
// })
// console.log(newNumbers);


// let films = [
//     {
//         title: 'Оно',
//         genre: 'horror',
//     },
//     {
//         title: 'Venom',
//         genre: 'Fantasy',
//     },
//     {
//         title: 'Эки баатыр',
//         genre: 'comedy'
//     },
// ]
// console.log(films);

// let hndleFilter = (genre) => {
//     let filtered = films.filter(item => {
//        return item.genre === genre
//      })
//      console.log(filtered);
// }
// hndleFilter('Fantasy')

//reduce()

// let arr = [2,4,6,8,10]
// let result = arr.reduce((previousVal, currentVal, index, array) => {
//         console.log(previousVal);
//         console.log(currentVal);
// console.log(index);
// console.log(array);
// return currentVal;
//         result previousVal + currentVal;
// })

// console.log(result);



// let arr = [true, 1 ,0, 'str'];
// let result = arr.indexOf('str')
// console.log(result);
// let res = []
// function cut(elem) {
//     let index = arr.indexOf(elem)
//     console.log(index);
//     arr.splice(index, 1)
//     res.push(elem)
// }
// console.log(arr);
// cut(false)
// console.log(arr);
// console.log(res);


//includes 
// let arr = [10, 20, 'array']
// let result = arr.includes(10)
// console.log(result);

//some and every
// let users = [
//     {id:1,name:'Sanzhar'},
//     {id:2,name:'Bayel'},
//     {id:3,name:'Atay'},
// ];
// // let result = users.every(item => item.id === 1)
// // console.log(result);

// // let arr = [1,20,30,-5]
// // // let result = arr.every((item) => item > 0)
// // let result = arr.some((item) => item > 0)
// // console.log(result);

// //find()
// let user = users.findIndex(item => item.name === 'Atay')
// console.log(user);



// let celsious = [-15,10,24,36,0]
// let far = celsious.map(item => item * 1.8 + 32)
// console.log(far);

// Создать новый список (массив) из массива studentRecords, где будут храниться только студенты, 
//у которых баллы больше 50.
// После отфильтровки начислить каждому студенту по 15 баллов в качестве поощрения.
// В конце посчитать средний балл студентов (используйте метод reduce()). 
// 
// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//     { name: 'Baba', id: 101, marks: 23 },
//     { name: 'John', id: 200, marks: 45 },
//     { name: 'Wick', id: 115, marks: 75 },
// ]

// let newStudents = studentRecords.filter(item => {
//    return item.marks > 50
// })
//  newStudents = newStudents.map(item => {
//     item.marks += 15
//     return item
// })
// let sredStudents = studentRecords.reduce((prev, student) => {
//     console.log(prev, student);
//     return prev + student.marks
// }, 0)
// sredStudents = sredStudents / newStudents.length
// // console.log(newStudents);
// console.log(sredStudents);
// console.log(newStudents);
// let func = (result) => {result > 23 && result < 40 ? console.log('Hello') : console.log('Goodbye');}
// func(25)


// 3. Дан массив с числами. Создайте из него новый массив, в которым останутся лишь положительные числа. Для этого нужно создать вспомогательную функцию isPositive(), которая будет принимать в качестве аргумента число и возвращать true, если число положительное, и false - если отрицательное. *

// let arr = [1,2,3,4,6,8]
// let newArr  = []
// for(let  i = 0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//         newArr.push(arr[i])
//         console.log(newArr);
//     }
// }
// let isPositive =(arg1) => {

// }

// let arr =  [1, 2, 5, 9, 4, 13, 4, 10];
// for(let i =0; i<arr.length; i++) {
//    if(arr[i] === 4){
// console.log('Есть')
//     }
// }

// document.write('<h1>System Paltform: </h1>');
// document.write('<p>rgergregrtg</p>');
// document.write('<div>System Paltform: </div>');

// let value = 0;
// console.log(++value);
// console.log(value++);


// let names = ['nick','james','kameron']
// names = names.map(item => item[0].toUpperCase() + item.slice(1));
// console.log(names);

// let arr = [1,3,5,6,1,-11,-534,0]
// let newArr = arr.filter(item => item < 0)
// console.log(newArr);

// let arr = ['str',1,[3,4], true, ['str'],10]; 
// console.log(arr.filter((item) => Array.isArray(item)));

// let num = 123456789;
// console.log(+num.toString().split('').reverse().join(''));

// let palindromFunc = (arg) => {
//     let newArg = arg.split('').reverse().join('')
//     arg.toLowerCase().trim() === newArg.toLowerCase().trim() ? alert('palindrom') : alert('ne palindrom')
// }
// palindromFunc('teneT ')
// //trim() убирает все пробелы до первого символа и после последнего символа



// let arr = ['Молоко', 77, 11, 'Мед', -88];
// function check(arg){
//     arr.forEach((elem, index) => {
//         if(arg === elem){
//              console.log(true, index);
//         }else{
//            return alert(false)
//         }
//         // return arr
//     })
// }
//  check(11)

// let arr=['Молоко', 20, 40, 'до', 30]
// function func2(arr,arg){
//     let result = arr.includes(arg)
//     let result1 = arr.indexOf(arg)
//     if(result === true){
//       console.log(result, result1)
//     } else {
//       console.log(false)
//     }
// }
// func2(arr, 41)