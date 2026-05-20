// Temel Hesaplayıcı Arayüzü (Arayüz simülasyonu)
class BaseCalculator {
    calculate(total) {
        return total;
    }
}

// İndirim Sarmalayıcı (Decorator) Ana Sınıfı
class DiscountDecorator extends BaseCalculator {
    constructor(calculator) {
        super();
        this.calculator = calculator;
    }

    calculate(total) {
        return this.calculator.calculate(total);
    }
}

// Yüzdelik İndirim Decorator'ı
class PercentageDiscount extends DiscountDecorator {
    constructor(calculator, percentage) {
        super(calculator);
        this.percentage = percentage;
    }

    calculate(total) {
        let currentTotal = super.calculate(total);
        return currentTotal - (currentTotal * (this.percentage / 100));
    }
}

// Sabit Miktar İndirim Decorator'ı
class FixedDiscount extends DiscountDecorator {
    constructor(calculator, amount) {
        super(calculator);
        this.amount = amount;
    }

    calculate(total) {
        let currentTotal = super.calculate(total);
        return Math.max(0, currentTotal - this.amount);
    }
}

module.exports = { BaseCalculator, PercentageDiscount, FixedDiscount };
