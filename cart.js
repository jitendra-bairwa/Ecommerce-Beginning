// import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";
import { createHorizontalProductCard } from "./createHorizontalProductCard.js";

const cartContainer = document.getElementById('cart');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

cartContainer.addEventListener('click', (event) => {
    cart = cart.filter(({ _id }) => _id !== event.target.dataset.id);
    cartContainer.innerHTML = "";
    createHorizontalProductCard(cart, cartContainer, findProductInCart, 'cart');
    localStorage.setItem('cart', JSON.stringify(cart));
})

// createProductCard(cart, cartContainer, findProductInCart, 'cart');
createHorizontalProductCard(cart, cartContainer, findProductInCart, 'cart');