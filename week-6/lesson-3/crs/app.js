let btnStart = document.querySelector(".start");
let btnReset = document.querySelector(".reset");

let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");

let winner = document.querySelector(".winner");

btnStart.addEventListener("click", () => {
  let randNum1 = Math.floor(Math.random() * (450 - 400) + 400);
  let randNum2 = Math.floor(Math.random() * (450 - 400) + 400);

  car1.style.transform = `translateX(${randNum1}px)`;
  car2.style.transform = `translateX(${randNum2}px)`;
  setTimeout(() => {
    if (randNum1 > randNum2) {
      winner.innerText += " " + "Car N1";
    } else {
      winner.innerText += " " + "Car N2";
    }
  }, 1000);
});

btnReset.addEventListener("click", () => {
  car1.style.removeProperty("transform");
  car2.style.removeProperty("transform");
});
