// Strateji Arayüzü (Şablon)
class DiscountStrategy {
    calculate(total) {
        throw new Error("Bu metot ezilmelidir (override).");
    }
}

// Somut Stratejiler
class BlackFridayStrategy extends DiscountStrategy {
    calculate(total) {
        return total * 0.50; // %50 indirim
    }
}

class StudentStrategy extends DiscountStrategy {
    calculate(total) {
        return total * 0.90; // %10 indirim
    }
}

class NoDiscountStrategy extends DiscountStrategy {
    calculate(total) {
        return total;
    }
}

module.exports = { DiscountStrategy, BlackFridayStrategy, StudentStrategy, NoDiscountStrategy };
