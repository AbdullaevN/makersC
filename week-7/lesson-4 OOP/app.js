// // let person = {
// //   name: "John",
// //   lastName: "Snow",
// //   age: 29,
// //   sayHello() {
// //     console.log(`Hello, my name is ${this.name} ${this.lastName}`);
// //   },
// // };
// // console.log(person);
// // person.sayHello();

// // let person2 = {
// //   name: "",
// // };

// // function Person(name, lastName, age) {
// //   this.name = name;
// //   this.lastName = lastName;
// //   this.age = age;
// // }

// // Person.prototype.sayHello = function () {
// //   console.log(`Hello, my name is ${this.name} ${this.lastName}`);
// // };
// // Person.prototype.sayAge = function () {
// //   console.log(`Hello, I am ${this.age}y/o `);
// // };

// // let person1 = new Person("Jhon", "Snow", 29);
// // let person2 = new Person("Emily", "dwwd", 35);
// // console.log(person1);
// // person1.sayHello();
// // person1.sayAge();
// // console.log(person2);

// class Person {
//   constructor(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//     Person.count++;
//   }
//   sayHello() {
//     console.log(`Hello, my name is ${this.name} ${this.lastName}`);
//   }
//   sayAge() {
//     console.log(`Hello, I am ${this.age}y/o `);
//   }
//   static countOfObject() {
//     console.log(Person.count);
//   }
// }
// Person.count = 0;
// let person1 = new Person("Jhon", "Snow", 29);
// let person2 = new Person("Jhon", "NOSnow", 29);
// let person3 = new Person("NOJhon", "Snow", 29);
// console.log(person1);
// // console.log(person1.count);
// // console.log(Person.count);
// person1.sayHello();
// person1.sayAge();
// Person.countOfObject();
// // console.log(person1);

// class Mentor extends Person {
//   constructor(name, lastName, age, position, type) {
//     super(name, lastName, age);
//     this.position = position;
//     this.type = type;
//   }

//   work() {
//     console.log(`I am a ${this.type} ${this.position}`);
//   }
// }
// let mentor1 = new Mentor("Jhon", "Snow", 29, "Mentor", "JS");
// console.log(mentor1);
// mentor1.sayHello();
// mentor1.sayAge();
// mentor1.work();

// class Animal {
//   constructor(name, age) {
//     this.name, this.age;
//   }
//   saySound() {
//     console.log("I am a an animal");
//   }
//   static sayBye() {
//     console.log("This is static ByE");
//   }
// }

// // let dog = new Animal("Rex", 3);
// // console.log(dog);
// // dog.saySound();

// class Dog extends Animal {
//   constructor(name, age, voice) {
//     super(name, age);
//     this.voice = voice;
//   }

//   sayVoice() {
//     console.log(`${this.voice}`);
//   }
// }
// let dog = new Dog("rex", 3, "rf");
// console.log(dog);
// dog.saySound();
// dog.sayVoice();

// class User {
//   constructor(password, username) {
//     this.password = password;
//     this.username = username;
//   }
// }
// //////////////////////////////////////////
// Задание №1
// Реализуйте класс Programmer (Программист),
// который будет иметь следующие свойства:
// name (имя),
// surname (фамилия),
// programming_language (язык програмирования).
// Также класс должен иметь метод introduceYourself(),
// который будет выводить информацию о работнике.

// Вот так должен работать наш класс:
// let programmer = new Programmer('Иван', 'Иванов', 'Python');
// console.log(programmer.name); //выведет 'Иван'
// console.log(programmer.surname); //выведет 'Иванов'
// console.log(programmer.programming_language); //выведет 'Python'
// console.log(programmer.introduceYourself()); //выведет 'Меня зовут Иван Иванов и пишу код на языке Python'

// class Programmer {
//   constructor(name, surname, programming_language) {
//     this.name = name;
//     this.surname = surname;
//     this.programming_language = programming_language;
//   }
//   introduceYourself() {
//     console.log(
//       `Меня зовут ${this.name}  ${this.surname} пишу код на языке ${this.programming_language}`
//     );
//   }
//   get Worker() {
//     return this.name + this.surname;
//   }
// }
// let count = 0;
// let programmer = new Programmer("Иван", "Иванов", "Python");
// let programmer1 = new Programmer("Иван", "Иванов", "Python");
// console.log(programmer.name);
// console.log(programmer.surname);
// console.log(programmer.programming_language);
// programmer.introduceYourself();

