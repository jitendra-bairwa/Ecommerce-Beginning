import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";

const cartContainer = document.getElementById('cart');

let cart = JSON.parse(localStorage.getItem('cart')) || [];


createProductCard(cart,cartContainer,findProductInCart,'cart');