const user = "Victor";
const date = Date.now();
let img =""
const imgPath = `./src/img/products/${img}` ;


async function productRegistration() {
const product = document.querySelector("#product-name").value;
const description = document.querySelector("#description").value;
const price = document.querySelector("#price").value;
const btn = document.querySelector("#button");
  console.log(product, description, price, date, user);


  const registration = {
      id:2,
      name :product,
      description : description,
      price: price,
      creationDate:date,
      creationUser:user,
      atualizationDate:date,
      userAtualization:user,
      image: imgPath,
  }

  const myHeaders = {
      method: "POST",
      body: JSON.stringify(registration),
      headers:{
          "content-type" : "application/json"
      }
  }
  try {
      const require = await fetch('http://localhost:3000/create',myHeaders)
      result = await require.json()

  } catch (error) {
      console.error(error)
  }
  clear();
  return console.log("OK");
}

function clear() {
    $("#name").val = "";
    $("#description").val = "";
    $("price").val = "";
    $("#image").val = "";
  }


// btn.addEventListener("click",productRegistration)
