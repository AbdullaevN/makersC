// //замыкание 
// //через глобоальную переменную 
// let count = 0;
// function counter(){
//     count++
//     console.log(count);
// }
// counter()
// counter()
// counter()
// console.log(counter());

// function counter(){
//     let count = 0;
//     count++
//     console.log(count);
// }
// counter()
// counter()
// console.log(counter());

// function counter(){
//     let count = 0;
//     return function(){
//         count++
//         return count
//     }

// }
// let first = counter()
// // console.log(firs t)
// first()
// first()
// first()
// first()
// console.log(first());

// let second = counter()
// second()
// second()
// console.log(second());

// let third = counter()
// third()
// console.log(third());

//рекурсия

// let x = 0;
// function rec(){
//     if(x <= 10){
//         console.log(x++);
//         rec()
//     }
// }
// rec()

// let arrNums = [1,2,3,4]
// function rec(arr, sum){
//     sum += arr.shift();
//     if(arr.length != 0){
//         sum = rec(arr,sum)
//     }
//     return sum
// }
// console.log(rec(arrNums, 0));


// Замыкание и рекурсия. Домашняя работа.

// Группа C ====================================================

// Задание №1
// Дано число 5, выведите все числа от 5 до 1 используя рекурсию.

// Вывод в консоль:
// 5
// 4
// 3
// 2
// 1
// let n = 5;
// function func() {
//   if (n !== 0) {
//     console.log(n--);
//     func();
//   }
// }
// func();

// Задание №2
// Напишите функцию, которая перебирает массив arr через рекурсию и выводит каждый элемент в консоль.
// function func(arr){
//     arr = ['hello', 25, true, {}]
//     for(i of arr){
//         console.log(i);
//     }
// }
// func()

// Вывод в консоль:
// hello
// 25
// true
// {}

//====================================================================

// Задание №3
// Напишите функцию которая принимает число и возвращает его факториал используя рекурсию.
// Факториал числа - это умножение всех порядковых чисел от 1 до самого числа:
// 5! = 1*2*3*4*5 =120
// 6! = 1*2*3*4*5*6 = 720

// Вызов функции: recFactorial(5)
// Вывод в консоль:
// 120
// function fact(num){
//         return num === 1 ? num : num * fact(num - 1)
// }
// console.log(fact(5));
//=================================
// Задание №4
// Создайте функцию-замыкание, которая возвращает анонимную функцию и высчитывает сумму аргументов возвращаемой функции с аргументом главной функции, то есть нужно посчитать сумму аргументов родительской функции и дочерней функции.

// function foo(a) {
//   //Допишите ф-ю

//   return function(b){
//           console.log(a + b);
//   }
// }
// let foo1 = foo(4,5)
// console.log(foo1);
// foo1()


// let count = 0; 
// function counter(n) { 
//   return function (num) { 
//     return n + num; 
//   }; 
// } 
// // let countNum = counter(11); 
// console.log(counter(3)(5));



// function exampleFive(n) { 
//   return function (num) { 
//     return n + num; 
//   }; 
// } 
// console.log(exampleFive(15)(4));
//=====================================================
// Задание №5
// Создайте функцию, которая считает и выводит количество своих вызовов. (решите с помощью замыкания)

// Пример

// func(); //Первый вызов выведет 1
// func(); //Второй вызов выведет 2
// func(); //Третий вызов выведет 3
// func(); //Четвертый вызов выведет 4


// function exampleSix(){
//         let count = 0
//         return function(){
//                 count++;
//                 return count
//         }
// }
// let count1 = exampleSix()
// console.log(count1());
// console.log(count1());
// console.log(count1());
// console.log(count1());
// console.log(count1());

//==============================================================
// Задание №6
// Дана последовательность натуральных чисел от 0 до N. Напишите код, который запрашивает число N и выводит все нечетные числа из этой последовательности, сохраняя их порядок.

// function exampleSix(n) { 
//   if (n <= 0) return 0; 
//   if (n % 2 === 1) { 
//     console.log(n); 
//     exampleSix(n - 1); 
//   } else { 
//     exampleSix(n - 1); 
//   } 
// } 
// exampleSix(50); 









// Группа B ====================================================

// Задание №7

// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50
// function exampleSeven(num) {
//         if(num <= 1000) {
//                 // console.log(num);
//                 exampleSeven(num + num)
//                 console.log(num);
//                 return
//         }
// }
// exampleSeven(50)

//=========================================================

// Задание №8
// Сократить слово до нуля через рекурсию (используйте метод substr())

// function exampleEigth(str) {
//         console.log(str);
//         if (str.length === 0) {
//           return;
//         }
//         exampleEigth(str.substr(1));
// }
// exampleEigth('hello')
// Задание №9
// Сделать реверс слова через рекурсию (используйте методы substr() и charat())
// function exampleEigth(str) {
//   console.log(str);
//   if (str.length === 0) {
//     return;
//   }
//   exampleEigth(str.);
// }
// exampleEigth('hello')
// Задание №10

// Напишите функцию с замыканием, которая принимает в родительской функции, в аргументы - Имя и Фамилию, а в дочерней объединяет их и передает обратно в родительскую, а также затем выводит в консоль "Hello *Имя *Фамилия"
// Например:
// Ввод: sayHi("John", "Doe")
// Вывод: "Hi John Doe"
function exampleTen(name, lastName) {
  
  let sayHi = 'hi'
  return function(sayHi) {
    console.log(sayHi(name, lastName))
  }
}
let a = exampleTen()
console.log(a('ewrger','ewrgewr'));

