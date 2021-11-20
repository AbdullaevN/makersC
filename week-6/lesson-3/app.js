// $("#btn").on("click", () => {
//   alert("btn clicked");
// });

// $(document).ready(() => {
//   $("#btn").click(() => {
//     alert("btn clicked");
//   });
//   //   $(window).on("mousemove", (e) => {
//   //     console.log(e);
//   //   });
//   //   $(window).mousemove((e) => {
//   //     console.log(e);
//   //   });
//   $(".default-btn").on("click", () => {
//     $(".buttons").append("<button class='delete'>Delete</button>");
//     // $(".delete").on("click", () => {
//     //   alert("delete created");
//     // });
//   });

//   $(".buttons").click(".delete", () => {
//     alert("delete created");
//   });
// });

// $(".block").fadeOut();
// $(".block").fadeIn();
// $(".block").hide(2000);
// $(".block").show(2000);

// let result = confirm("Are you 18 y.o.?");
// if (result) {
//   $("h1").css("display", "block");
// }

//empty
//remove
// $("p").empty();
// $("p").remove();
// $("body").html("<h1>Hello Makers Bootcamp</h1>");
// $("body").after("<div class='container'></div>");

// let clonedElem = $("body").clone();
// // console.log(clonedElem);
// clonedElem[0].children[0].innerText = "modified";
// // console.log(clonedElem);
// $(".container").append(clonedElem);

// let num1 = +prompt("Enter one");
// let num2 = +prompt("Enter two");
// let result = num1 + num2;
// $("body").html(`<h1>${result}</h1>`);
// let sum = () => {
//   let num1 = +prompt("Enter one");
//   let num2 = +prompt("Enter two");
//   let result = num1 + num2;
//   $("body").html(`<h1>${result}</h1>`);
// };
// let minus = () => {
//   let num1 = +prompt("Enter one");
//   let num2 = +prompt("Enter two");
//   let result = num1 - num2;
//   $("body").html(`<h1>${result}</h1>`);
// };
// let delenie = () => {
//   let num1 = +prompt("Enter one");
//   let num2 = +prompt("Enter two");
//   let result = num1 / num2;
//   $("body").html(`<h1>${result}</h1>`);
// };
// let multiply = () => {
//   let num1 = +prompt("Enter one");
//   let num2 = +prompt("Enter two");
//   let result = num1 * num2;
//   $("body").html(`<h1>${result}</h1>`);
// // };

// let allElems = $("*");
// console.log(allElems);

// //tagName
// let h1 = $("h1");
// console.log(h1);
// h1.css("fontSize", "24px");

//class
// // let month = $(".october");
// console.log(month);

// //Native js
// let liTags = document.querySelectorAll("li");
// liTags.forEach((item) => {
//   item.style.color = "blue";
// });

//jQuery

// let liTags = $("li");
// liTags.css("color", "blue");
// let firstLiTg = $("li:first-child");
// let thirdLiTg = $("li:nth-child(3)");
// let lastLiTg = $("li:last-child");
// firstLiTg.css("color", "red");
// thirdLiTg.css("color", "pink");
// lastLiTg.css("color", "green");

// let input = $("input");
// let disable = $("input:disabled");
// console.log(disable);
// disableInput.val("not working");
// let value = disableInput.val();
// console.log(value);

// let liTags = $("li");
// liTags.addClass("list-item");
// // liTags.toggleClass("active");

// let result = liTags.hasClass("list-item");
// console.log(result);

// let divsWhithoutClass = $("div:not(.block)");
// console.log(divsWhithoutClass);

//let para = $(".text");
// let text = para.text();
// console.log(text);
// para.text(para.text() + " hello");
// para.html("<strong>Hello</strong>");

// let div = $("#users");
// let users = [
//   {
//     name: "Aibek",
//     age: 32,
//   },
//   {
//     name: "Kunduz",
//     age: 21,
//   },
//   {
//     name: "Mira",
//     age: 18,
//   },
//   {
//     name: "Ilya",
//     age: 47,
//   },
// ];
// users.forEach((item) => {
//   div.append(`
//     <p>Имя: ${item.name},<br> Возраст: ${item.age}</p>
//     <strong>14:55</strong>
//     `);
// });

// let google = $('a[href = "google.com"]');
// console.log(google);

// let p = $("p");
// p.text(new Date());

// let google = $("a:first");
// let href = google.attr("href", "amazon.com");
// google.removeAttr("href");
// google.attr("id", 'global');
// console.log(href);

// let href = google.prop("href");
// console.log(href);

let liTags = $("li");
liTags.each((index, value) => {
  console.log(index, value);
});
