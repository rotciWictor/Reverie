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
  clearBoxOnly();
  const cartBox = document.getElementById("cart-box");
  let counterPG = 0
  cart.forEach((element) => {
    console.log(element);
    const newCartItem = `<div id="product-placeholder${element.id}" class="product-placeholder">
                            <img src="${element.image}" width="300px" height="180px">
                          <div id="product-data">
                            <p>${element.name}</p>
                            <p>Quantidade: 1</p>
                            <p>Preço: R$ ${element.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            <input id="remove${element.id}" class="remove" type="button" value="Remover Produto" onclick='removeProduct(${element.id})'>
                            <input id="nd-item${element.id}" type="hidden" value="${counterPG++}" name="cart">
                          </div>
                        </div>`;
    cartBox.innerHTML += newCartItem;
  });
  subtotal();
  counterPG = 0
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
  const showcase = document.getElementById("showcase");
  while (showcase.firstChild) {
    showcase.removeChild(showcase.firstChild);
  }
  products.forEach((element) => {

    const newProduct = `<div id='product${element.id}' sql-id='${element.id}' onclick="addcart(${element.id})">
      <img id="productImage${element.id}" width="250" height="175" src='${element.image}'/>
      <p id="productName${element.id}" class="itemTitle">${element.name}</p>
      <p id="productPrice${element.id}"class="itemPrice">R$ ${element.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
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

let cartSign = document.querySelector("#cart-sign");

function cartAtlzr() {
  cartSign.innerHTML = cart.length;
}
cartAtlzr();
localStorage.setItem("products", JSON.stringify(cart));
const data = JSON.parse(localStorage.getItem("products"));

async function addcart(id) {
  const response = await fetch(`http://localhost:3000/read/addcart?id=${id}`);
  const product = await response.json();
  console.log(product[0]);
  cart.push(product[0]);
  localStorage.setItem("products", JSON.stringify(cart));
  console.log("carrinho", cart);
  cartAtlzr();
  console.log(cart.length);
  const cartBox = document.getElementById("cart-box");
  let counter = 0
  cart.forEach((element) => {
    console.log(element);
    const newCartItem = `<div id="product-placeholder${element.id}" class="product-placeholder">
                            <img src="${element.image}" width="300px" height="180px">
                          <div id="product-data">
                            <p>${element.name}</p>
                            <p>Quantidade: 1</p>
                            <p>Preço: R$ ${element.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            <input id="remove${element.id}" class="remove" type="button" value="Remover Produto" onclick='removeProduct(${element.id})'>
                            <input id="nd-item${element.id}" type="hidden" value="${counter++}" name="cart">
                          </div>
                        </div>`;
    cartBox.innerHTML += newCartItem;
    subtotal();
  
  });
  counter = 0
}
function subtotal() {
  let subtotal = "";
  console.log(cart.length);
  if (cart.length != 0) {
    subtotal = cart.reduce(
      function (acumulador, valorAtual, index, array) {
        return {
          price: parseFloat(acumulador.price) + parseFloat(valorAtual.price),
        };
      },
      { price: 0 }
    );
  }

  showedSubtotal = document.getElementById("subtotal");
  console.log("subtotal", subtotal);
  if (subtotal != "") {
    showedSubtotal.innerHTML = `R$ ${subtotal.price.toFixed(2)}`;
  } else {
    showedSubtotal.innerHTML = subtotal;
  }
}
const limpezaPesada = document.querySelector("#clear-cart");
const cartBox = document.querySelector("#cart-box");
console.log(limpezaPesada);
limpezaPesada.addEventListener("click", clear);

function clearBoxOnly() {
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
  cartAtlzr();
  subtotal();
}
function removeProduct(id){
console.log('remover')
const newCart = cart.filter((product) =>  product.id != id)
localStorage.setItem("products", JSON.stringify(newCart));
cart = newCart
const placeholder = document.querySelector(`#product-placeholder${id}`)
cartBox.removeChild(placeholder)
console.log(newCart)

cartAtlzr();
subtotal();
}

// session control

const email = document.querySelector('#email')
const password = document.querySelector('#password')
const btnLogin = document.querySelector('#loginSubmit')

async function login(){
  const loginData = {
      email : email.value,
      password: password.value
  }
console.log(email.value,password.value)
  const myHeaders = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(loginData),
      headers:{
          "content-type" : "application/json"
      }
  }

  console.log("logou");
  let result
  try {
      const test = await fetch('http://localhost:3000/clients/login/',myHeaders)
      result = await test.json()
  } catch (error) {
      
  }
  accessToken = result.accessToken
  const sessions = await control(accessToken)

  console.log(accessToken)
  return result
}
addEventListener('click',login)

async function registration(){
fetch


}