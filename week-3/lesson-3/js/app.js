// // for , while, do ..while, for..in, for..of

// //for 
// // let arr = [1, 2, 3, 4, 5]
// // // for(period ){action}
// // for(let i = 0; i < arr.length; i++){
// //     console.log(arr[i] * 2);
// // }   

// // let data = ['Kuba', 'Kani', 'Mani', 'Chani']
// // for(let i=0; i < data.length; i++){
// //     if(data[i] === 'Kuba'){
// //         console.log(`${data[i]} not invited`);
// //         // continue
    
// //     }
// //     console.log(`${data[i]} you're invited `)
    
// // }

// //while
// // let i = 10
// // while(i < 10){
// //     console.log(i)
// //     i++
// // }

// //do..while
// // let x = 10 
// // do {
// //     console.log(x);
// //     x--
// // }while(x > 5)

// //for in
// // let obj = {
// //     name: 'Kani',
// //     age: 22,
// //     isHuman: true,
// //     languages: ['python', 'js']
// // }
// // for(i in obj){
// //     console.log(obj[i]);
// // }

// //for of
// // let arr = ['python', 'js', 'php', 'java']
// // for(i of arr){
// //     console.log(i);
// // }

// // for(let i = 1; i <= 100; i++){
// //     if(i % 2 === 0){
// //         console.log(i);
// //     }
// // }

// // let arr = ['a', '6', 'в']
// // arr.push(4,5,6,7)
// // console.log(arr);

// // let i = 45
// // while(i <= 670){
// //     if(i % 10 === 0){
// //         console.log(i);
// //     }
// //     i++
// // }

// // let rands = [];
// // let count = 0;
// // const size = 5;

// // while(count < size) {
// //     rands.push(Math.round(Math.random() * 10));
// //     count++;
// //     console.log('The current size of the array is ' + count);
// // }

// // console.log(rands);









// //lec while, do while
// // let arr = [1,2,3,4,5]
// // console.log(arr[0])
// // console.log(arr[1])
// // console.log(arr[2])
// // console.log(arr[3])
// // console.log(arr[4])
// // let a = 0
// // while(a < arr.length){
// //     console.log(arr[a]);
// //     a++
// // }

// // let number = 1
// // while (number <= 100){
// //     if(number % 2 === 0){
// //         console.log(number)
// //     }
// //     number++
// // }

// // let i = 50
// // do{
// //     console.log(i, 'сработает 1 раз');
// // }while(i < 40){

// // }
// // let a = 0
// // for(let i = 0; i < 20; i++){
// //    a++
// //     if(i % 2 === 0){
// //         console.log(i);
// //     }

// //  }




// // let arr = ['Arstan', 'Beka', 'Akai']
// // for(let i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// //     if(arr[i] === 'Beka'){
// //         alert(arr[i])
// //         continue
// //     }
// //     console.log('drer');

// // }

// // let users = [
// //     {
// //         name: 'Nurlan',
// //     },
// //     {
// //         name: 'Mirbek' 
// //     },
// //     {
// //         name: 'Askhat'
// //     },
// //     {
// //         name: 'Sanjar',
// //     }
// // ]
// // for(let i = 0; i< users.length; i++){
// //     document.write(`<p>Имя: ${users[i].name}</p>`)
// // }
// // console.log(users)

// // for(let i of users){
// //     console.log(i);
// // }

// // for(let lеt in users){
// //     console.log(users[lеt]);
// // }

// // let user = {
// //     name: 'Atay'
// // }
// // for(let i in user){                         /* for in можно перебирать и объекты и массивы*/
// //     console.log(user['name']);
// // }

// // for(let value of users){                     /* for of можно перебирать только массивы*/
// //     console.log(value);
// // }



// // let number = 5
// // console.log(++number);
// // console.log(number);
// // console.log(--number);

// // let sum = 0
// // let arr = [true, 7, 2, 'hello', NaN]
// // for(let i = 0; i < arr.length; i++){
    
// //     if(typeof arr[i] === 'number' && arr[i].toString() !== 'NaN'){
// //         sum += arr[i]
// //     }
// // }
// // console.log(sum);


// // let arr = [1,2,-3,0,1,-6,9,0,0]
// // let a = 0
// // let b = 0
// // let c = 0
// // for(let i = 0; i< arr.length; i++){
// //     if(arr[i] < 0 ){
// //         a++
// //     }else if(arr[i] === 0){
// //         b++
// //     }else{
// //         c++
// //     }    
// // }
// // console.log(a,b,c)

