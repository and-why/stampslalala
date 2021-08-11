export default function calcToPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally;
    return cartItem.product.price + tally;
  }, 0);
}
