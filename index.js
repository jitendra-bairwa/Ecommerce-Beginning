import { createProductCard } from "./createProductCard.js";
import { products } from "./db/products.js";
import { findProductInCart } from "./utils/findProductInCart.js";

const productContainer = document.getElementById('products');
const filterContainer = document.querySelector('.side-bar');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

productContainer.addEventListener('click', (event) => {
    let clickProdId = event.target.dataset.id;
    const isProductInCart = findProductInCart(cart, clickProdId);
    // console.log(clickProdId);
    // console.log(isProductInCart);

    if (!isProductInCart) {
        const productToAddToCart = products.filter(({ _id }) => _id === clickProdId);
        cart = [...cart, ...productToAddToCart];
        localStorage.setItem('cart', JSON.stringify(cart));
        // console.log(cart);

        const cartButton = event.target;
        cartButton.innerHTML = "Go To Cart <span class='material-icons-outlined'>shopping_cart</span>"
    } else {
        location.href = "./cart.html";
    }
})

filterContainer.addEventListener('click', (event) => {
    const updatedProducts = products.filter(({ rating }) => rating >= event.target.dataset.rating);
    productContainer.innerHTML = "";
    createProductCard(updatedProducts, productContainer, findProductInCart, 'products');

})

createProductCard(products, productContainer, findProductInCart, 'products');