// // function checkTask(arr){
// //     for(let i = 0; i < arr; i++){
// //         console.log(arr[i])
// //     }
// //    }

// // const sum = [2, 3, 4, 5].reduce(add,1); // with initial value to avoid when the array is empty

// // function add(accumulator, a) {
// //     return accumulator * a;
// // }

// // console.log(sum); // 6

// // let obj = {
// // 	'Бишкек': 'Кыргызстан',
// // 	'Минск': 'Беларусь',
// // 	'Москва': 'Россия',
// // 	'Киев': 'Украина'
// // }

// // Object.keys(obj).forEach((key)=> console.log(key + ' это ' + obj[key]))
// // //   for(let i in obj){
// // //       console.log(i[0] + " -это " + i[1]);
// // //   }

// // let arr1 = [1, 2, 3];
// // let arr2 = [4, 5, 6];
// // let c = arr1.concat(arr2)
// // console.log(c)


// // let arr = [2, 5, 9, 15, 0, 4]
// // for(let i = 0; i < arr.length; i++){
// //     if(arr[i]> 3 && arr[i] < 10){
// //         console.log(arr[i]);
// //     }

// // }

// // Задание №5
// // Дан массив [2, 5, 9, 15, 0, 4].
// // С помощью цикла for of и оператора if посчитайте сумму чётных элементов массива. Вывести в консоль результат
// // let arr = [2, 5, 9, 15, 0, 4]
// // let a = 0
// // for(let i of arr){
// //     if(i % 2 === 0){
// //        a +=i

// //     }
// //  }
// //         console.log(`summa = ${a}`);
// // Посчитайте сколько раз встречается четные числа в диапазоне от 0 до 100. Вывести в консоль результат
// // let a = 0
// // for(let i = 0; i<100; i++){
// //     if(i % 2 ===0){
// //         console.log(i);
// //     } 
   
// // }
// // Задание №1
// // Вывести в консоль все четные числа от 1 до 100 при помощи цикла for.
// // for(let i = 0; i < 100; i++){
// //     if(i % 2 === 0){
// //         console.log(i);
// //     }

// // }

// // Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
//     // let arr = ['а', 'б', 'в']
//     // arr.push[4,5,6]
//     // console.log(arr);

//     // Задание №1
// // Напишите программу, котоая переписывает первые буквы слов верхним регистром.
// // Пример ввода: ["programming","code","javascript","react"]
// // Пример вывода: ["Programming","Code","Javascript","React"]
// // let arr = ["programming","code","javascript","react"]
// // arr.unshift('regreg')
// // console.log(arr);
// // let shifted = arr.shift();
// // console.log(arr);
// // console.log(shifted);


// // let arr = [1,2,3,4,5];
// // console.log(arr);

// //length
// // console.log(arr.length);

// //доступ к элементам массива
// // console.log(arr[3]);

// // console.log(arr[arr.length-1]);

// const guest = [
//     {
//         name: 'Alice'
//     },
//     {
//         name: 'Jhon'
//     },
//     {
//         name: 'Emely'
//     },
//     {
//         name:'Reachel'
//     }
// ]
// let newGuest = {
//     name: 'Alex'
// }

// //push
// guest.push(newGuest)
// // console.log(guest);

// //удалить pop
// guest.pop()
// // console.log(guest);

// //в начало //unshift
// let importantGuest = {
//     name: 'Jack'
// }

// guest.unshift(
//     {name:'Tom'}, importantGuest, {name:'Bill'}
//     );
// // console.log(guest);

// //shift
// guest.shift()
// console.log(guest);

// //slice
// // let a = guest.slice(2,3)
// // console.log(a);

// //убрать по середине splice
// guest.splice(3, 0, newGuest) //добавить по середине
// console.log(guest);

// let age = [3, 90, 12, 24, 40, 35, 8]
// // age.sort()
// // console.log(age);

// age.sort((a,b) => a - b);
// console.log(age);




// // function checkTask(arr){
// //     arr.sort((a,b) => b.length - a.length)
// //     console.log(arr[0])
// // }  ///сортировка букв в словах 

// Пример ввода: ["programming","code","javascript","react"]
// Пример вывода: ["Programming","Code","Javascript","React"]
let arr = ["programming","code","javascript","react"]
for(let i = 0; i < arr.length; i++){
    console.log(toUpperCase(i))
}



// String.prototype.firstLetterCaps = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }
// console.log(arr);
// console.log(firstLetterCaps.arr[0]);
// var str="balbalbal";
// str=String(firstLetterCaps())