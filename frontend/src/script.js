// const showcase = $('#showcase')

//Botões de transição de page//
$("#homeBtn").click(function () {
  $("#homepage").fadeIn();

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
  $("#contactPG").fadeIn();

  $("#catalogue").fadeOut();
  $("#homepage").fadeOut();
  $("#registerPG").fadeOut();
  $("#loginPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#cartPG").fadeOut();
  $("#productPG").fadeOut();
  $("#aboutUsPG").fadeOut();
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

$("#cartLogo").click(function () {
  $("#cartPG").fadeIn();

  $("#aboutUsPG").fadeOut();
  $("#productPG").fadeOut();
  $("#hackerProductPG").fadeOut();
  $("#catalogue").fadeOut();
  $("#homepage").fadeOut();
  $("#registerPG").fadeOut();
  $("#profilePG").fadeOut();
  $("#loginPG").fadeOut();
  $("#contactPG").fadeOut();
});

$("#loginButtonSubtext").click(function () {
  $("#registerPG").fadeIn();

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

// load products
// const products = [];

async function getProducts() {
  const response = await fetch(`http://localhost:3000/read`);
  const products = await response.json();

  products.forEach((element) => {
    const newProduct = `<div>
    <img id="product3" width="250" height="175" src='${element.imagem}'/>
    <p class="itemTitle">${element.nome}</p>
    <p class="itemPrice">${element.preco}</p>
    <p class="itemDiscount">12% off</p>
    <p class="itemDiscount">Sem Frete</p>
    <p class="itemAddCartText">
        Adicionar ao carrinho
        <button class="itemAddCartButton">+</button>
        qntd
        <button class="itemAddCartButton">-</button>
    </p>
    <p class="itemDescription">${element.descricao}</p>
    </div>`;

    const showcase = document.getElementById("showcase");
    showcase.innerHTML += newProduct;
  });
}
