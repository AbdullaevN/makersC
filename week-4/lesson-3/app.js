// const arrowFunct = () => {
// console.log('heleo');
// }
// arrowFunct()

// let arrowFunc = () => console.log('hello');
// arrowFunc()

// const arrowFunc = (arg1, arg2) => arg1 + arg2
// console.log(arrowFunc(7,8));


// const arrowFunc = arg1 => console.log(arg1);
// arrowFunc(5)

// const arrowFunc = function(arg1, arg2, arg3) {
//     console.log(...arguments);
// }
// arrowFunc(true, 23, 'Makers')


// //object
// let person = {
//     name: 'Jhon',
//     age: 25,
//     sayHello() {
//         console.log('hello world');
//     },
//     sayName: function() {
//         console.log(` my name is ${this.name}`);
//     },
//     sayAge: function() {
//         console.log(`Im ${this.age}  y/o`)
//     } 

// }

// // console.log(person.age);
// // person.sayHello()
// // person.sayName()
// // person.sayAge()


// let person2 = {...person}
// // console.log(person2);
// person2.name = 'NNo';
// person2.age = 29;
// person2.sayName();
// person2.sayAge();



// let obj1 = {
//     name: 'Kani',
//     age: 20,
//     obj2 : {
//         name: 'Kubat',
//         sayName: () => {
//             console.log(`${this.name}`);
//         }
//     }
// }

// obj1.obj2.sayName()


// let obj = {
//     alert(a){
//         console.log(a + 'obj1');
//     },
//     hello: function() {
//         let obj2 = {
//             alert(a){
//                 console.log(a + 'obj2');
//             },
//             hello2: () => {
//                 this.alert('alert2')
//             }
//         }
//         obj2.hello2()
//     }
// }

// obj.hello()

// function reverseString(str) {

//     return str.split("").reverse().join("");
  
//   }
  
  
//   let word = reverseString()
//   word()
//   reverseString("hello"); // olleh


// let exampleTen = (first, second) => {
//     if (first % second === 0) {
//       true;
//       console.log('da');
//     } else {
//       console.log('net');
//         false;

//     }
//   };
// exampleTen(100,50)



// Задание №11
// Создайте два объекта со свойствами language и framework.
// Затем, отдельно создайте функцию describe() который выводит свойства объектa.
// Примените describe() этим двум объектам.

// let obj1 = {
//     language: 'JS',
//     framework: 'react'
// }
// let obj2 = {
//     language: 'JS',
//     framework: 'Angular'
// }
// let describe = () => {
//     console.log(obj1, obj2);
// }

// describe()


//======================================================================
// Задание №15
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

let objElevator = {
    printFloor: 1,
    allFloor: 16,

}
















// const Elevator = {
//     floor: 1,
//     toFloor: function (n) {
//       this.printFloor();
//       do {
//         if (n < this.floor) {
//           this.downOneFloor();
//         } else if (n > this.floor) {
//           this.upOneFloor();
//         }
//         this.printFloor();
//       } while (this.floor !== n);
//     },
//     printFloor: function () {
//       console.log('Elevator is on the floor ' + this.floor);
//     },
  
//     upOneFloor: function () {
//       if (this.floor < 16) {
//         this.floor++;
//       } else {
//         console.log('You are already on the last floor');
//       }
//     },
//     downOneFloor: function () {
//       if (this.floor > 1) {
//         this.floor--;
//       } else {
//         console.log('You are already on the first floor');
//       }
//     },
//   };
  
//   Elevator.toFloor(4);



//УРОК
//Стрелочные функции arrowFunction
// const arrowFunc = () => {
//     console.log('Arrow');
// }

// const arrowFunc = () => console.log('arrow');
// const arrowFunc = arg => console.log(arg);
// arrowFunc(10)


// function func() {
//     console.log(arguments);
// }

// const func = () => {
//     console.log(...arguments); //ошибка
// }
// func('str',10, true)


// let km = +prompt('daite km')
// let countKm = (arg) => {
//     let m = arg * 1000
//     alert(`${m} метров`)
// };
// countKm(km)

//методы объектов 
// console.warn('efsde');
// console.error('svr');
// console.log('erge');

// let user = {
//     name : 'Ilyas',
//     sayHello : function(arg){
//         //function expression
//         console.log(`Hello ${arg}`);
//     },
//     sayHello(arg){
//         //function declaration
//         console.log(`Hello ${arg}`);
//     },
//     sayHello : (arg) => {
//         // arrow function 
//         console.log(`Hello ${arg}`);
//     }
// }
// user.sayHello('Damir')
// user.sayHello('Ne-Damir')


//this - контекст

// function stop(){
// }
// function alert(gerf){}

// console.log(this);

