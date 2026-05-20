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

        // KÖTÜ TASARIM: Her yeni indirim kuralında bu metodun değişmesi gerekir
        if (this.discountType === 'BlackFriday') {
            total = total * 0.50; 
        } else if (this.discountType === 'Student') {
            total = total * 0.90; 
        } else if (this.discountType === 'Coupon100') {
            total = total - 100; 
            if (total < 0) total = 0;
        }

        return total;
    }
}

module.exports = ShoppingCart;
