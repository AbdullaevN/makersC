//

//TASKS / week 7/  2 Home work

//
//
// let api = $(".list");
// function render() {
//   fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => response.json())
//     .then((data) => {
//       let result = data.results;
//       result.forEach((item) => {
//         api.append(`<div>
//         <li> name: ${item.name}</li>
//         <li> status: ${item.status}</li>
//         <li> id: ${item.id}</li>
//         <li> gender: ${item.gender}</li>
//         <li> species: ${item.species}</li>
//         <li> origin-name: ${item.origin.name}</li>
//         <div class="img" style="background: url(${item.image}) no-repeat"></div>
//         </div>
//         `);
//       });
//     });
// }

// render();
let api2 = "https://rickandmortyapi.com/api/character";
let api = $(".list");
function render(a) {
  fetch(a)
    .then((response) => response.json())
    .then((data) => {
      let result = data.results;
      result.forEach((item) => {
        api.append(`<div>
        <li>${item.name}</li> 
        <div class="img" style="background: url(${item.image}) no-repeat"></div>
        </div>
        `);
      });
    });
}

render(api2);

///
/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

let API1 = "http://localhost:3000/characters";
const addProduct = () => {
  let data = fetch("https://rickandmortyapi.com/api/character");
  data
    .then((response) => response.json())
    .then((data) => {
      let result = data.results;
      let character = result.character;
      // console.log(character);
      fetch(API1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    });
};
addProduct();
//

//

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.
*/
let block2 = $(".block2");
let list2 = $(".list2");
fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].results);
    let get = data[0].results;
    get.forEach((item) => {
      list2.append(`
     <li>${item.name}</li><img src="${item.image}">
     `);
    });
  });

// ///================================================
/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/

///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///

//end
// let wrapper = $(".wrapper");

// wrapper.on("click", render());
// const url = "https://rickandmortyapi.com/api/character";

// function searchName(e) {
//   e.preventDefault();
//   f;
// }

// let list = $(".list");
// async function render() {
//   let res = fetch("https://rickandmortyapi.com/api/character");
//   let data = data.json();
//   data.forEach((item) => {
//     list.append(`<span>${item.id}</span>`);
//   });
// }

// render();

// let API1 = "http://localhost:8080/products/";
//GET
// function getData() {
//   fetch(API1)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         console.log(response.statusText);
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

// getData();

//axios

// async function getDataAxios() {
//   try {
//     let { data } = await axios(API1);
//     console.log(data);
//   } catch (e) {

//     const status = e.response.status
//     if(status == 404 ){
//       console.log('Vvedite pravilnuyu ssylku');
//     }else if(status == 500) {
//       console.log('nepoladki');
//     }else if(status == 403){
//       console.log('403');
//     }
//   }
// }
// getDataAxios();

// const num = 10;
// try {
//   num = 20;
// } catch (errorr) {
//   console.log(errorr);
// }

//POST

// let input = document.querySelector("input");
// let btn = document.querySelector("button");

// const addProduct = () => {
//   let value = input.value;
//   let product = {
//     title: value,
//   };
//   fetch(API1, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(product),
//   });
// };
// btn.addEventListener("click", addProduct);

// const addProduct = async () => {
//   const value = input.value;
//   let product = {
//     title: value,
//   };
//   const res = await axios.post(API1, product);
//   console.log(res);
// };
// btn.addEventListener("click", addProduct);

//PUT PATCH
// let API1 = "http://localhost:8080/products/";

// function updateProduct() {
//   let editedProduct = {
//     title: "Macbookввв",
//   };
//   //FETCH
//   // fetch(`${API1}/1`, {
//   //   method: "PATCH",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify(editedProduct),
//   // });

//   //axios
//   axios.put(`${API1}/2`, editedProduct);
// }

// updateProduct();
// //PUT заменяет весь объект на переданный объект
// //PATCH заменяет только те поля, которые передали, остальные поля не трогает
