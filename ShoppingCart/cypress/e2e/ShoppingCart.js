let cart = [];

function addToCart(product, quantity) {
    for(let i = 0; i < quantity; i++) {
        cart.push(product);
    }
}

function getTotalPrice() {
    let totalPrice = 0;
    for(let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price;
    }
    return totalPrice.toFixed(2);
}
 
function clearCart() {
    cart = [];
}

function calculateSalesTax(taxRate) {
    let totalTax = 0;
    for(let i = 0; i < cart.length; i++) {
        totalTax += cart[i].price * taxRate / 100;
    }
    return totalTax.toFixed(2);
}

function getTotalPriceWithTax(taxRate) {
    let totalPriceAfterDiscount = getTotalPrice() - calculateDiscount();
    let totalTax = calculateSalesTax(taxRate);
    return (parseFloat(totalPriceAfterDiscount) + parseFloat(totalTax)).toFixed(2);
}

function calculateDiscount() {
    let totalDiscount = 0;
    for(let i = 0; i < cart.length; i++) {
        if(cart[i].name === "Dove Soap" && (i + 1) % 3 === 0) {
            totalDiscount += cart[i].price;
        }
    }
    return totalDiscount.toFixed(2);
}

function calculateOffer() {
    let totalDiscount = 0;
    let doveCount = 0;
    for(let i = 0; i < cart.length; i++) {
        if(cart[i].name === "Dove Soap") {
            doveCount++;
            if(doveCount % 2 === 0) {
                totalDiscount += cart[i].price * 0.5;
            }
        }
    }
    return totalDiscount.toFixed(2);
}

function getTotalPriceWithDiscount(taxRate) {
    let totalPriceAfterDiscount = getTotalPrice() - calculateOffer();
    let totalTax = calculateSalesTaxAfterDiscount(taxRate);
    let totalPriceWithTax = totalPriceAfterDiscount + parseFloat(totalTax);
    return totalPriceWithTax.toFixed(2);
}

function calculateSalesTaxAfterDiscount(taxRate) {
    let totalPriceBeforeDiscounts = getTotalPrice();
    let globalDiscount = calculateGlobalDiscount();
    let offerDiscount = calculateOffer();
    let totalPriceAfterDiscounts = totalPriceBeforeDiscounts - globalDiscount - offerDiscount;
    let totalTax = totalPriceAfterDiscounts * taxRate / 100;
    return totalTax.toFixed(2);
}


function calculateGlobalDiscount() {
    let totalPrice = getTotalPrice();
    if (totalPrice >= 500) {
        return totalPrice * 0.2;
    }
    return 0;
}

function totalPriceAfterDiscount(taxRate) {
    let totalPrice = getTotalPrice();
    let totalDiscount = calculateGlobalDiscount();
    let totalPriceAfterDiscount = totalPrice - totalDiscount;
    let totalTax = (totalPriceAfterDiscount * taxRate) / 100;
    return (totalPriceAfterDiscount + totalTax).toFixed(2);
}

function calculateSalesTax2(taxRate) {
    let totalPriceAfterDiscount = getTotalPrice() - calculateGlobalDiscount();
    let totalTax = (totalPriceAfterDiscount * taxRate) / 100;
    return totalTax.toFixed(2);
}

module.exports = { 
    addToCart, 
    getTotalPrice, 
    clearCart, 
    calculateSalesTax, 
    getTotalPriceWithTax, 
    getTotalPriceWithDiscount, 
    calculateDiscount, 
    calculateOffer, 
    calculateSalesTaxAfterDiscount, 
    calculateGlobalDiscount, 
    totalPriceAfterDiscount,  
    calculateSalesTax2
};