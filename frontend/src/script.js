//Botões de transição de page//
$("#homeBtn").click(function () {
  $("#homepage").fadeIn();
  $("#bottom").css("margin-top", "990px");
  $(".defaultbg").css("background-size", "contain");

  $("#registerPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#cartPG").fadeOut();
  $("#productPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#contactPG").fadeOut();
  $("#aboutUsPG").fadeOut();
});

$("#mainHeaderLogo").click(function () {
  $("#homepage").fadeIn();
  $("#bottom").css("margin-top", "990px");
  $(".defaultbg").css("background-size", "contain");

  $("#registerPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#cartPG").fadeOut();
  $("#productPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#contactPG").fadeOut();
  $("#aboutUsPG").fadeOut();
});

$("#catalogueBtn").click(function () {
  getProducts();

  $("#catalogue").fadeIn();

  $("#bottom").css("margin-top", "150px");
  $(".defaultbg").css("background-size", "cover");
  $("#homepage").fadeOut();
  $("#registerPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#cartPG").fadeOut();
  $("#productPG").fadeOut();
  $("#contactPG").fadeOut();
  $("#aboutUsPG").fadeOut();
});

$("#contactBtn").click(function () {
  $("html, body").animate({
    scrollTop: $("#bottom").offset().top,
  });
});

$("#product1").click(function () {
  $("#productPG").fadeIn();
  $("#hackerProductPG").css("display", "flex");

  $("#runnerProductPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#homepage").fadeOut();
  $("#registerPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#cartPG").fadeOut();
  $("#contactPG").fadeOut();
  $("#aboutUsPG").fadeOut();
});

$("#product2").click(function () {
  $("#productPG").fadeIn();
  $("#runnerProductPG").css("display", "flex");

  $("#hackerProductPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#homepage").fadeOut();
  $("#registerPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#cartPG").fadeOut();
  $("#contactPG").fadeOut();
  $("#aboutUsPG").fadeOut();
});

$("#aboutUsBtn").click(function () {
  $("#aboutUsPG").fadeIn();
  $("#bottom").css("margin-top", "200px");
  $(".defaultbg").css("background-size", "cover");

  $("#productPG").fadeOut();
  $("#hackerProductPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#homepage").fadeOut();
  $("#registerPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#cartPG").fadeOut();
  $("#contactPG").fadeOut();
});

$("#profileLogo").click(function () {
  $("#loginPG").fadeIn();
  $("#bottom").css("margin-top", "1000px");
  $(".defaultbg").css("background-size", "cover");

  $("#aboutUsPG").fadeOut();
  $("#productPG").fadeOut();
  $("#hackerProductPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#homepage").fadeOut();
  $("#registerPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#cartPG").fadeOut();
  $("#contactPG").fadeOut();
});

$("#loginButtonSubtext").click(function () {
  $("#registerPG").fadeIn();

  $(".defaultbg").css("background-size", "cover");
  $("#aboutUsPG").fadeOut();
  $("#productPG").fadeOut();
  $("#hackerProductPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#homepage").fadeOut();
  $("#loginPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#cartPG").fadeOut();
  $("#contactPG").fadeOut();
});

$("#cartLogo").click(function () {
  clearBoxOnly()
  const cartBox = document.getElementById("cart-box");
  cart.forEach((element) => {
    console.log(element);
    const newCartItem = `<div id="product-placeholder">
                            <img src="${element.image}" width="300px" height="180px">
                          <div id="product-data">
                            <p>${element.name}</p>
                            <p>Quantidade: 1</p>
                            <p>Preço:R$ ${element.price}</p>
                          </div>
                        </div> `;
    cartBox.innerHTML += newCartItem;
  });
  subtotal();
  $("#cartPG").fadeIn();

  $("#bottom").css("margin-top", "270px");
  $(".defaultbg").css("background-size", "cover");
  $("#registerPG").fadeOut();
  $("#homepage").fadeOut();
  $("#loginPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#productPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#contactPG").fadeOut();
  $("#aboutUsPG").fadeOut();
});

$("#loginSubmit").click(function () {
  $("#profilePG").fadeIn();
  
  $(".defaultbg").css("background-size", "cover");
  $("#bottom").css("margin-top", "25px");

  $("#registerPG").fadeOut();
  $("#homepage").fadeOut();
  $("#cartPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#productPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#contactPG").fadeOut();
  $("#aboutUsPG").fadeOut();
});

$("#registerSubmit").click(function () {
  $("#profilePG").fadeIn();
  $(".defaultbg").css("background-size", "cover");
  $("#bottom").css("margin-top", "25px");

  $("#registerPG").fadeOut();
  $("#homepage").fadeOut();
  $("#cartPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#productPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#contactPG").fadeOut();
  $("#aboutUsPG").fadeOut();
});

$("#profileData").click(function () {
  $("#profilePG").fadeIn();
  $(".defaultbg").css("background-size", "cover");
  $("#bottom").css("margin-top", "25px");

  $("#registerPG").fadeOut();
  $("#homepage").fadeOut();
  $("#cartPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#productPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#contactPG").fadeOut();
  $("#aboutUsPG").fadeOut();
})

