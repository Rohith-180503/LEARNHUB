export function getCartPricing(cartTotal, cartCount) {
  const subtotal = Number(cartTotal) || 0;
  const discount = subtotal >= 100 ? subtotal * 0.08 : 0;
  const platformFee = cartCount > 0 ? 2.99 : 0;
  const totalPayable = Math.max(subtotal - discount + platformFee, 0);

  return {
    subtotal,
    discount,
    platformFee,
    totalPayable,
  };
}