// let obj = {
//     title: 'JS23',
//     sayContext() {
//         console.log(this);
//     },
//     sayContextArrow: () => {
//         console.log(this);
//     },
//     func(){
//         let arrowFinc = () => {
//             console.log(this);
//         };
//         arrowFinc()
//     }
// }
// obj.sayContext();
// obj.sayContextArrow();
// obj.func()

// let user = {
//     name: 'Erlan', 
//     sayName: function() {
//         console.log('my name is ' + this.name);
//     }
// }
// let newUser = {...user };
// newUser.name = 'Islam'
// user.sayName();
// newUser.sayName();

// let passenger = {
//     title: ' Passenger:',
//     fisrtName: ' Din ',
//     lastName: ' Winchester, ',
//     passportNum: 'US12345678',
//     baggage:   20,
//     getInfo() {
//         console.log(passenger.title+passenger.fisrtName + passenger.lastName + ' Passport number is: ' + this.passportNum +' Maximum luggage weight is: '+ passenger.baggage);
//     },
//     setBaggage(arg) {
//         this.baggage = arg;
//     },

// }
// passenger.getInfo()
// passenger.setBaggage(30)
// passenger.getInfo()



// Дан объект user. Напишите метод byTicket для этого объекта.
// При вызове метода количество билетов должно увеличиваться на единицу, при условии,
// что у пользователя будет достаточно средств на балансе.
// Также, с баланса должна сниматься стоимость билета (400).
// Если на счету недостаточно средств вывести соответствующее сообщение.
// let user = {
//     name: 'Sam',
//     age: 17,
//     balance: 700,
//     tickets: 0,
//     byTicket(arg) {
//             if(this.balance >= 400 * arg){
//                 this.tickets += arg;
//                 this.balance -= 400 * arg
//                 console.log(`Вы успешно купили ${arg} билет(ов)`);
//             }else{
//                 let avaTicket = Math.floor(this.balance / 400)
//                 if(avaTicket > 0){
//                     this.balance -= 400 * avaTicket
//                     this.tickets += avaTicket
//                     console.log(`У вас недостаточно средств купить ${arg} билетов. Вы проибрели ${avaTicket} билет(ов)`);
//                 }else{
//                     alert('Вы нищий')
//                 }

//             }
//     },
//     addToBalace(sum) {
//         this.balance += sum
//         console.log(`вы пополнили баланс на ${sum} сомов`);
//     },
//     showBalance() {
//         console.log(`Ваш баланс ${this.balance} сом`);
//     }
// }
// user.byTicket(2)
// user.addToBalace(1000)
// user.showBalance()
// user.byTicket(2)
// user.showBalance()
// user.byTicket(2)
// user.showBalance()
// user.byTicket(2)
// user.byTicket(1)
// user.showBalance()
// user.byTicket(1)



//=================================================
// Import stylesheets
// import './style.css';

// Стрелочные функции, методы объектов, this.  Домашняя работа.

// Группа C ======================================================
// Задание №1
// Перепишите данную функцию в стрелочную функцию.
// function showFirstMessage() {
//     console.log("Hello World!");
// }
// showFirstMessage()
// let showFirstMessage = () => console.log('Hello World');
// showFirstMessage();

// Задание №2
// Напишите стрелочную функцию birthday которая будет принимать age и name,
// и будет поздравлять этого человека.
// let birthday = (age, name) => {
//   console.log(`Happy ${age}s birthday ${name} ` );
// };
// birthday(23, 'Kani');

// Задание №3
// Дан массив с именами, добавьте is cool в конец каждой имени.

// let arr = ['Jhon ', 'Doe ', 'Kani '];
// let func = () => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] += 'is cool';
//     console.log(arr[i]);
//   }
// };
// func();
// Задание №4
// Реализуйте стрелочную функцию, принимающую строку и инвертирующую ее.
// Например, строка «JavaScript» должна стать строкой «tpircSavaJ».
// let word = '«JavaScript»';
// let invent = () => {
//   word.split();
//   word.reverse();
//   word.join();
//   console.log(word);
// };
// // console.log(word.reverse());
// invent();

// Задание №5
// Реализуйте стрелочную функцию, принимающую строку и символ и возвращающую количество символов в строке.
// Например, если мы передаем «JavaScript» и «a», то должны получить 2 (в строке «JavaScript» две буквы «a»).
// let js = (str, letter) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(js('JavaScript', 'a'));
// Группа B ======================================================

// Задание №6
// Дан массив array = [1, 2, 3, 4, 5], при помощи стрелочных функций реализуйте пункты a и b.
// a) умножьте каждый элемент массива на 5.
// b) отфильтруйте массив по четным числам.

