// Import stylesheets
// import './style.css';

// Check Yourself! Week 3.

// Группа С =========================================================

// Задание №1
// Четное или нечетное число. Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос: «Введите число». Если пользователь вводит четное число, то вывести «"Число " + num + " четное"», если нечетное: "Число " + num + " нечетное".

// let num = +prompt('Введите число?')
// if(num % 2 === 0){
//     alert(`Число ${num} четное`)
// }else{
//     alert(`Число ${num} нечетное`)
// }
//-----------------------------------------------------------------------------------------
// Задание №2
// При помощи цикла for выведите чётные числа от 2 до 20.
// for(let i = 2; i < 20; i++){
//     console.log(i);
// }

//-------------------------------------------------------------------------------------------
// Задание №3
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент при помощи метода массива.
// let arr = ['js', 'css', 'jq']

// console.log(arr.shift(0));

// Группа B и А =====================================================

// Задание №1
// Напишите код, который предлагает пользователю ввести целое число. Нужно вывести на экран сколько в этом числе цифр, т.е. введенное число это однозначное, двузначное или трехзначное и тд. А также положительное оно или отрицательное.
// Например, "Число " + num + " однозначное положительное". Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.
// let a = +prompt('Введите целое число')
//     if(a > 0 && a < 10){
//         console.log(`Число ${a} однозначное`);
//     }else if(a > 9 && a < 100){
//         console.log(`Число ${a} двузначное`);
//     }else if(a > 99 && a < 1000){
//         console.log(` Число ${a} трехзначное`);
//     }



// ----------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------
// Задание №2
// Дан массив ["Apple", "Orange", "Banana", Pineapple, "Cherry"]. Вывести в консоль самое длинное слово из массива и упорядочить массив по убыванию (по количеству символов).
// let arr = ["Apple", "Orange", "Banana", "Pineapple", "Cherry"]

// for(let i = 0; i < arr.length; i++){
//     arr.sort((a, b) => b.length  - a.length)
// }
// console.log(arr);



//--------------------------------------------------------------------------
// Задание №3
// Создайте массив из чисел, затем пройдитесь по элементам массива и сложите все числа. Результат выведите в консоль.
// Пример: [1, 2, 3, 4, 5]
// Вывод: 15

// let arr = [1,2,3,4,5]
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]

// }
// console.log(sum);
//-------------------------------------------------------------------------------------------------------------------

// Задание №4
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5]
// let arr2 = arr.splice(1, 3)
// console.log(arr2);
//----------------------------------------------------------------------------------------------------------------
// Задание №5
// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

// #
// ##
// ###
// ####
// #####
// ######
// #######


// let a = '#'
// while(a.length < 7){
    
//     console.log(a + '\n');
//     a += '#'
// }

// Группа A =========================================================

// Задание №6
// Дан массив ["Life", "is", "hard"]. С помощью метода splice замените слово "hard" на "good".
// let arr = ["Life", "is", "hard"]
// let arr2 = arr.splice(2,2,'good')
// console.log(arr);

//-----------------------------------------------------------------------------------------------------------------------
// Задание №7
// Используя методы splice и push напишите программу, котоая переставляет первый элемент массива в конец того же массива.
// Пример ввода: ["один","два","три","четыре"]
// Пример вывода: ["два","три","четыре","один"]

// let arr = ["один","два","три","четыре"]
// let arr2 = []
// arr2 = arr.splice(0, 1) + arr.push('один')
// arr2 = arr.splice(push())
// console.log(arr);


// function p(a,b){
//     return a *b
// }
// let result = p(5, 6)
// console.log(result);






// const showMessage = function(message){
//     console.log(message);
// }
// showMessage('heeloo')

//hoisting




// const calcMultiply = function(a,b){
//     return a * b
// }
// console.log(calcMultiply(5,5))


// функции, области видимости, хойстинг
// 1)function declaration
//2)function expression
//3)arrow function


// function func(){
//     console.log('Hi');
// }
// func()

// function sayHello(){
//     alert('hello')
// }
// sayHello()

// //объявляем функцию, 
// function имя(параметры){
//   body
// }
// //вызов функции
// имя()

// function sumTwoNumbers(a,b){
//     // let result = a + b;
//     // return result;
//     return  a + b
// }
// // let sum = sumTwoNumbers(10,30);
// console.log(sumTwoNumbers(10, 32));



// function firstElem(arr =[]?){
//     let elem = arr.shift();
//     return elem
// }
// let array = [true, 1,2,3,4,5]

