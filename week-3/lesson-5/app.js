
// Задание №2
// Дан массив ['a','b','c']. Запишите в конец данного массива первый элемент столько раз, сколько элементов в массиве (длина).
// Подсказка: нужно использовать цикл for
// Пример ввода: ['a','b','c']
// Пример вывода: ['a','b','c','a','a','a']
// let arr = ['a','b','c']

// for(let i = 0; i < 3; i++){
//     arr.push(arr[0])
// }
// console.log(arr);



// Задание №3
// Дана строка "codingiseasy". Каждую четную по последовательности букву перезапишите верхним регистром.
// Подсказка: нужно использовать метод split().
// Пример ввода: "codingiseasy"
// Пример вывода: "cOdInGiSeAsY"

// let a = "codingiseasy"
// let newAr = [];
// for(let i = 0; i < a.length; i++){    

//     newAr.push(i % 2 !== 0 ? a[i].toUpperCase() : a[i]);    
// }
// console.log(newAr.join(''));


// Задание №4
// Даны массивы [11,7,4] и [22, 0, 8]. Создайте новый массив с произведениями каждых соответствующих по порядку элементов из двух заданных массивов.
// Пример ввода: [11,7,4] и [22, 0, 8]
// Пример вывода: [242, 0, 32]
// let arr = [11,7,4];
// let barr = [22, 0, 8];
// let a = []
// let sum = 0
// for(let i = 0; i<arr.length; i++ ){

// a.push( arr[i] * barr[i])
// }
// console.log(a);


// Задание №5
// Даны массивы ['Makers','Java','Full'] и ['KG', 'Script', 'Stack']Создайте новый массив, где каждое слово из первого массива слияется с соответствующим по порядку словом второго массива.
// Пример ввода: ['Makers','Java','Full'] и ['KG', 'Script', 'Stack']
// Пример вывода: ['MakersKG','JavaScript','FullStack']

// let arr =  ['Makers','Java','Full'] 
// let barr = ['KG', 'Script', 'Stack  ']

// let a = []
// for(let i = 0; i < arr.length; i++){

//     a.push(arr[i] + barr[i])
// }
// console.log(a);
//------------------------------------------------
// arrar = []
// number1 = +prompt('vvedite pervoe chislo')
// arrar.push(number1)
// console.log(number1);
// number2 = +prompt('vvedite vtoroe chislo')
// arrar.push(number2)
// console.log(number2);
// let sum = arrar[0] + arrar[1]
// alert(sum) 

// let age = +prompt('Your age?')
// if(age < 23 && age > 40){
//     alert('Hello')
// }else{
//     alert('goodbye')
// }
// let array = [{}]
// array.length > 0 ? console.log('Есть') : console.log('нет')
// !array.length ? console.log("Есть") : array.length > 10 ? console.log('Da'): console.log('Net');

// let num = 10
// num > 0 && num < 10 ? num > 5 ? alert('num>5') : alert('num menshe') : alert('false')

// if(num > 0 && num < 10){
//     if(num > 5){
//         alert('num>5')
//     }else{
//         alert('num<5')
//     }
// }else{
//     alert('false')
// }

// let seasons = +prompt('Vvedite chislo')
// switch(seasons){
//     case 1:
//     alert('Zima')
//     break
//     case 2: 
//     alert('leto')
//     break
//     case 3: 
//     alert('osen')
//     break
//     case 4:
//     alert('vesna')
    
// }

// let arr = [8,3,2,1,5,10,6,9]
// for(let i = 0; i <arr.length; i++){
//     console.log(arr[i]);
// }
// let sum = 0;
// for(let i of arr){
//     if(i % 2 === 0){
//         sum += i
//     }
// }
// console.log(sum);


// let obj = {
//     'Bishkek' : 'KG',
//     'Minsk' : 'Belarus',
//     'Moskva': 'Russia',
//     'Kiev' : 'Ukraine'
// }