// let exSix = (arr1) => {
//   arr1 = arr1.map((item) => item * 5);
//   console.log(arr1.join());
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 === 1) {
//       arr1.splice(i, 1);
//     }
//   }
//   return arr1;
// };
// console.log(exSix([1, 2, 3, 4, 5]));
//============================================

// Задание №7
// Создайте стрелочную функцию с одним аргументом,
// если в этом аргументе хранится строка “User” выведите
// alert Hello User, иначе выведите alert “Error” .

// let exSeven = (arg) => {
//   if (arg === 'User') {
//     alert('Hello, User');
//   } else {
//     alert('Error');
//   }
// };
// exSeven('User');

// Задание №8
// Функция принимает параметр min.
// В нем лежит число от 0 до 59.
// Функция должна возвращать в какую четверть
// часа попадает это число (в первую, вторую,
// третью или четвертую).

// let exEight = (min) => {
//   if (min > 0 && min < 15) {
//     alert('В первую четверть');
//   } else if (min > 15 && min <= 30) {
//     alert('Во вторую четверть');
//   } else if (min > 31 && min <= 45) {
//     alert('В третью четверть');
//   } else if (min > 46 && min < 59) {
//     alert('В четвертую четверть');
//   } else {
//     alert('не правильно указан диапазон');
//   }
// };
// exEight(45);

// Задание №9
// Функция принимает количество часов (проверить
// что это число). Функция возвращает
// количество секунд в переданых часах.
// let exNine = (clock) => {
//   return (clock = clock * 60 * 60);
// };
// console.log(exNine(5));

// Задание №10
// В функцию передаются переменные first и second.
// Проверьте, что first делится без
// остатка на second. Если это так - возвращаете true,
// иначе возвращаете false.

// let exTen = (first, second) => {
//   if (first % second === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// exTen(10, 4);
// exTen(100, 50);

// Группа A ======================================================

// Задание №11
// Создайте два объекта со свойствами language и framework.
// Затем, отдельно создайте функцию describe() который выводит свойства объектa.
// Примените describe() этим двум объектам.
// let obj1 = {
//     language: 'JS',
//     framework: 'react'
// }
// let obj2 = {
//     language: 'JS',
//     framework: 'Angular'
// }
// let describe = () => {
//     console.log(obj1, obj2);
// }

// describe()

// Задание №12
// Создайте объект group со свойствами title и students. Свойство students будет
// хранить масив с именами студентов. Так же реализуйте метод showList() который будет выдавать alert
// на title и на имя каждого студента.

// let group = {
//   title: ' - Human',
//   students: ['Jhon', 'Kubat', 'Kyzjhibek'],

//   showList() {
//     for (let i = 0; i < group.students.length; i++) {
//       alert(group.students[i] + group.title);
//     }
//   },
// };
// group.showList();
// Задание №13
// Создайте объект person со свойством name, реализуйте метод introduce() который будет выдавать
// имя объектa

// let person = {
//   name: 'Jhon',
//   introduce() {
//     alert(person.name);
//   },
// };
// person.introduce();
// Задание №14
// Создайте любой объект с несколькими свойствами и один метод который будет выдавать в консоле
// все ключи и значения этого объект.
// let exFtn = {
//   name: 'Aizhan',
//   age: 27,
//   title: 'student',

//   method() {
//     console.log(exFtn);
//   },
// };
// exFtn.method();

// Задание №15
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

// let countUpFloor = 0;
// let objectFloor = {
//   onFloor: 1,
//   allFloor: 16,

//   printFloor() {
//     console.log(`мы находимся на этаже 1`);
//   },
//   upOneFloor() {
//     this.onFloor++;
//   },
//   downOneFloor() {},
//   toFloor() {},
// };
// objectFloor.upOneFloor();
// objectFloor.printFloor();
// objectFloor.printFloor();
//=================================================
//extra
// Import stylesheets
// import './style.css';

// Стрелочные функции, методы объектов, this. Экстра задания

// Задание №1
// Создайте функцию которая выводит в консоль все аргументы
// P.S. используйте [...arguments]
// let arr = ['Kani', 'Dastan', 'Jhon']
// function argFunc (arr) {
//   console.log(...arguments);
// }
// argFunc(arr)
//===============================================================
// Задание №2
// Фаренгейт. Напишите функцию которая конвертирует градусы Цельсия в градусы
// Фаренгейта.
// C-температура в цельсиях,
// F-температура в фаренгейтах,
// F=1.8*C+32,


// let tempConverter = (arg) => {
//     arg = 1.8 * arg + 32
//     console.log(arg);
// }
// tempConverter(20)
//============================
// Задание №3
// Объявите объект job со свойствами position, paid, isAvailable, showDetails().
// isAvalable хранит булевое значение, в случае true будет выдаваться
// 'currently it is available', а если false то 'curruntly it is not available'.
// А showDetails() должен описывать данный объект.
// Создайте несколько объектов с помощью метода Object.create().

let job = {
  position: 'employee',
  paid: 50,
  isAvailable: false,
 
  
  showDetails(arg){
    if(arg > 18){
      this.isAvailable = true
      console.log('currently it is available');
    }else{
      console.log('curruntly it is not available');
    }
  }
}
job.showDetails(19)