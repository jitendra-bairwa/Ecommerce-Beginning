import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";

const cartContainer = document.getElementById('cart');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

cartContainer.addEventListener('click', (event) => {
    cart = cart.filter(({ _id }) => _id !== event.target.dataset.id);
    cartContainer.innerHTML = "";
    createProductCard(cart, cartContainer, findProductInCart, 'cart');
    localStorage.setItem('cart', JSON.stringify(cart));
})

createProductCard(cart, cartContainer, findProductInCart, 'cart');