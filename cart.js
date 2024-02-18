import { createProductCard } from "./createProductCard.js";

const cartContainer = document.getElementById('cart');

let cart = JSON.parse(localStorage.getItem('cart')) || [];


createProductCard(cart,cartContainer);