// Задание №2
// Модифицируйте класс Worker из предыдущей задачи
// следующим образом: сделайте все его свойства
// приватными, а для их чтения сделайте методы-геттеры.
// возраст рассчитывается из текущей даты и дня рождения

// Задание №3
// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву
// заглавной и метод ucWords, который принимает строку и делает
// заглавной первую букву каждого слова этой строки.

// Наш класс должен работать так:

// console.log(str.getReverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// class MyString {
//   constructor(str) {
//     this.str = str;
//   }
//   getReverse(str) {
//     console.log(str.split("").reverse().join(""));
//   }
//   ucFirst(str) {
//     console.log(str[0].toUpperCase() + str.slice(1));
//   }
//   ucWords(str) {
//     console.log(
//       str
//         .split(/\s+/)
//         .map((item) => item[0].toUpperCase() + item.slice(1))
//         .join()
//     );
//   }
// }

// let str = new MyString();

// str.getReverse("abcde");
// str.ucFirst("abcde");
// str.ucWords("abcde abcde abcde");

// Задание №4
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен еть следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить
// текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
// Текущий год получите самостоятельно.

// Вот так должен работать наш класс:

// var student = new Student('Иван', 'Иванов', 2018);

// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.year); //выведет 2018console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2021
// Вот так должен выглядеть класс User, от которого наследуется наш Student:
// class User {
//   constructor(name, surname, year) {
//     (this.name = name), (this.surname = surname), (this.year = year);
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname, year);
//     (this.name = name), (this.surname = surname), (this.year = year);
//   }
//   getFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   }
//   getCourse() {
//     let currentYear = 2021;
//     if (this.year) {
//       console.log(currentYear - this.year);
//     }
//   }
// }
// let sttt = new Student("Jessica", "Alba", 2018);

// sttt.getFullName();
// sttt.getCourse();

// Задание №5
// Реализуйте класс Rectangle.
// У него должны быть следующие свойства: ширина width, высота height. Также у него должны быть
// следующие методы: получить ширину getWidth, установить ширину setWidth, получить высоту getHeight,
// установить высоту setHeight.4\

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   getWidth() {
//     return this.width;
//   }
//   setWidth(width) {
//     this.width = width;
//   }
//   setHeight(height) {
//     this.height = height;
//   }
//   getHeight() {
//     return this.height;
//   }
// }

// let rec = new Rectangle(50, 60);
// rec.setWidth(70);
// console.log(rec.getWidth());

// rec.setHeight(80);
// console.log(rec.getHeight());

// Задание №6
// Реализуйте класс Worker (Работник),
// который будет иметь следующие свойства:
// name (имя),
// surname (фамилия),
// rate (ставка за день работы),
// days (количество отработанных дней).
// Также класс должен иметь метод getSalary(),
// который будет выводить зарплату работника.
// Зарплата - это произведение (умножение)
// ставки rate на количество отработанных дней days.

// Вот так должен работать наш класс:
// var worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// class Worker {
//   constructor(name, surname, rate, days) {
//     (this.name = name),
//       (this.surname = surname),
//       (this.rate = rate),
//       (this.days = days);
//   }
//   getSalary(arg) {
//     return this.rate * this.days;
//   }
// }
// var worker = new Worker("Иван", "Иванов", 10, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// Задание №7
// Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для
// свойства days сделайте еще и методы-сеттеры.
// Наш класс теперь будет работать так:

// var worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10
class Worker {
  constructor(name, surname, rate, days) {
    (this.name = name),
      (this.surname = surname),
      (this.rate = rate),
      (this.days = days);
  }
  getSalary(arg) {
    return this.rate * this.days;
  }
  setRate(newRate) {
    this.rate = newRate;
  }
  setDays(newDays) {
    this.days = newDays;
  }
}
var worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
