class BlackFridayDiscount { apply(total) { return total * 0.50; } }
class StudentDiscount { apply(total) { return total * 0.90; } }
class Coupon100Discount { apply(total) { return Math.max(0, total - 100); } }
class NoDiscount { apply(total) { return total; } }

class DiscountFactory {
    static createDiscount(type) {
        switch(type) {
            case 'BlackFriday': return new BlackFridayDiscount();
            case 'Student': return new StudentDiscount();
            case 'Coupon100': return new Coupon100Discount();
            default: return new NoDiscount();
        }
    }
}

module.exports = { DiscountFactory };