// Группа А ====================================================

// Задание №11

// Напишите функцию, которая будет высчитывать сумму квадратов заданных чисел (некоторые могут лежать во вложенных массивах) (используйте рекурсию)
// Пример:

// let arr = [1,2,3];
// console.log(sumSquare(l)); // 1 + 4 + 9 = 14

// arr = [[1,2],3];
// console.log(sumSquare(l)); // 1 + 4 + 9 = 14

// arr = [[[[[[[[[1]]]]]]]]]
// console.log(sumSquare(l)); // 1 = 1

// arr = [10,[[10],10],[10]]
// console.log(sumSquare(l)); // 100 + 100 + 100 + 100 = 400

// Задание №12
// Напишите функцию, которая возвращает количество цифр, встречающихся в многоуровневом массиве (используйте рекурсию)

// Пример:

// Ввод: let count = countNumbers([[[5], 3], 0, 2, ['test'], [], [4, [5, 6]]])
// Вывод: 7

// Задание №13
// Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и false – если не совпадает.

// Задание №14
// Создайте функцию, вызов которой вернёт числа в промежутке между X и Y.

// Ввод : interval(5, 10)
// Вывод : [6, 7, 8, 9]

// Задание №15
// Напишите функцию, принимающую в себя 2 аргумента - первый основание, а второй показатель степени. Функция должна выводить в консоль результат

// Например:
// Ввод: pow(2, 4)
// Вывод: 16





// function fib(num){
//     if(num > 1){
//         return fib(num - 1) + fib(num - 2)
//     }else{
//         return num
//     }
// }


// function fib(num){
//     return num > 1 ? fib(num-1) + fib(num - 2) : num
// }
// console.log(fib(3));


// let count = 0
// function ww(word, letter){
//         for(let i = 0; i<word.length; i++){
//             if(word[i] === letter){
//                 count ++
//                 // console.log(word[i]);
//             }
//         }
//         return count
//     }
// console.log(ww('hello', 'l'))

// Задание №14
// Вы используете приложение для построения маршрутов,
// приложение отправляет вам маршрут для прогулки в виде строки:
// (например, 'сюзв' - север, юг, запад и восток соответственно).
// Вы всегда проходите только один квартал для каждого направления, и тратите ровно одну минуту
// для пересечения одного городского квартала.
// Напишите функцию, которая вернет true, если прогулка, которую дает вам приложение,
// займет у вас ровно десять минут с учетом того, что вы также должны успеть вернутся
// в исходную точку. В противном случае программа должна вернуть false.
// Например:
// Ввод 'сювзсю'(север, юг. восток, запад, север, юг) должен возвратить false,
// т.к, во-первых прогулка короче 10 минут, данный маршрут займет 6 минут,
// во-вторых вы не возвратитесь в исходную точку.
// В свою очередь 'сюсюсюсюсю' возвратит true


// function checkDirect(arg){
//     let sideX = 0;
//     let sideY = 0;
//     for(let i = 0; i< arg.length; i++){
//         switch(arg[i]){
//             case 'с': sideX++; break;
//             case 'ю': sideX--; break;
//             case 'з': sideY++; break;
//             case 'в': sideY--; break;
//             default: console.log('Не правильно');
//         }
//     }
//     console.log(sideX);
//     console.log(sideY);
//     return sideX === 0 && sideY === 0 ? true : false;
// }
// console.log(checkDirect('сюсюсюсюсю'));











//урок
//замыкание
// function init(){
//     let name = 'Adil'
//     return function(){
//         console.log(name);
//     }
// }

// // console.log(init());
// let showName = init()
// showName()
// console.log(showName);

// function words(arg1){
//     return function(arg2){
//         console.log(arg1, arg2);
//     }
// }
// let hello = words('kkk')
// hello('world')

// function sum(num1){
//     console.log(num1);
//     return function(num2){
//         console.log(num1 + num2);
//     };
// };

// let sum10 = sum(10);
// sum10(20)
// sum(20)
// sum(20)(40)

//Замыкание - это, когда дочерняя функция замкнута на лексическом окружении подительской функции

//Рекурсия 
// let result = 0;
// function func(num){
//     for(let i = num; i >= 1; i--){
//         result += i;
//     }
// }
// func(5)
// console.log(result)


// function func(num){
//     if(num <= 1) return num // точка выхода 
//     return num + func(num - 1) // функция вызывает саму себя

// }
// let result = func(5)
// console.log(result);

// let arr = [4,2,45,6,1,-1,1,1,345,1,1,1,1,1]
// function finder(arr){
//     if(arr.length < 1) return 0
//     let currentNum = arr.splice(0,1)
//     console.log(arr);
//     return currentNum[0] === 1 ? 1 + finder(arr) : finder(arr)
// }

// let coun = finder(arr)
// console.log(coun);
// let arr = [true, 7,  2, 'hello']
// function func(arr){
//     if(arr.length < 1) return 0;
//     let sum = arr.splice(0, 1);
//     return typeof sum[0] === 'number' ? sum[0] + func(arr) : func(arr)
// }
// let result = func([true, 7, 2, ' hello ']);
// console.log(result);

// function func(arr){
//     if(arr.length < 1) return 0
//     let sum = arr.splice(0, 1)
//     if(typeof (sum[0]) === 'number'){
//         return sum[0] += func(arr)
//     }else{
//         return func(arr)
//     }
// }

// console.log(func([true, 9, 2, 'dfgdsfg']));
