## Faz 2: Structural (Yapısal) Örüntüler
* **Kullanılan Örüntü 1:** Decorator
* **Nerede Kullanıldı:** `src/DiscountDecorator.js` dosyasında, indirim hesaplama sisteminde uygulandı.
* **Neden Seçildi:** Bir sepete aynı anda birden fazla indirim (Örn: Öğrenci + Kupon) uygulanabilmesi gerekiyordu. Miras (inheritance) kullanmak sınıf patlamasına yol açacağından sarmalama (composition) tercih edildi.
* **Ne Kazanıldı:** Mevcut `BaseCalculator` sınıfı değiştirilmeden, çalışma zamanında (runtime) esnek bir şekilde yeni indirim kombinasyonları oluşturma yeteneği kazanıldı.

* **Kullanılan Örüntü 2:** Facade
* **Nerede Kullanıldı:** `src/CheckoutFacade.js` dosyasında, sipariş tamamlama sürecinde.
* **Neden Seçildi:** Sipariş onaylandığında Stok, Ödeme ve Fatura gibi bağımsız sistemlerin sırayla çağrılması gerekiyordu. Bu karmaşıklığı istemci (client) kodundan gizlemek için seçildi.
* **Ne Kazanıldı:** İstemci kodu sadece `completeCheckout()` metodunu çağırarak tüm süreci yönetebilir hale geldi, alt sistem bağımlılıkları azaltıldı.
