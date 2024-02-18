export const findProductInCart = (cart,prodId) =>{
    const isProductCart = cart && (cart.length > 0) && cart.some(({ _id }) => _id === prodId);
    return isProductCart;
}