//Методы массивов 
//push, pop, shift, unshift

// let arr = [1,2,3];
// arr.push(4);         //добавляет в конец
// console.log(arr);
// let n = arr.pop();   //вырезает элемент с конца
// console.log(n);
// console.log(arr);

//------
// let arr = ['Kyrgysztan', 'Uzbekistan', 'Russia']
// arr.unshift('China')  //unshift добавляет элемент к началу
// console.log(arr);
// let country = arr.shift()  //shift вырезает один элемент с начала
// console.log(country);
// console.log(arr);

//splice slice
// let nums = [22,34,6,2,12,50]
// let a = nums.splice(0, 2, '1')
// console.log(a);
// console.log(nums);

//массив.splice('с какого начать, сколько вырезать, что вставить')
// let arr = [100,23,64,7,10]
// let num = arr.slice(1,2)
// console.log(arr);
// console.log(num);
//массив.slice(с какого начать, по какой не вклютельно)

//reverse()
// let arr = [1,2,3,4,5,6]
// // arr.reverse()
// let j = arr.join(' sdvde ') // из массива делает строку
// console.log(j);
// console.log(arr);
// let nA = j.split('')//из сторки делает массив
// console.log(nA);

//sort
// let nums = [2,5,6,734,234,45,78,3]
// nume = nums.sort((a,b) => a - blur

// )
// console.log(num0

// let res = [1,2,3,4,5,6]
// let res2 = [7,8,9,10]

// let result = res2.concat(res, ('erg0','wr'))
// console.log(result);

// let myArray = ['Ryu', 'Ken', 'dgeerg']
// for(let i = 0; i < myArray.length; i++){
//     myArray.splice(i, 1, [myArray[i], i])

    
// }
// console.log(myArray);


// let mix = [
//     {
//         role: 'user'
//     },
//     {
//         role:'admin'
//     },
//     {
//         role: 'admin'
//     },
//     {
//         role: 'admin'
//     },
//     {
//         role: 'user'
//     },
//     {
//         role: 'user'
//     }
// ]
// let admins = [];
// let users = []
// for(let i = 0; i < mix.length; i++){
//     if(mix[i].role === 'admin'){
//         admins.push(mix[i])
//     }else if(mix[i].role === 'user'){
//         users.push(mix[i])
//     }
// }
// console.log(admins);
// console.log(users);

// let products = [
//     {
//         size: 's'
//     },
//     {
//         size: 's'
//     },
//     {
//         size: 's'
//     },
//     {
//         size: 's'
//     },
//     {
//         size: 'm'
//     },
//     {
//         size: 'm'
//     },
//     {
//         size: 'l'
//     },
//     {
//         size: 'l'
//     },
//     {
//         size: 'l'
//     },
//     {
//         size: 'l'
//     },
// ]
// let lSize = [];
// let mSize = [];
// let sSize = [];
// console.log(products);
// for(let i = 0; i < products.length; i++){
//     // console.log(products[i], i);
//     if(products[i].size === 's'){
//         sSize.push(products[i])
//     }else if(products[i].size === 'm'){
//         mSize.push(products[i])
//     }else{
//         lSize.push(products[i])
//     }
// }
// console.log(lSize);
// console.log(mSize);
// console.log(sSize);

// let str = 'hello everybody'
// function capLetters_1 ( value ) {

// let line = value.toLowerCase().split(' ');
// for ( let i = 0; i < line.length; i += 1 ) {
//     line[i] = line[i].slice( 0, 1 ).toUpperCase() + line[i].slice( 1 );
// }
// return line.join(' ');
// }


// Простые методы массивов. Экстра задания

// Задание №1
// Напишите программу, котоая переписывает первые буквы слов верхним регистром.
// Пример ввода: ["programming","code","javascript","react"]
// Пример вывода: ["Programming","Code","Javascript","React"]

// let arr1 = ["programming","code","javascript","react"]


// function checkTask(arr){
//     let newArr = [];
//     for (let i in arr) {
//       newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
//     }
//     console.log(newArr);    
// }
// console.log(arr1);

// const str2 = arr.toUpperCase();
// console.log(str2);

// const str = 'i have learned something new today';

// //split the above string into an array of strings 
// //whenever a blank space is encountered

// const arr = str.split(" ");

// //loop through each element of the array and capitalize the first letter.


// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

// }

// //Join all the elements of the array back into a string 
// //using a blankspace as a separator 
// const str2 = arr.join(" ");
// console.log(str2);

//Outptut: I Have Learned Something New Today