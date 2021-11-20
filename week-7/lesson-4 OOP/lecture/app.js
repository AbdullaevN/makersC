//OOP

// class User {
//   constructor(name, password, type) {
//     this.name = name;
//     this.password = password;
//     this.type = type;
//   }
// }
// let admin1 = new User("Imya", "qwerty", "admin");
// let user1 = new User("Aktan", "143243", "user");
// console.log(admin1);
// console.log(user1);

// class Car {
//   constructor(brand, type, price) {
//     this.brand = brand;
//     this.type = type;
//     this.price = price;
//   }
// }
// class Mercedes extends Car {
//   constructor(brand, type, price, year, color) {
//     super(brand, type, price);
//     this.year = year;
//     this.color = color;
//   }
// }
// let car1 = new Mercedes("Mercedes", "Coupe", "15000", "2005", "black");
// console.log(car1);

// class Account {
//   constructor(name, password) {
//     this.name = name;
//     this.#password = password;
//   }
//   #password;
//   getPassword() {
//     return this.#password;
//   }
//   setNewPassword(newPassword) {
//     this.#password = newPassword;
//   }
// }
// let account1 = new Account("nno", "12345678");
// console.log(account1);
// account1.setNewPassword("JSFS18");
// console.log(account1.getPassword());

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
//   voice() {
//     console.log("Gav Gav");
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   voice() {
//     console.log("Mau mau");
//   }
// }

// let deny = new Dog("Deny");
// let Garfild = new Cat("Garfild");
// deny.voice();
// Garfild.voice();

let span = document.querySelector("span");
span.addEventListener("click", (e) => {
  console.log(e.target, e.currentTarget);
  e.stopPropagation();
});
