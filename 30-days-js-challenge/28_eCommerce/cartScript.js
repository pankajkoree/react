const getDataFromAddToCart = JSON.parse(
  localStorage.getItem("selectedProduct")
);

const cartProductImage = document.querySelector(".cart-item-image");
const cartProductTitle = document.querySelector(".cart-item-title");
const cardProductPrice = document.querySelector(".cart-item-price");
const quantity = document.querySelector(".quantity-input");
const plusQuantity = document.querySelector(".quantity-btn2");
const minusQuantity = document.querySelector(".quantity-btn1");
const totalItems = document.querySelector(".total-items");
const totalPrice = document.querySelector(".total-price");
const buy = document.querySelector(".checkout-btn");
const remove = document.querySelector(".remove-btn");

cartProductImage.src = getDataFromAddToCart.image;
cartProductTitle.textContent = getDataFromAddToCart.title;
cardProductPrice.textContent = "$" + getDataFromAddToCart.price;
totalItems.textContent = quantity.value;
totalPrice.textContent = "$" + getDataFromAddToCart.price;

quantity.addEventListener("click", () => {
  console.log(quantity.value);
  cardProductPrice.textContent =
    "$" + getDataFromAddToCart.price * parseInt(quantity.value);
});
plusQuantity.addEventListener("click", () => {
  quantity.value++;
  console.log(quantity.value);
  cardProductPrice.textContent =
    "$" + getDataFromAddToCart.price * parseInt(quantity.value);
  totalItems.textContent = quantity.value;
  totalPrice.textContent =
    "$" + getDataFromAddToCart.price * parseInt(quantity.value);
});

minusQuantity.addEventListener("click", () => {
  if (parseInt(quantity.value) === 0) {
    console.log("quantity can't be less than zero");
    cardProductPrice.textContent =
      "$" + getDataFromAddToCart.price * parseInt(quantity.value);
    totalItems.textContent = quantity.value;
    totalPrice.textContent =
      "$" + getDataFromAddToCart.price * parseInt(quantity.value);
  } else {
    quantity.value--;
    console.log(quantity.value);
    cardProductPrice.textContent =
      "$" + getDataFromAddToCart.price * parseInt(quantity.value);
    totalItems.textContent = quantity.value;
    totalPrice.textContent =
      "$" + getDataFromAddToCart.price * parseInt(quantity.value);
  }
});

buy.addEventListener("click", () => {
  if (parseInt(quantity.value) === 0) {
    alert("quantity can't be less than zero");
  } else {
    console.log(
      `You bought the item : ${getDataFromAddToCart.title}\nPrice : ${getDataFromAddToCart.price}`
    );
  }
});

remove.addEventListener("click", () => {
  localStorage.removeItem("selectedProduct");
  cartProductImage.style.display = "none";
  cartProductTitle.textContent = "No items in cart";
  cardProductPrice.textContent = "$0.00";
  quantity.value = 0;
  totalItems.textContent = "0";
  totalPrice.textContent = "$0.00";
    console.log("no items in cart");
});
