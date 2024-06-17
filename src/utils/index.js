/* Function that sums all item prices */
export const calcTotal = (items) => {
    /* create an array with all item prices */
    const prices = items.map((item) => {
        return item.price * item.quantity
    })
    return prices.reduce((a, b) => { return a + b })
}

/* Function that calcs taxed based on the total price of items */
export const calcTaxes = (total) => {
    const taxValue = 0.13;
    let taxed = total * taxValue
    return taxed.toFixed(2);
}

/* Function that calc the total bill, including item price, taxes and delivery */
export const calcBill = (itemsTotal, totalTaxex, delivery) => {
    let total = itemsTotal + Number(totalTaxex) + delivery
    return total.toFixed(2)
}

