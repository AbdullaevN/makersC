// const str = 'Привет Hello, my name is Kan. I am 22 years old and I live in Bishkek 15';
// const regexp = /Kan/;
// const regexp = /\d\d/g;
// const regexp = /\w\w\w\w\w\w/
// const regexp = /\W\W\W\W\W\W/;
// const regexp = /\D\D/
// const str = 'Hello! We are Alan and Ulan'
// const regexp = /[AU]lan/g

// const str = 'Today is 20.10.2020'
// // const regexp = /\d\d.\d\d.\d\d\d\d/ 
// // const regexp = /\d{2}.\d{2}.\d{4}/
// const regexp = /\./
// const result = str.match(regexp)
// console.log(result);


// let str = 'We see you. we need you'
// let pattern = /we/gi;
// console.log(str.replace(pattern, 'I'));

// let str  = prompt('enter word: ')
// let regexp = new RegExp(/[a-zA-Zа-яА-Я]/,'g');
// console.log(regexp.test(str));


// let str = prompt('Enter word: ')
// let regexp = new RegExp(/\d+/, 'g');
// console.log(regexp.test(str));

// let str = prompt('Enter product weid')
// let regexp = new RegExp(/^\d+(kg|t|g)$/,'gi');
// console.log(regexp.test(str));


// let str = 'name: Jack, lastName: Alan';
// let newArr = [];
// for(let i = 0; i < str.length; i++){
//     if(str[i].toLocaleLowerCase() !== 'a')newArr.push(str[i])
//     else newArr.push('*')
// }

// let newStr = newArr.join('');
// console.log(newStr);

// console.log(str.replace(/a/gi, '*'));

// let str = prompt('enter your phone number: ');
// let regexp = new RegExp(/^\+996\d{9}/, 'g');
// // console.log(regexp.test(str));

// if(regexp.test(str)){
//     alert('correct')
// }else{
//     alert('wrong')
// }


// let str = 'a1a a2a a3a a4a a5a aba aca';
// let regexp = /a\d\a/;
// concole.log(str.replace(regexp, '$'));



//регулярные выражения

//есть 2 способа создания регулярного выражения
//1 
// const regexp1 = /внутри само выражение/
// const regexp1 = /coding/
// //2 
// let regexp2 = new RegExp('coding');

// const str = 'code is easy'
// let result = str.match(regexp1) || [];
// console.log(result);

// if(result.length > 0) {
//     console.log('Есть');
// }else {
//     console.log('Нет');
// }

//Флаги
//i игнорирует регистр
// g поиск ищет все совпадения, а без него только первое 
// let regexp = /code/gi
// let str = 'code, bad Code'
// let result = str.match(regexp);
// console.log(result);


//метод строки match() ищет и возвращает массив если не найдено, то NULL

// let str = 'Работайте братья, работайте'
// let regexp = new RegExp('работайте', 'gi')
// let result = str.match(regexp)
// console.log(result);

//Метод строки replace() ищет совпадение и заменяет их на то что мы укажем
// let str = 'Требуется Миддл разработчик'
// console.log(str);
// let regexp = /миддл/i
// let result = str.replace(regexp, 'Джуниор')
// console.log(result);


//Метод регулярного выражения test проверяет есть ли хоть одно совпадение, если да - то возвращает нам true, иначе false

// let str = 'We can'
// let regexp = /we/i
// let result = regexp.test(str);
// console.log(result);

//\d - цифра от 0 - 9, 
//\s - пробелы 
//\w  символ - буквы(буквы латинского алфавита), или _ 
//\В - не цифры - все кроме цифр от 0 до 9
//\S - Не пробел- все кроме пробела
//\W - символы, кроме букв латинского алфавита и _ , не цифра
//. - абсолютно любой символ

// let str = 'moding is easy'
// let regexp = /\w\w\w\w\w\w/
// let result = str.match(regexp)
// console.log(result);

//Якоря 
//^ - начало строки
//$ - конец строки

//  let time = '20:12'
//  let regexp = /^\d\d:\d\d$/
//  let result = regexp.test(time)
//  console.log(result);


// //Наборы []
// let str = 'mad';
// let str2 = 'sad';
// let regexp = /[ms]ad/;
// let result = str.match(regexp);
// console.log(result);

//Диапазон
// let str = '123456789'
// let regexp = /[1-9]/g;
// let result = str.match(regexp);
// console.log(result);

//[0-9]
//[a-z]
//[A-Z]
//[а-я]
//[А-Я]

//Исключение 
//let regexp = /[^aeiou]/ //все кроме этих букв

//Квантификаторы

// {n} количество
// let numbers = '12 555 9565 68451'
// // let regexp = /\d{3,4}/g
// let regexp = /\d+/
// + один или более символов
// let regexp = /\d?/ 
// let result = numbers.match(regexp)
// console.log(result);

