# E-Ticaret Sepeti - Yazılım Tasarım Örüntüleri

[cite_start]**Seçilen Konu:** D (E-Ticaret Sepeti) [cite: 14, 15]
[cite_start]**Gerekçe:** İndirim sistemlerindeki esneklik eksikliğinin, Açık/Kapalı prensibini (OCP) anlamak için ideal bir örnek olması. [cite: 16]

## [cite_start]Projenin Amacı [cite: 81]
Bu proje, indirim hesaplamaları içine gömülmüş (hardcoded) ve yeni kurallar eklemeye kapalı olan bir alışveriş sepeti sistemini, yapısal ve davranışsal tasarım örüntüleri kullanarak esnek, genişletilebilir ve bakımı kolay bir hale getirmeyi amaçlamaktadır.

## [cite_start]Kullanılan Tasarım Örüntüleri [cite: 82]
1. **Factory Method (Creational):** İndirim nesnelerinin yaratım mantığını merkezileştirmek için.
2. **Decorator (Structural):** Birden fazla indirimi (Örn: Öğrenci + Kupon) birbirinin üzerine sarmalayabilmek için.
3. **Facade (Structural):** Sipariş onayı sırasındaki karmaşık alt sistem (Ödeme, Stok, Fatura) iletişimini tek bir metoda indirmek için.
4. **Strategy (Behavioral):** İndirim hesaplama algoritmasını çalışma zamanında değiştirebilmek ve OCP'yi sağlamak için.
5. **Observer (Behavioral):** Sepet güncellendiğinde bağlı bileşenleri (UI, Log) otomatik haberdar etmek için.

## [cite_start]Mimari Diyagram [cite: 83]
*(UML diyagramınızı `docs/diagrams/` klasörüne ekleyip buraya bağlayabilirsiniz)*
![Mimari Diyagram](docs/diagrams/final-architecture.png)

## [cite_start]Nasıl Çalıştırılır? [cite: 84]
Proje standart Node.js (JavaScript) kullanılarak yazılmıştır. Herhangi bir dış paket bağımlılığı yoktur.

1. Repoyu klonlayın: `git clone <repo-url>`
2. İlgili dizine gidin: `cd tasarim-oruntuleri-odevi`
3. Uygulamayı test etmek için basitçe dosyaları çalıştırabilirsiniz (Örn: `node src/ShoppingCart.js`)