//  let result = firstEtlem(ar?ray)
// // console.log(result)
// function mulTWO(arg1, arg2){
//     console.log(arg1 +arg2);
//     console.log(arg1 +arg2);

// function showMessage)


// let arr= ['str'];
// function array(arr){
    
//     console.log(arr);
// }
// array(arr);

// let n = [100,200,300]
// function lestE(array){
//     let laste = array.pop()
//     console.log(laste);
// }
// lestE(n);
// let boolValue = [true, false, true]
// lestE(boolValue)

//function expression
// let sayHello = function(arg){
//     console.log(arg);
// }
// sayHello('hello')

// let obj = {                                                                                                                                                                                                                                   
//     title: 'Makers',

// };
// function showTitle(arg1){
//     console.log(arg1.title);
//     document.write(`<h1>${arg1.title}</h1>`)
// }
// showTitle(obj)
// let school = {
//     title: 'gazprom'
// };
// showTitle(school)
// let num1= 50

// function func(){
//     let num = 20;
//     console.log(num);
// }
// func()
// console.log(num1);
//тело функции это локальная область видимости

//таски
// function pow(x, n){
//     return x ** n
// }
// let result = pow(2,2)
// console.log(result);

// function datet(num){
//     switch(num){
//         case 1: return 'Понедельник' 
//         case 2: return 'Вторник' 
//         case 3:  return 'Среда' 
//         case 4:  return 'Четверг' 
//         case 5:  return 'Пятница' 
//         case 6:  return 'Суббота' 
//         case 7:  return 'Воскресенье' 
//     }
// }
// console.log(datet(5));


// function func(num1,num2){
//     let sum = 0;
//     sum = (num1 + num1) * 3
//     if(num1 === num2){
//         return sum
//     }else{
//         return num1 + num2
//     }
// }
// console.log(func(5,1));

// let arr = ['Mak', 'Vlad', 'Sanjar', 'Aidar', 'Adelina']
// function func(arr, name){
//     // console.log(arr, name);
//     for(let i = 0; i < arr.length; i++){
//         let check = arr[i]
//         // console.log(check);
//         if(check === name){
//             return 'Da'
//         }
//     }
//     return 'Net'
// }
// console.log(func(arr, 'vlad'));



// let n = ['ergr','ewrg','ewrgerge','wergewrgwerg','wfqefqwfqefqerfrfqerfeq']






// Import stylesheets
// import './style.css';

// Функции и области видимости. Домашняя работа

// Группа С =======================================================
// Задание №1
// Создайте функцию которая выводит в
// консоль “Hello World!”
// function hello(){
// console.log('Hello World')
// }
// hello()
//--------------------------------------------------------
// Задание №2
// Напишите функцию hello(), которая при
// вызове будет возвращать строку:
// "Привет, JavaScript!"
// function hello(){
// console.log('Привет, JavaScript')
// }
// hello()
//--------------------------------------------------------
// Задание №3
// Создайте функцию которая принимает в качестве
// аргумента два числа и возвращает их сумму.
// function sum(a, b){
// console.log(a+b)
// }
// sum(5,5)
//--------------------------------------------------------

// Задание №4
// Напишите функцию, которая в качестве аргумента принимает
// число - возраст. Если возраст больше 18 выведите в
// консоль “Добро пожаловать”, иначе “Вход запрещен”

// Пример:
// console.log(func(18));
//  >>“Добро пожаловать”
// console.log(func(17));
//  >>“Вход запрещен”
// function func(num) {
//   if (num > 18) {
//     console.log('Добро пожаловать');
//   } else {
//     console.log('Вход запрещен');
//   }
// }

// func(19);
// func(17);

//--------------------------------------------------------

// Задание №5
// Напишите функцию, которая принимает целое число и возвращает сумму всех его цифр.
// Например: ввод 456, функция должна вернуть число 15, так как 4 + 5 + 6 = 15
// function getSum(num) {
//     let sum = 0;
//     let str = String(num);
//     for(let i = 0; i < str.length; i++){
//         sum += Number(str[i]);
//     }
//     return sum;
    
//   }
//   let num=+prompt("Введите число");
//   console.log(getSum(num));
//
//
// Группа B =======================================================

// Задание №6
// Напишите функцию которая принимает
// массив с названиями стран и возвращает
// страну с самым длинным названием,
// затем напишите вторую функцию которая возвращает
// страну с самым коротким названием.