// for (const key in obj) {
//     console.log(key + ' - это ' + obj[key])
// }
// let obj = {
//     title: 'Nike',
//     description: 'Lorem ipsum',
//     count: 10
// }
// for(let i in obj){
//     console.log(i, obj[i]);
// }

// let count = 0
// for(let i = 100; i< 500; i++){
//     if(i % 3 === 0){
//         count ++
//     }
// }
// console.log(count);


// let arr = ['arbuz', 'dynia', 'vishnia']
// // arr.push('klubnika')
// arr.splice(arr.length, 0, 'kskfkgkg')
// let newArr = arr.splice(1, 1)
// let newArr = arr.slice(1, 3)
// console.log(newArr);

// arr.unshift('10')
// console.log(arr);





// развернутый ответ
// for(let i = 0; i < arr.length; i++){
// //     if(arr[i] === 'dynia'){
// //         arr.splice(i + 1, 0, 'CHETO')
// //     }
// // }

//         let str = arr[i]; // записываем слово в переменную str
//         let strArr = str.split('') //берем наше слово и делаем из него массив деля на каждую букву
//         let letter = strArr[0].toUpperCase() // берем массив и преобразовываем первый элемент массива на верхний регистр

//         // console.log(strArr);
//         strArr.splice(0, 1, letter) // заменяем первый элемент массива на новую букву которая на верхнем регистре
//         let newStr = strArr.join('') // переводим наш массив в строку 
//         console.log(newStr);
//         arr.splice(i, 1, newStr) // заменяем старое слово на новую 
//         // console.log(letter);
//         // console.log(strArr);
//     }
// console.log(arr);



// // короткий ответ
// for(let i = 0; i < arr.length; i++){
//     // let str = arr[i]
//     // str = str[0].toUpperCase() + str.slice(1)
//     // arr.splice(i,1,str)
//     // console.log(str);
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
// }
// console.log(arr);

// let arr = [43,3,22,33,44,23,4]
// arr.sort((a, b) => b - a);
// console.log(arr);

// Задание №2
// Напишите программу, которая находит два элемента в массиве, сумма которых равна
// заданному числу n, код должен возвращать индексы найденных элементов.
// Пример: дан массив numbers= [10,20,10,40,50,60,70], n=50
// Вывод: 2, 3
// т.к 10 + 40(под индексами 2 и 3) = 50
// Почитать про метод map()
// let numbers= [10,20,10,40,50,60,70]
// let n = 50

// let 
//

// Задание №3
// Напишите код который соединяет два массива и убирает дубликаты в новом массиве.
// Пример:
// Ввод:
// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];
// let array3 = array1.concat(array2)

// for(let i = 0; i < array3.length; i++){
//     for(let j = 0; j < array3.length; j++){
//         if(j === i){
//             continue
//         }
//         if(array3[i] === array3[j]){
//         array3.splice(j,1)
//         j--
//         }
//     }
// }
// console.log(array3);

// for(let i = 0; i < array1.length; i++){
//     array3.push(array1[i]  array2[i])
// }
// console.log(array3);




// Задание №4
// Напишите генератор массивов. Вы получаете два значения start, len. Ваш код должен выдавать массив всех чисел от start в количестве len.
// Например:
// let start = 4
// let len = 4

// let arr = []
// for(let i = 0; i < len; i++){
//     arr5.push(++start)
// }
// console.log(arr);


// Задание №5
// Напишите код который проверяет является ли год високосным или нет.
// Високосные года делятся нацело на 4. Однако из этого правила есть исключение: столетия, которые не делятся нацело на 400, високосными не являются.
// В високосном годе 366 дней, в обычном 365.

// let y = 2020
// let b = true
// if(y % 4 === 0 ){
//     b = false
//     if((y % 100 === 0) && y % 400 !==0){
//         b = true
//     }
// }if(b){
//     console.log('невисокосный год');
// }else{
//     console.log('Високосный год');
// }
//-------------------------------------------------------------------------------
// Вам даны две строки. Напишите код который проверяет, являются ли эти строки анаграммами(состоящими из одних и тех же букв) - например строки "кабан" и "банка" являются анаграммами. Используйте методы sort() и join()


