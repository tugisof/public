// Karmaşık Alt Sistemler
class InventorySystem { checkStock(items) { return true; } updateStock(items) { console.log("Stok güncellendi."); } }
class PaymentSystem { processPayment(amount) { console.log(`${amount} TL ödeme alındı.`); return true; } }
class InvoiceSystem { generateInvoice() { console.log("Fatura kesildi."); } }

// Facade (Ön Yüz) Sınıfı
class CheckoutFacade {
    constructor() {
        this.inventory = new InventorySystem();
        this.payment = new PaymentSystem();
        this.invoice = new InvoiceSystem();
    }

    completeCheckout(cartItems, totalAmount) {
        if (!this.inventory.checkStock(cartItems)) {
            throw new Error("Stok yetersiz!");
        }
        
        if (this.payment.processPayment(totalAmount)) {
            this.inventory.updateStock(cartItems);
            this.invoice.generateInvoice();
            console.log("Sipariş başarıyla tamamlandı!");
            return true;
        }
        return false;
    }
}

module.exports = { CheckoutFacade };
