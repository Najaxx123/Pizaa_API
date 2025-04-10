const $pizzasWrapper = document.querySelector(".pizzas-wrapper");
// console.log($addToCartBtn);

function createCard(cardData) {
  const pizzaCard = document.createElement("div"); //
  const pizzaPicture = document.createElement("img"); //
  const cartPicture = document.createElement("img");
  const pizzaInfo = document.createElement("ul");
  const pizzaName = document.createElement("p");
  const pizzaPrice = document.createElement("p");
  const addToCartBtn = document.createElement("span");
  const selectQuantityBtn = document.createElement("span");

  pizzaCard.classList.add("pizza-item");

  pizzaPicture.classList.add("pizza-picture");
  pizzaPicture.setAttribute("src", cardData.image);
  pizzaPicture.setAttribute("alt", cardData.category.name);

  pizzaInfo.classList.add("pizza-infos");

  addToCartBtn.classList.add("add-to-cart-btn");
  addToCartBtn.textContent = "Ajouter au panier";

  cartPicture.src = "./images/carbon_shopping-cart-plus.svg";

  selectQuantityBtn.classList.add("hidden");

  pizzaPrice.classList.add("pizza-price");
  pizzaPrice.textContent = "$" + cardData.price;
  // pizzaPrice.setAttribute("")

  pizzaName.classList.add("pizza-name");
  pizzaName.textContent = cardData.name;

  pizzaCard.appendChild(pizzaPicture);
  pizzaCard.appendChild(addToCartBtn);
  addToCartBtn.appendChild(cartPicture);
  pizzaCard.appendChild(pizzaInfo);

  pizzaInfo.appendChild(pizzaName);
  pizzaInfo.appendChild(pizzaPrice);

  return pizzaCard
}

console.log(createCard);

console.log("===");
console.log("===");
console.log("===");

fetch("http://10.59.122.27:3000/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (result) {
    console.log("c'est bon my bibou");
    result.forEach(function (pizza) {
      const $pizzaCard = createCard(pizza);

      $pizzasWrapper.appendChild($pizzaCard);

      const $addToCartBtn = $pizzaCard.querySelector(".add-to-cart-btn")
      const $selectQuantityBtn = $pizzaCard.querySelector(".select-quantity-btn")
      $addToCartBtn.addEventListener("click", function() {
        console.log(pizza)
        $addToCartBtn.classList.add("hidden");
        $selectQuantityBtn.classList.remove("hidden")
      })

      // const $addToCartBtn = document.querySelectorAll(".add-to-cart-btn");

    // $addToCartBtn.forEach(function (e) {
    //   console.log(e);
    //   e.addEventListener("click", function () {
    //     console.log("click");
    //     $addToCartBtn.classList.add("hidden");
    //     selectQuantityBtn.classList.remove("hidden");
    //   });
    // });
    });

  })
  .catch(function (err) {
    console.error("une erreur est survenue", err);
  });

// console.log($addToCartBtn);
