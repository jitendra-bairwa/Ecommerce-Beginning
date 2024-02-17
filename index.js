import { products } from "./db/products.js";
// console.log(products);

const productContainer = document.getElementById('products');
// console.log(productContainer);

for (let product of products) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card', 'card-vertical', 'd-flex', 'direction-column', 'relative', 'shadow');

    /** Image Container */
    const imageContainer = document.createElement("div");
    imageContainer.classList.add('card-image-container');

    const image = document.createElement('img');
    image.classList.add('card-image');
    image.setAttribute("src", product.img);
    image.setAttribute("alt", product.name);
    imageContainer.appendChild(image);

    /** Card Details Container */
    const cardDetailsContainer = document.createElement('div');
    cardDetailsContainer.classList.add('card-details');

    const brandContainer = document.createElement("div");
    brandContainer.classList.add('card-title');
    brandContainer.innerText = product.brand
    cardDetailsContainer.appendChild(brandContainer);

    /** Card Description Container */
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("card-description");

    /** Product Name */
    const name = document.createElement('p');
    name.classList.add('card-des');
    name.innerText = product.name;
    descriptionContainer.appendChild(name);

    /** Product Price */
    const price = document.createElement("p");
    price.classList.add("card-price",'d-flex','align-end','gap-sm');
    price.innerText = `Rs. ${product.newPrice}`;

    const oldPrice = document.createElement('span');
    oldPrice.classList.add('price-strike-through');
    oldPrice.innerText = `Rs. ${product.oldPrice}`
    price.appendChild(oldPrice);

    const discount = document.createElement('span');
    discount.classList.add('discount');
    discount.innerText = `(${product.discount}% OFF)`;
    price.appendChild(discount);

    descriptionContainer.appendChild(price);
    cardDetailsContainer.appendChild(descriptionContainer);


    /** CTA Button */
    const ctaButton = document.createElement("div");
    ctaButton.classList.add('cta-btn');
    const cartButton = document.createElement("button");
    cartButton.classList.add(
        'button',
        'btn-primary',
        'btn-icon',
        'cart-btn',
        'd-flex',
        'align-center',
        'justify-center',
        'gap',
        'cursor',
        'btn-margin'
    )


    const cart = document.createElement('span');
    cart.classList.add('material-symbols-outlined');
    cart.innerText = "shopping_cart";
    cartButton.appendChild(cart);

    const buttonText = document.createElement('span');
    buttonText.innerText = "Add To Cart";
    cartButton.appendChild(buttonText);

    ctaButton.appendChild(cartButton);
    cardDetailsContainer.appendChild(ctaButton);



    cardContainer.appendChild(imageContainer);
    cardContainer.appendChild(cardDetailsContainer);
    productContainer.appendChild(cardContainer);
}