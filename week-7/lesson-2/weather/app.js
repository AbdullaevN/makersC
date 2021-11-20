const inp = $(".inp-search");
const btn = $(".btn-search");
const mainBox = $(".main-box");
const box = $(".box");

btn.on("click", () => {
  let val = inp.val();
  fetch(`https://goweather.herokuapp.com/weather/${val}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const today = new Date();
      mainBox.append(`
        <div class="card">
        <div class="card__inner">
          <img
            src="http://download.spinetix.com/content/widgets/icons/weather/02d.png"
            alt=""
            width="100px"
          />
          <div class="card__city">${val}</div>
          <h2 class="card__temp">${data.temperature}</h2>
          <div class="card__wind">${data.wind}</div>
          <div class="card__date">${today.getDate()}</div>
        </div>
      </div>
        `);
    });
});
