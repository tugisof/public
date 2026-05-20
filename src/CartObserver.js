// Gözlemci (Observer) Arayüzü
class CartObserver {
    update(cartTotal, itemCount) {
        throw new Error("update() metodu implement edilmeli.");
    }
}

// Somut Gözlemciler (UI Güncelleyici ve Logger)
class UINotifier extends CartObserver {
    update(cartTotal, itemCount) {
        console.log(`[UI GÜNCELLEME]: Sepette ${itemCount} ürün var. Ara toplam: ${cartTotal} TL`);
    }
}

class CartLogger extends CartObserver {
    update(cartTotal, itemCount) {
        console.log(`[LOG]: Sepet durumu değişti. Tarih: ${new Date().toISOString()}`);
    }
}

module.exports = { UINotifier, CartLogger };
