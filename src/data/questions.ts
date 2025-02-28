import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Üç saniye kuralı nedir?",
    options: [
      "Öndeki araçla aranızdaki uygun takip mesafesini gösterir",
      "Frenlerin çalışıp çalışmadığını kontrol etmek için araç kapalıyken ayak frenini kaç saniye uygulamanız gerektiğini gösterir",
      "Şehirde sürerken arabanızın ne kadar süre rölantide kalabileceğini gösterir",
      "Yol kenarına ne kadar park edebileceğinizi gösterir"
    ],
    correctAnswer: 0,
    explanation: "Üç saniye kuralı, öndeki araçla aranızda güvenli bir mesafe bırakmanızı sağlar. Öndeki araç belirli bir noktadan geçtiğinde sayın ve aynı noktaya ulaşmanız en az 3 saniye sürmelidir.",
    image: "https://images.unsplash.com/photo-1590593162201-f67611a18b87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    text: "Yaya geçidine yaklaşırken ne yapmalısınız?",
    options: [
      "Her zaman yaya olup olmadığına bakılmaksızın durmalısınız",
      "Yavaşlamalı ve yayalar için durmaya hazır olmalısınız",
      "Yaya görünmüyorsa hızınızı korumalısınız",
      "Yayaları uyarmak için korna çalmalısınız"
    ],
    correctAnswer: 1,
    explanation: "Yaya geçidine yaklaşırken her zaman yavaşlamalı ve geçmek için bekleyen veya geçmekte olan yayalar varsa durmaya hazır olmalısınız.",
    image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    text: "Türkiye'de sürücüler için yasal kan alkol sınırı nedir?",
    options: [
      "0.08%",
      "0.05%",
      "0.02%",
      "0.00%"
    ],
    correctAnswer: 3,
    explanation: "Türkiye'de profesyonel sürücüler (taksi, minibüs, otobüs, kamyon vb.) için alkol sınırı 0.00%'dir. Diğer sürücüler için ise 0.05%'dir.",
    image: "https://images.unsplash.com/photo-1567489308684-9c88b8aaaa12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    text: "Hangi durumda başka bir aracı sağdan geçebilirsiniz?",
    options: [
      "Öndeki araç sola dönüş sinyali verdiğinde",
      "Çok şeritli bir yolda aynı yönde giden trafik sıkışık olduğunda",
      "Acele ettiğinizde ve diğer sürücü çok yavaş gittiğinde",
      "A ve B şıkları"
    ],
    correctAnswer: 3,
    explanation: "Öndeki araç sola dönüş sinyali verdiğinde veya çok şeritli bir yolda aynı yönde giden trafik sıkışık olduğunda sağdan geçebilirsiniz.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    text: "Bu trafik işaretini gördüğünüzde ne yapmalısınız?",
    options: [
      "Hızınızı azaltın ve durmaya hazır olun",
      "Mevcut hızınızı koruyun",
      "Güvenli bir şekilde birleşmek için hızınızı artırın",
      "Hemen şerit değiştirin"
    ],
    correctAnswer: 0,
    explanation: "Bu işaret bir tehlike işaretidir. Hızınızı azaltmalı ve gerekirse durmaya hazır olmalısınız.",
    image: "https://images.unsplash.com/photo-1566847438217-76e82d383f84?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 6,
    text: "Türkiye'de yerleşim yerlerindeki varsayılan hız sınırı nedir?",
    options: [
      "30 km/s",
      "50 km/s",
      "70 km/s",
      "90 km/s"
    ],
    correctAnswer: 1,
    explanation: "Türkiye'de yerleşim yerlerindeki varsayılan hız sınırı, aksi belirtilmedikçe 50 km/s'dir.",
    image: "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 7,
    text: "Sisli havalarda araç kullanırken ne yapmalısınız?",
    options: [
      "Uzun far kullanın",
      "Kısa far kullanın",
      "Dörtlü flaşörleri yakın",
      "Öndeki aracı yakından takip edin"
    ],
    correctAnswer: 1,
    explanation: "Sisli havalarda kısa far kullanmalısınız. Uzun farlar sisten yansıyarak görüşü daha da azaltır.",
    image: "https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 8,
    text: "Şeritler arasındaki kesintisiz beyaz çizgi ne anlama gelir?",
    options: [
      "Şerit değiştirmek serbesttir",
      "Şerit değiştirmek yasaktır",
      "Şerit otobüsler için ayrılmıştır",
      "Şerit sadece dönüş içindir"
    ],
    correctAnswer: 1,
    explanation: "Şeritler arasındaki kesintisiz beyaz çizgi, şerit değiştirmenin veya çizgiyi geçmenin yasak olduğunu gösterir.",
    image: "https://images.unsplash.com/photo-1503416997304-7f8bf166c121?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 9,
    text: "Türkiye'de ne zaman farları kullanmak zorunludur?",
    options: [
      "Sadece gece",
      "Gece ve kötü görüş koşullarında",
      "Her zaman, gece ve gündüz",
      "Sadece otoyollarda"
    ],
    correctAnswer: 1,
    explanation: "Türkiye'de farları gece ve görüşün yetersiz olduğu kötü hava koşullarında (sis, yağmur, kar vb.) kullanmak zorunludur.",
    image: "https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 10,
    text: "Aracınız otoyolda arızalanırsa ne yapmalısınız?",
    options: [
      "Aracınızda kalın ve yardım bekleyin",
      "Reflektör yerleştirin, güvenli bir yere geçin ve yardım çağırın",
      "Sorunu hemen tamir etmeye çalışın",
      "Başka bir sürücüyü durdurmaya çalışın"
    ],
    correctAnswer: 1,
    explanation: "Aracınız otoyolda arızalanırsa, aracınızı mümkünse emniyet şeridine çekin, reflektör yerleştirin, güvenli bir mesafede bekleyin ve yardım çağırın.",
    image: "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 11,
    text: "Kavşakta trafik ışığı yeşil yandığında ne yapmalısınız?",
    options: [
      "Hemen hareket etmelisiniz",
      "Kavşakta yaya veya araç olmadığından emin olduktan sonra hareket etmelisiniz",
      "Korna çalarak diğer araçları uyarmalısınız",
      "Durup tekrar kırmızı yanmasını beklemelisiniz"
    ],
    correctAnswer: 1,
    explanation: "Trafik ışığı yeşil yandığında, kavşakta yaya veya araç olmadığından emin olduktan sonra hareket etmelisiniz. Güvenlik her zaman önceliklidir.",
    image: "https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 12,
    text: "Aşağıdakilerden hangisi emniyet kemerinin doğru kullanımıdır?",
    options: [
      "Kemer vücudunuza gevşek bir şekilde takılmalıdır",
      "Kemer omzunuzun altından geçmelidir",
      "Kemer kalçalarınızın üzerinden ve göğsünüzün ortasından geçmelidir",
      "Kısa mesafelerde emniyet kemeri takmanıza gerek yoktur"
    ],
    correctAnswer: 2,
    explanation: "Emniyet kemeri doğru şekilde takıldığında, kalçalarınızın üzerinden ve göğsünüzün ortasından geçmelidir. Bu, bir kaza anında vücudunuzu en iyi şekilde korur.",
    image: "https://images.unsplash.com/photo-1546446393-a5b0c621d71d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 13,
    text: "Aşağıdakilerden hangisi araç lastiğinin aşınmış olduğunu gösterir?",
    options: [
      "Diş derinliği 1.6 mm'den az",
      "Lastik yanakları düz",
      "Lastik üzerinde düzensiz aşınma desenleri",
      "Yukarıdakilerin hepsi"
    ],
    correctAnswer: 3,
    explanation: "Diş derinliğinin 1.6 mm'den az olması, lastik yanaklarının düz olması ve lastik üzerinde düzensiz aşınma desenleri, lastiğin aşınmış olduğunu ve değiştirilmesi gerektiğini gösterir.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 14,
    text: "Aracınızın yakıt verimliliğini artırmak için aşağıdakilerden hangisini yapmalısınız?",
    options: [
      "Lastik basıncını önerilen seviyede tutun",
      "Gereksiz ağırlıkları araçtan çıkarın",
      "Sabit bir hızda sürün ve ani hızlanmalardan kaçının",
      "Yukarıdakilerin hepsi"
    ],
    correctAnswer: 3,
    explanation: "Yakıt verimliliğini artırmak için lastik basıncını önerilen seviyede tutmak, gereksiz ağırlıkları araçtan çıkarmak ve sabit bir hızda sürmek önemlidir.",
    image: "https://images.unsplash.com/photo-1540036965287-9310fdb0f6bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 15,
    text: "Aşağıdakilerden hangisi kış aylarında güvenli sürüş için önemlidir?",
    options: [
      "Kış lastikleri kullanmak",
      "Araçta kar zinciri bulundurmak",
      "Fren mesafesinin artacağını hesaba katmak",
      "Yukarıdakilerin hepsi"
    ],
    correctAnswer: 3,
    explanation: "Kış aylarında güvenli sürüş için kış lastikleri kullanmak, araçta kar zinciri bulundurmak ve fren mesafesinin artacağını hesaba katmak önemlidir.",
    image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];