$("#profileQuit").click(function () {
  $("#homepage").fadeIn();
  $("#bottom").css("margin-top", "990px");
  $(".defaultbg").css("background-size", "contain");

  $("#registerPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#cartPG").fadeOut();
  $("#productPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#contactPG").fadeOut();
  $("#aboutUsPG").fadeOut();
})

$("#profileOrderBtn").click(function () {

})

$("#profileCartBtn").click(function () {
  $("#cartPG").fadeIn();

  $("#bottom").css("margin-top", "270px");
  $(".defaultbg").css("background-size", "cover");
  $("#registerPG").fadeOut();
  $("#homepage").fadeOut();
  $("#loginPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#productPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#contactPG").fadeOut();
  $("#aboutUsPG").fadeOut();
})

$(".learnMoreBtn").click(function () {
  $("#aboutUsPG").fadeIn();
  $("#bottom").css("margin-top", "200px");
  $(".defaultbg").css("background-size", "cover");
  $("html, body").animate({
    scrollTop: $(".header").offset().top,
  });

  $("#registerPG").fadeOut();
  $("#homepage").fadeOut();
  $("#cartPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#productPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#contactPG").fadeOut();
  $("#profilePG").fadeOut();
});

// load products

async function getProducts() {
  const response = await fetch(`http://localhost:3000/read`);
  const products = await response.json();
  let counter = 0;
  const showcase = document.getElementById("showcase");
  while (showcase.firstChild) {
    showcase.removeChild(showcase.firstChild);
  }
  products.forEach((element) => {

    const newProduct = `<div id='product${element.id}' sql-id='${element.id}' onclick="addcart(${element.id})">
      <img id="productImage${element.id}" width="250" height="175" src='${element.image}'/>
      <p id="productName${element.id}" class="itemTitle">${element.name}</p>
      <p id="productPrice${element.id}"class="itemPrice">R$ ${element.price}</p>
      <p id="productDelivery"class="itemDiscount">Sem Frete</p>
      <p id="product${element.id}" class="itemDescription">${element.description}</p>
      </div> `;
    showcase.innerHTML += newProduct;
  });
}

// Shipping Cart
let cart = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

localStorage.setItem("products", JSON.stringify(cart));
const data = JSON.parse(localStorage.getItem("products"));

async function addcart(id) {
  const response = await fetch(`http://localhost:3000/read/addcart?id=${id}`);
  const product = await response.json();
  console.log(product[0]);
  cart.push(product[0]);
  localStorage.setItem("products", JSON.stringify(cart));
  console.log("carrinho", cart);
  const cartBox = document.getElementById("cart-box");

  cart.forEach((element) => {
    console.log(element);
    const newCartItem = `<div id="product-placeholder">
                            <img src="${element.image}" width="300px" height="180px">
                          <div id="product-data">
                            <p>${element.name}</p>
                            <p>Quantidade: 1</p>
                            <p>Preço: R$ ${element.price}</p>
                          </div>
                        </div> `;
    cartBox.innerHTML += newCartItem;
    subtotal();
  });
}
function subtotal() {
  let subtotal = "";
  console.log(cart.length);
  if (cart.length != 0) {
    subtotal = cart.reduce(
      function (acumulador, valorAtual, index, array) {
        return {price:parseFloat(acumulador.price) + parseFloat(valorAtual.price)};
      },
      { price: 0 }
    );
  }

  showedSubtotal = document.getElementById("subtotal");
  console.log("subtotal", subtotal);
  if(subtotal != ""){
    showedSubtotal.innerHTML = `R$ ${subtotal.price.toFixed(2)}`;
  }else{
    showedSubtotal.innerHTML = subtotal;
  }

}
const limpezaPesada = document.querySelector("#clear-cart");
const cartBox = document.querySelector("#cart-box");
console.log(limpezaPesada);
limpezaPesada.addEventListener("click", clear);

function clearBoxOnly(){
    while (cartBox.firstChild) {
      cartBox.removeChild(cartBox.firstChild);
    }
  }
function clear() {
  console.log("clear");
  localStorage.clear();
  cart = [];
  while (cartBox.firstChild) {
    cartBox.removeChild(cartBox.firstChild);
  }
  subtotal();
}

// session control

const jwtDecode = require("./jwt-decode");

let accessToken = '';
let api_url = '/api';
const divLogin = document.getElementById("div-login");
const formLogin = document.getElementById("form-login");
// const buttonGetUsers = document.getElementById("button-get-users");
// const buttonDeleteToken = document.getElementById("button-delete-token");
const pStatus = document.getElementById("login-status");

let showLoginPanel = (bShow) => {
  bShow ? divLogin.style.display = "flex" : divLogin.style.display = "none";
}

formLogin.onsubmit = async e => {
  e.preventDefault();
  const loginDetails = await login({ email: formLogin.email.value, password: formLogin.password.value });
  console.log(loginDetails);
  if (loginDetails.error) {
    pStatus.innerText = loginDetails.error;
    return;
  }
  accessToken = loginDetails.accessToken;
  const jwtDecoded = jwtDecode(accessToken);
  pStatus.innerHTML = `Conectado!`;
  showLoginPanel(false);
}

async function login(data) {
  //console.log(JSON.stringify(data));
  const res = await fetch(`${api_url}/auth/login`, {
    method: 'POST',
    credentials:'include',
    cache:'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await res.json();
}