// let string = 'color or colour'
// let regexp = /colou?r/g
// let result = string.match(regexp);
// console.log(result);

//Скобочные группы
//mail.ru
//mail.gmail.ru

// let string = 'mail.gmail.ergreg.ru'
// let regexp = /(\w+.).+/g;
// let result = string.match(regexp);
// console.log(result);

//подсчитать сколько глассных в строке при помощи Regexp
// let str = 'brown, black, blue, lightblue'
// let regexp = /[aoiue]/gi
// let result = str.match(regexp).length
// console.log(result);

// let str = 'They are 5 apples and 5 oranges'
// let regexp = /\d/g;
// let result = str.replace(regexp, 'pyat')
// console.log(result);

//Альтернация (или) '|'
// let str = 'I know Java, Python, Flutter, JavaScript, Dart, ergerg, ergerg ,ergfrg'
// let regexp = /Java(Script)?|Python|Flutter|Dart|JavaScript/g
// let result = str.match(regexp);
// console.log(result);

// let elevator = {
//     floor: 1,
//     minFloor: 1,
//     maxFloor: 16,
//     printFloor: function() {
//         console.log(`Вы находитесь на ${this.floor}    этаже`);
//     },
//     upOneFloor: function() {
//         if(this.floor < this.maxFloor){
//             this.floor++;
//             this.printFloor();
//         }else{
//             console.log(`Вы не можете подняться выше ${this.maxFloor} этажа`);
//         }
//     },
//     downOneFloor: function() {
//         if(this.floor > this.minFloor){
//             this.floor--;
//             this.printFloor();
//         }else{
//             console.log(`Вы не можете спуститься ниже ${this.minFloor} этажа`);
//         }
//     },
//     toFloor: function(num) {
//         if(num < this.minFloor || num > this.maxFloor){
//             console.log(`Такого этажа нет`);
//             return;
//         }
//         if(num > this.floor) {
//             while (this.floor !== num) {
//                 this.upOneFloor();
//             }
//         }else  if (num === this.floor) {
//             console.log(`Мы уже находимся на ${num} этаже`);
//         }else {
//             while (this.floor !== num) {
//                 this.downOneFloor();
//             }
//         }
//     }
// };

// elevator.toFloor(20)
// elevator.toFloor(5)
// elevator.toFloor(6)
// elevator.toFloor(10)
// elevator.toFloor(9)
// elevator.toFloor(1)





// let oneTwo = (num) => {
//     let count = 0;
//     // for(let i = num; i<num.lenght; i--){
//     //     if(num[i] % 2 === 0){
//     //         console.log('sedfw');
//     //         num[i] / 2
//     //         console.log('/2');
//     //     }else{
//     //         num[i] - 1
//     //         console.log('-1');
//     //     }
//     // }
// while (num > 0){
//     if(num % 2 === 0){
//         num /= 2;
//         count++
//     }else{
//         num-=1;
//         count++
//     }
//   }
//   return count;
// }
// console.log(oneTwo(20));




// let neW = 0;
// let fixSentence = (str, num) => {
//     // for(let i = 0; i<str.length; i++){
//       let arr = str.split(' ').splice(0, num).join(' ')
//       console.log(arr);
//     // }
// }
// fixSentence('Hello world This is makers', 4)

// function newArray(arr, num) {
//     let newArr = arr.splice(0, num)
//     for(let i = 0; i< num * 2; i+=2) {
//         newArr.splice(i + 1, 0, arr[i/2])
//     }
//     return newArr;
// }
// let nums = [1, 2, 3, 4, 4, 3, 2, 1]
// let n = 4;
// console.log(nums);
// console.log(newArray(nums, n));

// function binary (n, array = []) {
//     if (n == 0) {
//       return [...array, 'The end'];
//     }
//     var b, x;
//     for (var i = 0; i <= 10; i++) {
//       b = Math.pow(2, i);
//       if (b > n) {
//         var p = i - 1;
//         const newArray = [...array, `2 to the ${p} is on`];
//         x = Math.pow(2, i - 1);
//         n = n - x;
//         return binary(n, newArray);
//       }
//     }
//   }
//   console.log(binary(12));
//   console.log(binary(365));
// var abc = "asdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfdasdhfkahkjdfhkaksjdfhaksdfjhakjddfhkjahksdhfaiuyqewiuryiquweyriyqiuweyriuqiuweryiquweyriuqyweirukajsdhfkahdfjkhakjsdhfkahksdhfakhdjkfqwiueryqiueyriuasdkfjhakjhdfkjashfkajhsdfkjahsdkalsdjflkasjdfljqoiweurasldjflasfd";

// for ( var i = 0; i < 10; i++ ) {
//     abc += abc;  // making string even more larger
// }