//kaban banka
// let k = 'kaban'
// let b = 'banka'
// let bool = false
// let kk = k.split('').sort()
// let bb = b.split('').sort()

// for(let i = 0; i<kk.length; i++){
//     if(kk[i] === bb[i]){
//         bool = true
//         break;
//     }

// }
// if(bool){
//     console.log('Анаграммы');
// }else{
//     console.log('Не анаграммы');
// }


// console.log(kk);
// console.log(bb);

// Задание №10
// Представьте, что вы крупный программист для платформы социальных сетей! Вам было поручено создать прототип программы взаимных подписчиков. Вам понадобятся два массива «друзей» от двух фиктивных пользователей, чтобы вы могли извлечь имена подписчиков, которые существуют в обоих списках. Создайте переменную с именем bobsFollowers  которая равна массиву с четырьмя строками, представляющими имена друзей Боба.

// Создайте переменную с именем tinasFollowers и установите ее равной массиву из трех строк, представляющих имена друзей Тины. Сделайте ровно две из них такими же, как два друга в массиве bobsFollowers.

// Создайте третью переменную с именем mutualFollowers и задайте для нее пустой массив. Напишите вложенный цикл который проходится по всем друзьям Боба и Тины и находит общих друзей, которых нужно записать в массив mutualFollowers.

// let tinasFollowers  = ['Bob', 'Jhon', 'Alice']
// let bobsFollowers  = ['Nebob', 'Jhon', 'Alice']
// let mutualFollowers  = []


// for(let i = 0; i < tinasFollowers.length; i++){
//     for(let j = 0; j < bobsFollowers.length; j++){
//         if(tinasFollowers[i] === bobsFollowers[j]){
//             mutualFollowers.push(tinasFollowers[i])
//         }
//     }
// }
// console.log(mutualFollowers);




// Задание №1
// Запросите у пользователя число с помощью prompt.
// Если содержимое переменной result больше 23 и меньше 40, выведите
// пользователю ответ ‘Hello’, иначе выведите ‘Goodbye’.
// let vop = +prompt('Vvedite chislo')
// let result = 0;
// if(result > 23 && result < 40){
//     console.log('Hello');
// }else{
//     console.log('Goodbye');
// }

// Задание №2
// Запросите у пользователя число с помощью prompt.
// Если пользователь ввел цифру 1, то выведите сообщение ‘зима’, если 2-’весна’,
// если 3-лето, 4-осень. Используйте Конструкцию ‘Switch’.
// let seasons = +prompt(‘Введите число от 1-4’)
// Пример ввода: 1
// Вывод: 'зима'

// let prom = +prompt('Vvedite chislo')

// switch(prom){
//     case 1 : console.log('зима');break;
//     case 2 : console.log('весна');break;
//     case 3 : console.log('лето');break;
//     case 4 : console.log('осень');break;

// }
// / Задание №3
// Найти максимальное число из трех.
// Пользователь должен вводить числа поочерёдно через prompt.
// Используя конструкцию if..else, напишите код, который должен определять, какое из введенных чисел является наибольшим.
// let prom = +prompt('Vvedite chislo')
// let prom2 = +prompt('Vvedite vtoroe chislo')
// let prom3 = +prompt('Vvedite tretye chislo')


// if(prom > prom2 && prom > prom3){
//     console.log(prom)
// }else if(prom2 > prom && prom2 > prom3){
// console.log(prom2)
// }else if(prom3 > prom && prom3 > prom2){
//     console.log(prom3)
// }
// let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]  
// for (let i =0; i < 5; i++){
//     console.log(i)
// }

// let b = a[0]
// let c = b.toUpperCase()
// let d = c + a.slice(1)
// console.log(d);


let a = "эй, КАк дела?";
a[0].toUpperCase() + a.slice(1).toLowerCase();
console.log(a);