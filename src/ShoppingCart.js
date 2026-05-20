class ShoppingCart {
    constructor() {
        this.items = [];
        this.discountType = null;
    }

    addItem(price) {
        this.items.push(price);
    }

    setDiscountType(type) {
        this.discountType = type; 
    }

    calculateTotal() {
        let total = this.items.reduce((sum, price) => sum + price, 0);

       
        if (this.discountType === 'BlackFriday') {
            total = total * 0.50; // %50 indirim
        } else if (this.discountType === 'Student') {
            total = total * 0.90; // %10 indirim
        } else if (this.discountType === 'Coupon100') {
            total = total - 100; // 100 TL sabit indirim
            if (total < 0) total = 0;
        }

        return total;
    }
}

module.exports = ShoppingCart;