// Например:
// //
// // Вернет строку 'Финляндия'
// // funcShortest(countries)
// // Вернет строку 'Лаос'
// function func(funcLongest, funcShortest){
//     let countries = ['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика']
// function funcLongest(countries) {
//   countries.sort((a, b) => b.length - a.length);
//   return countries[0];
// }

// function funcShortest(countries) {
//   countries.sort((a, b) => a.length - b.length);
//   return countries[0];
// }
// console.log(funcLongest(countries));
// console.log(funcShortest(countries));
//========================================================================
// Задание №7
// Напишите функцию которая принимает два аргумента, строку и букву.
// Функция должна возвращать число повторений переданной буквы в строке.
// Например:
// func('hello', 'l')
// Вернет число 2, т.к в слове 'hello' две буквы 'l'
//function func(str, letter){
//
//}
//============================================================
// Задание №8
// Напишите функцию которая принимает число и возвращает его факториал.
// Факториал числа - это умножение всех порядковых чисел от 1 до самого числа:
// Пример:
// 5! = 1*2*3*4*5 // ответ 120
// 6! = 1*2*3*4*5*6 // ответ 720
// function func(num1){
//  for(let i = 1; i< num1.length; i++){
//     num1 = 1 * num1
// }
// }
// console.log(func, 5);
//===================================================================
// Задание №9
// Напишите функцию, которая принимает два аргумента x и y, затем возвращает
// массив из чисел в диапазоне от x до y.
// Например:
// funс(1, 5)
// Вывод должен быть - [1, 2, 3, 4, 5]

//======================================================================

// Задание №10
// Напишите функцию, которая будет принимать строку и проверять является ли
// она палиндромом. Пробелы и регистр учитывать не нужно.
// > Палиндро́м, пе́ревертень — число, буквосочетание, слово или текст, одинаково
// читающееся в обоих направлениях. Например, число 101; слова "кок", "топот",
// "комок" и т.д.

// Группа A =======================================================

// Задание №11
// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL'
//======================================================================

// Задача №12
// Напишите функцию которая принимает интервал в виде двух четырехзначных чисел,
// например 2000 и 3001 и выдает список всех чисел, в заданном интервале, состоящих из
// четных цифер, например:
// ['2000', '2002', '2004', '2006', '2008', '2020', '2022', '2024', '2026' ... ]
//======================================================================
// Задание №13
// Напишите функцию-генератор паролей. Пароль должен быть из 8 случайных символов,
// состоять из строчных и заглавных букв, а также цифр.
// Пример выводы функции - jXfPEUlt
// Дополнительное условие: написать функцию как можно короче.
// Подсказка: погуглить и использовать модуль Math.random()
//======================================================================

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



//======================================================================

// Задание №15
// Рафаель и Новак играют дружеский теннисный матч. Игроки сыграли три сета, очки за сеты каждый
// из игроков получил в виде списка с числами, например:  Рафаель [1, 0, 3], Новак [2, 2, 1].
// Напишите функцию которая поможет судье выявить победителя игры, за каждый выигранный сет игроку
// насчитывается один балл, например 1 < 2 Новак получает 1 балл за первый сет, 0 < 2 - еще один
// за второй сет и 3 > 1 - балл получает Рафаель, в итоге Новак выигрывает игру со счетом 2:1.
// Подсказка: для одного из вариантов решения погуглить про встроенную функцию map()






// function checkSum(){
//     let a = +prompt('Pervoe chislo')
//     let b = +prompt('Vtoroe chislo')
//     let sum = a + b
//         if(sum === 15){
//             alert('summa ravna 15')
//         }else if(sum > 15){
//             alert('summa bolshe 15')
//         }else{
//             alert('summa menshe 15')
//         }
// }
// checkSum()

// function someFunc(){
//     console.log('hello world');
// }

// let newFunc = someFunc()
// console.log(newFunc);

// function calcSum(a,b){
//     return a +b
// }
// console.log(calcSum(2,7));

// function func(a,b,c,d,e){
//     let arr = [...arguments]
//     for(i of arr){
//         console.log(i);
//     }
// }
// func('hello', [], 51, {}, false)


// function hello(name = 'Гость'){
//     console.log(`hello ${name}`);
// }
// hello(prompt('Vashe imya'))

// function rgb(a =0,b=0,c=0){
//     console.log(`rgb (${a}, ${b}, ${c})`);
// }
// rgb(23,45,45)

// function example(arg1, arg2, arg3){
// //     let sum = (arg1 * arg2) - arg3
// //     console.log(sum);
// return arg1 * arg2 - arg3
// }

// console.log(example(5, 5, 1))

//Замыкание и рекурсия