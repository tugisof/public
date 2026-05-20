# Tasarım Örüntüleri Dokümantasyonu

## Faz 1: Creational (Yaratımsal) Örüntüler
* **Kullanılan Örüntü:** Factory Method
* **Nerede Kullanıldı:** `src/DiscountFactory.js` dosyasında, indirim nesnelerinin yaratım sürecinde uygulandı.
* **Neden Seçildi:** İndirim tipleri (BlackFriday, Student, vb.) eklendikçe alışveriş sepeti sınıfının içi `if-else` bloklarıyla doluyordu. Nesne yaratma sorumluluğunu (hangi sınıfın `new` ile çağrılacağı kararını) ana iş mantığından ayırıp merkezi bir sınıfa devretmek için seçildi.
* **Ne Kazanıldı:** Sepet sınıfı artık indirim nesnelerinin nasıl üretildiğini bilmiyor. Yeni bir indirim türü geldiğinde sadece `DiscountFactory` güncelleniyor, böylece kodun bakımı kolaylaştı.

## Faz 2: Structural (Yapısal) Örüntüler
* **Kullanılan Örüntü 1:** Decorator
* **Nerede Kullanıldı:** `src/DiscountDecorator.js` dosyasında, indirim hesaplama sisteminde uygulandı.
* **Neden Seçildi:** Bir sepete aynı anda birden fazla indirim (Örn: Öğrenci + Kupon) uygulanabilmesi gerekiyordu. Sınıfları birbirinden miras almak (inheritance) altından kalkılamaz bir karmaşaya yol açacağından, indirimleri birbirinin üzerine sarmalama (composition) yöntemi tercih edildi.
* **Ne Kazanıldı:** Ana hesaplama sınıfı değiştirilmeden, çalışma zamanında (runtime) esnek bir şekilde sayısız yeni indirim kombinasyonu oluşturma yeteneği kazanıldı.

* **Kullanılan Örüntü 2:** Facade
* **Nerede Kullanıldı:** `src/CheckoutFacade.js` dosyasında, sipariş tamamlama (checkout) sürecinde uygulandı.
* **Neden Seçildi:** Sipariş onaylandığında Stok kontrolü, Ödeme onayı ve Fatura kesimi gibi bağımsız alt sistemlerin sırayla çağrılması gerekiyordu. Bu karmaşıklığı sepet üzerinden (istemci kodundan) gizlemek için seçildi.
* **Ne Kazanıldı:** İstemci kodu sadece tek bir `completeCheckout()` metodunu çağırarak tüm süreci yönetebilir hale geldi, sınıflar arası karmaşık bağımlılıklar azaltıldı.
