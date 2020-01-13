function calculateCartTotal(products) {
   const total = products.reduce((acc, el) => {
        acc += el.product.price * el.quantity
        return acc;
    }, 0)
    const cartTotal = ((total * 100) / 100).toFixed(2); // we multiply by 100 to remove any rounding error 
    const stripeTotal = Number((total * 100).toFixed(2));

    return { cartTotal, stripeTotal }
}

export default calculateCartTotal;