// function reverse(s) { // using this method for second half of string to be embedded
//     return s.split("").reverse().join("");
// }

// abc += reverse(abc); // adding second half string to make string true palindrome



// Import stylesheets
import './style.css';

// Задачи на закрепление

// Задание №1
// Написать программу расчета площади и окружности круга по радиусу.
// Ввести радиус:
// Вывести площадь и окружность

// let radFunc = (rad) => {
//   console.log(3.14 * (rad * rad));
//   console.log(3.14 * (2 * rad));
// };
// radFunc(5);

// Задание №2
// Если содержимое переменной result больше 23 и меньше 40, выведите 'Hello',
// иначе выведите 'Goodbye'.
// let resFunc = (result) => {
//   result > 23 && result < 40 ? console.log('Hello') : console.log('Goodbye');
// };
// resFunc(25);
//=============================================
// Задание №3
// Сделайте 2-e задание используя условный (тернарный) оператор.
// let result = 25;
// result > 23 && result < 40 ? console.log('Hello') : console.log('Goodbye');
//==================================================================
// Задание №4
// Есть переменная seasons, если пользователь ввел цифру 1, то выведите
// сообщение 'зима', если 2-'весна', если 3-лето, 4-осень. Используйте Конструкцию
// 'Switch'

// let seasonsFunc = (seasons) => {
//   switch (seasons) {
//     case 1:
//       console.log('Зима');
//       break;
//     case 2:
//       console.log('Весна');
//       break;
//     case 3:
//       console.log('Лето');
//       break;
//     case 4:
//       console.log('Осень');
//       break;
//   }
// };
// let seasons = +prompt('Введите число от 1-4');
// seasonsFunc(seasons);
//===============================================================================
// Задание №5
// Используя цикл for вывести все четные числа от 1 до 100;
// for (let i = 1; i < 100; i++) {
//   i % 2 === 0 ? console.log(i) : null;
// }
//=================================================================
// Задание №6
// Напишите функцию которая возвращает массив из 4 функций;
// 	•	первая увеличивает счетчик( переменная i )  на 1
// 	•	вторая уменьшает на 1
// 	•	третья умножает на 2
// 	•	четвёртая делит на 2

// let funcSix = (arg) => {
//   let count = arg;
//   return [
//     function addFunc() {
//       count++;
//       return count;
//     },
//     function minusFunc() {
//       count--;
//       return count;
//     },
//     function umnojFunc() {
//       count *= 2;
//       return count;
//     },
//     function delFunc() {
//       count /= 2;
//       return count;
//     },
//   ];
// };
// let ffunc = funcSix(20);
// console.log(ffunc[0]());
// console.log(ffunc[1]());
// console.log(ffunc[2]());
// console.log(ffunc[3]());
//  **сделать задание при помощи замыкания!!
//=================================================================
//  * Задание №7
//  * Напишите функцию которая принимает число и
//  * возвращает его двоичный формат
//  * (Решать при помощи рекурсии)
//  * К примеру:
//  *    func(5) >> 101
//  *    func(6) >> 110
//  *    func(1234321) >> 100101101010110010001

// let func = (number) => {
//   return (number >>> 0).toString(2);
// };
// console.log(func(5));
// console.log(func(6));
// console.log(func(1234321));
//========================================================================
//  Задание №8
//  Дана строка; нужно написать функцию, которая позволяет
//  вернуть значение true, если строка является палиндромом,
//  и false — если нет. При этом нужно учитывать пробелы и
//  знаки препинания.
//  К примеру:
//  palindrom('tenet') === true
//  palindrom('nolan') === false
// let eight = (word) => {
//   if (word === word.split('').reverse().join('')) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// };
// eight('tenet');
// eight('nolan');

//=======================================================================
// Задание №9
// Нужно написать функцию, принимающую строку в качестве
// аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются 'a', 'e', 'i', 'o', 'u'.
// К примеру:
// vowel('hello') // --> 2
// vowel('why') // --> 0
// let nineFunc = (str) => {
//   let obj = {
//     a: 'a',
//     e: 'e',
//     i: 'i',
//     o: 'o',
//     u: 'u',
//   };
//   // let pattern = /[mm]/g;
//   // console.log(pattern.match(str.length));

//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     obj[str[i]] ? count++ : null;
//   }
//   return count;
// };
// console.log(nineFunc('hello'));
//=======================================================================
// Задание №10
// Напишите функцию которая принимает массив из чисел. Находит количество
// четных чисел в массиве и их сумму. И выведите их на экран.
// К примеру:
// let arr9 = [1, 2, 3, 4, 5, 6]
// `Четные числа в массиве: ${newArr} их сумма равна ${sum}`
// четные числа = [2, 4, 6]
// сумма четных чисел = 12
//
