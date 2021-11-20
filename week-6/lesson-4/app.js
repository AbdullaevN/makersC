$("#btn").on("click", () => {
  console.log("clicked");
});
$(document).ready(() => {
  $("#btn").click(() => {
    console.log("click");
  });
  $(window).mousemove((e) => {
    console.log(e);
  });
});

$(".default-btn").on("click", () => {
  $(".buttons").append("<button class='delete'>Delete</button>");
  //   $(".delete").on("click", () => {
  //     console.log("delete btn clicked");
  //   });
});

$(".buttons").click(".delete", () => {
  console.log("clicked");
});

$(document).ready(function () {
  $("#demoForm").validate();
});
$.validator.messages.requir9ed = "Заполните поле!";
$.validator.messages.email = "Неверный формат email";
$.validator.messages.url = "Неверный формат url, начните с http://";

event.preventDefault(); // остановка перезагурзки страницы

//ready
$(document).ready(() => {
  console.log("DOM zagrujen");
});

// click
$(".click").on("click", () => {
  console.log("btn clicked");
});

dblclick;
$(".click").on("dblclick", () => {
  console.log("btn clicked2");
});

//focus
let input = $("input");
input.on("focus", () => {
  console.log("Есть фокус");
});

//blur
input.on("blur", () => {
  console.log("UnFocused");
  if (!input.val()) {
    // alert("Obyaz");
    input.css("border", "2px solid red");
  } else {
    input.css("border", "2px solid green");
  }
});

//input
input.on("input", (e) => {
  console.log(e);
});

//select
$("input").on("select", (e) => {
  console.log(e);
});

let strong = $("strong");
$("p").on("mouseup", (e) => {
  let selectedText = window.getSelection().toString();
  strong.text(selectedText);
});

//hide, show, toggle
let img = $("img");
let btnHide = $("#btn-hide");
let btnShow = $("#btn-show");
let btnTo = $("#btn-to");
let btnToggle = $("#btn-toggle");

// btnHide.on("click", () => {
//   img.hide(2000);
// });
// btnShow.on("click", () => {
//   img.show(3000);
// });
// btnToggle.on("click", () => {
//   img.toggle(4000);
// });

// btnHide.on("click", () => {
//   img.fadeOut(1000);
// });
// btnShow.on("click", () => {
//   img.fadeIn(1000);
// });
// btnToggle.on("click", () => {
//   img.fadeToggle(1000);
// });

// let opacity = 1;
// btnTo.on("click", () => {
//   if (opacity < 0) {
//     // img.fadeTo(2000, (opacity += 0.1));
//     alert("Она прозрачна");
//   } else {
//     img.fadeTo(2000, (opacity -= 0.5));
//   }
// });

//modal
let btnshowModal = $(".show-modal");
let btncloseModal = $(".my-modal button");
let modal = $(".modal");
let myModal = $(".my-modal");

let showModal = () => {
  modal.fadeIn(500).css("display", "flex");
};
let closeModal = () => {
  modal.fadeOut(500);
};
btnshowModal.on("click", showModal);
btncloseModal.on("click", closeModal);

let h3 = $(".my-modal h3");
let p = $(".my-modal p");
modal.on("click", (e) => {
  if (e.target !== myModal[0] && e.target !== h3[0] && e.target !== p[0]) {
    closeModal();
  }
});

//range input
let range = $("#range");

range.on("input", (e) => {
  let value = e.target.value;
  img.fadeTo(1, value);
  console.log(value);
});
