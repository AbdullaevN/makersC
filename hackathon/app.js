const API = " http://localhost:8050/users";

let addModal = $(".modal-modal");
let addBtn = $(".add");

addBtn.on("click", (e) => {
  alert("add");
});

// add
async function addProduct() {
  let name = productName.val();
  let lastname = contactLastName.val();
  let price = productPrice.val();
  let desc = productDesc.val();
  //   console.log(name, price, desc);

  let product = {
    name,
    lastname,
    price,
    desc,
  };
  try {
    const response = await axios.post(API, product);
    console.log(response);
    Toastify({
      text: response.statusText,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      // onClick: function(){} // Callback after click
    }).showToast();
    modal.modal("hide");

    render(API);
    productName.val("");
    productPrice.val("");
    productDesc.val("");
    contactLastName.val("");
  } catch (e) {
    console.log(e);
    Toastify({
      text: e.response.statusText,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      // onClick: function(){} // Callback after click
    }).showToast();
  }
}

btnSave.on("click", addProduct);

let infinite = new Waypoint.Infinite({
  element: $(".infinite-container")[0],
});
