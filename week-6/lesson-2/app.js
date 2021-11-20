// // let func = (num) => {
// //   console.log(num);
// //   let timeId = setTimeout(func, 1000, ++num);
// //   if (num === 6) {
// //     clearTimeout(timeId);
// //   }
// // };

// // setTimeout(func, 1000, 1);
// // handler();
// let handler = () => {
//   alert("Thank you");
// };
// let handler2 = () => {
//   alert("Thank you again");
// };

// // let btn = document.getElementById("btn");
// // btn.addEventListener("click", () => {
// //   console.log("Hello makers");
// // });
// btn.addEventListener("click", handler);
// btn.addEventListener("click", handler2);

// // btn.onclick = (  ) => alert("hello");

// btn.removeEventListener("click", handler);

// let h1 = document.querySelector("h1");
// let inp = document.querySelector("#inp");
// inp.addEventListener("change", function (event) {
//   // console.log(event.target.value);
//   h1.innerText = event.target.value;
//   event.target.value = "";
// });

// // console.log(h1, inp);

// inp.addEventListener("input", function (event) {
//   // console.log(event.target.value);
//   h1.innerText = event.target.value;
// });

// console.log(h1, inp);
// inp.addEventListener("keydown", function (event) {
//   //   // console.log(event.target.value);
//   // h1.innerText = event.target.value;
//   // event.target.value = ''
//   console.log(event);
// });

// let btn = document.querySelector("#btn");
// let inp = document.querySelector("#inp");
// let container = document.querySelector("#container");

// let addElemToContainer = function () {
//   // console.log(inp.value);

//   let newElem = document.createElement("div");
//   if (!inp.value) return;
//   newElem.innerText = inp.value;
//   container.append(newElem);
//   inp.value = "";
// };

// btn.addEventListener("click", addElemToContainer);
// inp.addEventListener("change", addElemToContainer);

// document.addEventListener("mousemove", function (e) {
//   // console.log(e);
//   console.log(`X = ${e.clientX} Y=${e.clientY}`);
// });

// let brn2 = document.querySelector("#btn2");

// btn1.addEventListener("click", function () {
//   alert("BTN 1 clicked");
// });

// let event = new Event("click");
// // btn1.dispatchEvent(event);

// btn2.addEventListener("click", () => {
//   btn1.dispatchEvent(event);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   let btn1 = document.querySelector("#btn1");
//   console.log(btn1);
// });

//УРОК
// DOMContentLoaded;
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
});

// let btn = document.querySelector("button");
// // btn.onclick = () => {
// //   alert("clicked");
// // };

// btn.addEventListener("click", (e) => {
//   // alert("clicked");
//   console.log(e);
// });

//online, offline
// window.addEventListener("offline", () => {
//   console.log("Пропал интернет");
// });
// window.addEventListener("online", () => {
//   console.log("Появился интернет");
// });

//mousemove - любое движение мышки
//mousedown - нажатие мышки
//mouseup - при отпустании
// document.addEventListener("mouseup", (e) => {
//   console.log(e);
// });

//input - на каждое изменение инпута
//paste
//copy

// let input = document.querySelector("input");
// let h3 = document.querySelector("h3");
// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   h3.innerText = e.target.value;
// });
// input.addEventListener("paste", (e) => {
//   // console.log('нельзя');
// });
// input.addEventListener("copy", (e) => {
//   alert("нельзя копировать");
// });

//resize - срабатывает на каждое изменение экрана
// window.addEventListener("resize", (e) => {
//   console.log(e);
// });

// let input = document.querySelector("input");
// let form = document.querySelector("form");
// let ul = document.querySelector("ul");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let text = input.value;
//   let li = document.createElement("li");
//   li.innerText = text;
//   ul.append(li);
//   input.value = " ";
// });

//на клавиши
//keypress при нажатии
//keydown - при держании
//keyup - при отпускании

// document.addEventListener("keypress", (e) => {
//   console.log(e);
// // });
// document.addEventListener("keydown", (e) => {
//   console.log(e);
// });
// document.addEventListener("keyup", (e) => {
//   console.log(e);
// });

// submit срабатывает при нажатии на  энтер

// let span = document.querySelector(".first-span");
// let changeColor = document.querySelector(".change-color");
// let changeSize = document.querySelector(".change-size");

// changeColor.addEventListener("click", () => {
//   let red = Math.ceil(Math.random() * 255);
//   let green = Math.ceil(Math.random() * 255);
//   let blue = Math.ceil(Math.random() * 255);
//   span.style.color = `rgb(${red}, ${green}, ${blue})`;
// });
// changeSize.addEventListener("click", () => {
//   span.style.fontSize = `${Math.ceil(Math.random() * 100)}px`;
// });
// let btn = document.querySelector("button");
// let div = document.querySelector("div");
// btn.addEventListener("click", () => {
//   div.innerHTML += "<br><tr><th>Hello</th><th>World!</th></tr>";
// });
