// const $addToCartBtn = document.querySelector(".add-to-cart-btn");

function createCard(cardData) {
  const pizzaCard = document.querySelector("div");
  const pizzaPicture = document.querySelector("img");
  const pizzaName = document.querySelector("h2");
  const pizzaPrice = document.querySelector("p");

  pizzaCard.classList.add("pizza-card");

  pizzaPicture.classList.add("pizza-image");
  pizzaPicture.setAttribute("src", cardData.image);
  pizzaPicture.setAttribute("alt", cardData.catgory.name);

  pizzaPrice.classList.add("pizza-price");

  pizzaName.classList.add("pizza-name");
}

console.log(createCard)

fetch("http://10.59.122.150:3000/products")
  .then(function (res) {
    return res.json();
})
  .then(function (result) {
    console.log(result);
})
  .catch(function (err) {
    console.error("une erreur est survenue", err);
});


// console.log($addToCartBtn);



// $addToCartBtn.addEventListener("click", function () {
//   console.log("click");
//   $addToCartBtn.classList.add(".on-click-add");
//   $addToCartBtn.classList.remove(".add-to-cart-btn");
// });
