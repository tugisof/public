const { NoDiscountStrategy } = require('./DiscountStrategy');

class ShoppingCart {
    constructor() {
        this.items = [];
        this.discountStrategy = new NoDiscountStrategy(); // Varsayılan strateji
        this.observers = []; // Abone listesi
    }

    // Observer Metotları
    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        const total = this.items.reduce((sum, price) => sum + price, 0);
        this.observers.forEach(obs => obs.update(total, this.items.length));
    }

    // Strategy Metodu
    setDiscountStrategy(strategy) {
        this.discountStrategy = strategy;
    }

    // Sepet İşlemleri
    addItem(price) {
        this.items.push(price);
        this.notifyObservers(); // Ürün eklenince abonelere haber ver
    }

    calculateFinalTotal() {
        const rawTotal = this.items.reduce((sum, price) => sum + price, 0);
        // İndirim hesaplamasını stratejiye devret
        return this.discountStrategy.calculate(rawTotal); 
    }
}

module.exports = ShoppingCart;
