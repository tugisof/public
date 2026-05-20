## Kendi Tespitlerim
1. Açık/Kapalı Prensibi (OCP) İhlali: Yeni bir indirim türü eklendiğinde `ShoppingCart` sınıfının içindeki `calculateTotal` metodunu değiştirmek zorundayız. [cite_start]Bu kod değişime açık, gelişime kapalıdır.
2. Tek Sorumluluk Prensibi (SRP) İhlali: Sepet sınıfı hem ürünleri tutmaktan hem de indirim matematiğini hesaplamaktan sorumlu.
3. [cite_start]Katı Bağımlılık (Hardcoded Logic): İndirim oranları ve türleri kodun içine `if-else` zincirleriyle gömülmüş[cite: 15].
4. Genişletilebilirlik Eksikliği: Aynı anda birden fazla indirim uygulamak (örneğin hem öğrenci hem kupon) bu switch-case/if-else yapısıyla neredeyse imkansız.
5. Test Edilebilirlik Zorluğu: İndirim mantığını, alışveriş sepetinden bağımsız olarak izole bir şekilde test edemiyoruz.

## Yapay Zeka (AI) Karşılaştırması
Kullanılan AI Aracı: Gemini
[cite_start]Sorgu (Prompt): "Bu kodda hangi tasarım sorunlarını görüyorsun? Hangi tasarım örüntüleri bu sorunları çözebilir? Her sorun için kısa bir açıklama yaz." [cite: 27]

AI'ın Gördükleri vs. Benim Gördüklerim:
AI da benim tespit ettiğim gibi OCP ve SRP ihlallerine odaklandı. [cite_start]Çözüm olarak nesne yaratımı için Factory [cite: 33][cite_start], davranışsal aşama için Strategy [cite: 74] örüntülerini önerdi. [cite_start]Ben ek olarak birden fazla indirim senaryosunu (Decorator ihtiyacını [cite: 54][cite_start]) vurgulamıştım, AI da bunu yapısal faz için mantıklı buldu.


