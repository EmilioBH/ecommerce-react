export const totalPrice = (products) => {
  return products.reduce((acc, prod) => {
    return acc + prod.price
  }, 0)
}
