// //4.let arr = [“hello”, 25, true, {}]
// //Напишите функцию, которая перебирает массив arr через рекурсию и выводит каждый элемент в консоли.
// let arr = ["hello", 25, true, {}];

// let func = () => {
//   arr.forEach((item) => console.log(item));
// };
// func();

// let recFunc = () => {
//   for (let i = 5; i <= 1; i--) {
//     console.log(i);
//   }

//   return recFunc();
// };
// let result = recFunc();
// console.log(result);

// let num = 5;
// let recursia = () => {
//   if (num > 0) {
//     console.log(num--);
//     recursia();
//   }
// };
// recursia();

//5.Создайте стрелочную функцию с одним аргументом, если в этом аргументе храниться строка “Kubat” выведите  alert Hello Kubat, иначе выведите alert “Error”
// let fifeFunc = (arg) => {
//   if (arg === "Kubat") {
//     alert("hello");
//   } else {
//     alert("Error");
//   }
// };
// fifeFunc("nekubat");

//6.В функцию передаются переменные first и second. Проверьте, что first делится без
//остатка на second. Если это так - возвращаете true, иначе возвращаете false.

// let sixFunc = (first, second) => {
//   if (first % second === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(sixFunc(5, 2));

/// !!! RegExp !!! ///
//7.Cоздайте валидатор для тел номера, дополнительно вытащите код страны. Пример для телефона: +996700405060

// let regexp = /+374 (98) 11-11-11/;
// let regexp =
// /\+(374)\s{1}[(](98|97|91|93|94|95|96|99|33|41|44|43|77|55)[)]\s{1}\d{2}[-]{1}\d{2}[-]{1}\d{2}$/g;
// let result = regexp(RegExp(+374(98)12-12-13));
// console.log(result);

// let func = () => {
//   arr.forEach((item) => console.log(item));
// };
// func();

// let str = prompt("Enter email");
// let regexp = /\w+\@\w+.\w+/g;
// let result = regexp.test(str);
// console.log(result);

// 8

// let num = prompt('Enter number')
// let regexp = /^\+996\d{9}/g
// let result = regexp.test(num)
// console.log(result)

// 7

//==========================================================================================================================
//DOM
// // console.log(document.getElementById("title"));
// let title = document.getElementById("title");
// let list = document.getElementsByTagName("ul");
// let item = document.getElementsByClassName("item");
// let inp = document.getElementsByName("inp-name");
// console.log(inp);
// let title = document.querySelector("#title");
// let list = document.querySelectorAll("ul");
// let item = document.querySelectorAll(".item");
// console.log(title, list, item);

// let list = document.getElementsByTagName("h3");
// list[0].innerHTML += "!!!";
// console.log(list);

// // Задание №2
// // 	Всем <h3> сделайте текст зеленого цвета.
// list.style.color.innerHTML = "green";

// let di = document.getElementById("hello");
// di.innerText += "innertext";
// console.log(di.innerText);
// let active = document.createElement("active");
// active.className = "newActive";
// document.body.appendChild(active);
// active = document.getElementsByClassName("h3");
// active[0].innerHTML = "ergrigjkin";
// console.log(active);

// const element = document.querySelector("div.foo");
// let element;
// element.classList.add("bar");
// console.log(element.className);

// function func() {
//   var countup = this;
//   var newNode = document.createElement("div");
//   newNode.className = "textNode news content";
//   newNode.innerHTML = "this created div contains a class while created!!!";
//   document.getElementById("dd").appendChild(newNode);
// }
// console.log(func());
// let classActive = document.createElement("div");
// classActive.className = "active";
// console.log(classActive);

//==================
//DOM, селекторы native js
// let h1 = document.getElementsByTagName("h1");
// console.log(h1);
// h1[0].style.color = "red";
// let p = document.getElementsByClassName("paragraph");
// console.log(p);
// // p[1].style.fontSize = "30px";
// for (let i of p) {
//   i.style.fontSize = "30px";
// }

// let firstSpan = document.getElementById("first-span");
// console.log(firstSpan);
// firstSpan.style.fontWeight = "700";

//==
// let h1 = document.querySelector("h1");
// console.log(h1);
// h1.style.color = "blue";
// let p = document.querySelectorAll(".paragraph");
// console.log(p);
// p.forEach((item) => {
//   item.style.fontSize = "24px";
// });
// // let span = document.querySelector("#first-span");
// let span = document.querySelector(".paragraph span");
// span.style.background = "lightblue";

// let p = document.querySelector(".paragraph");
// p.classList.toggle("paragraph");
// p.classList.add("spomeText");
// p.classList.remove("paragraph");
// p.classList.replace("paragraph", "para");
// let div = document.querySelector("div");
// let btn = document.createElement("button");

// btn.innertext = "SAVE";
// div.append(btn);

// let lastP = document.getElementById("last-p");
// // lastP.innerText += " coding is easy";
// lastP.innerHTML += "<strong class='str' > coding is easy</strong>";
// let strong = document.querySelector("strong");
// console.log(strong);

// let allTags = document.querySelectorAll("*");
// console.log(allTags);

// let tagsAByGet = document.getElementsByTagName("a");
// let tagsAByQuery = document.querySelectorAll("a");
// let a = document.createElement("a");
// document.body.append(a);
// console.log(tagsAByGet);
// console.log(tagsAByQuery);
// let listItems = document.querySelectorAll("li");
// let listItemTag = listItems[0].outerHTML;
// console.log(listItemTag);
// listItems.forEach((item, index) => {
//   if (index % 2 === 0) {
//     item.style.background = "red";
//   }
// });
// let h3 = document.querySelector("h3");
// h3.outerHTML = `<h4>${h3.innerText}</h4>`;
// console.log(h3.innerHTML);
// let p = document.querySelectorAll("p");
// p.forEach((item) => {
//   item.classList.toggle("second-title");
// });

// let h2 = document.querySelector("h2");
// console.log(h2.hasAttribute("id"));
// console.log(h2.setAttribute("class", "h2-title"));
// h2.removeAttribute("id");
// h2.removeAttribute("class");
