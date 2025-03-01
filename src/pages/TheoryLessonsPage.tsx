import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Lock, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Star, 
  Award, 
  Clock, 
  Users, 
  ArrowRight,
  Shield,
  AlertCircle
} from 'lucide-react';
import FAQ from '../components/FAQ';

interface LessonCategory {
  title: string;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  description: string;
  isLocked: boolean;
  duration: string;
}

const TheoryLessonsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('general');
  
  // Refs for category elements
  const categoryRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };
  
  // Effect to handle scrolling when a category is expanded
  useEffect(() => {
    if (expandedCategory && categoryRefs.current[expandedCategory]) {
      // Use setTimeout to ensure the DOM has updated before scrolling
      setTimeout(() => {
        const element = categoryRefs.current[expandedCategory];
        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollTop = window.pageYOffset + rect.top - 80; // Reduced offset to position higher
          
          window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  }, [expandedCategory]);

  const lessonCategories: LessonCategory[] = [
    {
      title: "Genel Kavramlar ve Kurallar",
      lessons: [
        {
          id: "general-concepts",
          title: "Genel Kavramlar",
          description: "Trafik kuralları ve sürüş ile ilgili temel kavramlar",
          isLocked: false,
          duration: "15 dk"
        },
        {
          id: "b-license-vehicles",
          title: "B Ehliyeti ile Sürülebilecek Araçlar",
          description: "B sınıfı ehliyet ile kullanabileceğiniz araç tipleri",
          isLocked: false,
          duration: "10 dk"
        },
        {
          id: "following-distance",
          title: "Takip Mesafesi ile İlgili Bilinmesi Gerekenler",
          description: "Güvenli takip mesafesi ve 3 saniye kuralı",
          isLocked: true,
          duration: "12 dk"
        },
        {
          id: "license-revocation",
          title: "Ehliyetin Geri Alınmasına Neden Olan Durumlar",
          description: "Ehliyetinizin iptal edilmesine neden olabilecek ihlaller",
          isLocked: true,
          duration: "18 dk"
        },
        {
          id: "exit-rule",
          title: "Çıkış Kuralı Nedir?",
          description: "Kavşaklardan çıkış yaparken uygulanması gereken kurallar",
          isLocked: true,
          duration: "8 dk"
        },
        {
          id: "right-rule",
          title: "Sağ Kuralı Nedir?",
          description: "Sağdan gelen araçlara yol verme kuralı ve uygulamaları",
          isLocked: true,
          duration: "10 dk"
        }
      ]
    },
    {
      title: "Sürüş Teknikleri ve Güvenlik",
      lessons: [
        {
          id: "highway-driving",
          title: "Otoyolda Araç Sürerken Dikkat Edilmesi Gerekenler",
          description: "Otoyolda güvenli sürüş için önemli noktalar",
          isLocked: true,
          duration: "20 dk"
        },
        {
          id: "roundabouts",
          title: "Dönel Kavşaklarla İlgili Dikkat Edilmesi Gerekenler",
          description: "Dönel kavşaklarda doğru sürüş teknikleri",
          isLocked: true,
          duration: "15 dk"
        },
        {
          id: "night-driving",
          title: "Karanlıkta Araç Sürerken Dikkat Edilmesi Gerekenler",
          description: "Gece sürüşünde görüş ve güvenlik önlemleri",
          isLocked: true,
          duration: "18 dk"
        },
        {
          id: "three-second-rule",
          title: "3 Saniye Kuralı",
          description: "Güvenli takip mesafesini belirlemek için kullanılan 3 saniye kuralı",
          isLocked: true,
          duration: "8 dk"
        },
        {
          id: "defensive-offensive-driving",
          title: "Defansif ve Ofansif Sürüş",
          description: "Farklı sürüş stillerinin avantajları ve dezavantajları",
          isLocked: true,
          duration: "22 dk"
        }
      ]
    },
    {
      title: "Araç Bilgisi ve Teknik Konular",
      lessons: [
        {
          id: "car-equipment",
          title: "Otomobilde Bulundurulması Gereken Ekipmanlar",
          description: "Yasal olarak araçta bulundurulması gereken ekipmanlar",
          isLocked: true,
          duration: "12 dk"
        },
        {
          id: "car-dimensions",
          title: "Otomobilin Genişliği ve Uzunluğu",
          description: "Standart araç ölçüleri ve trafikteki önemi",
          isLocked: true,
          duration: "10 dk"
        },
        {
          id: "front-rear-wheel-drive",
          title: "Önden ve Arkadan Çekişli Araçlar",
          description: "Farklı çekiş sistemlerinin özellikleri ve sürüş teknikleri",
          isLocked: true,
          duration: "15 dk"
        },
        {
          id: "vehicle-inspection",
          title: "Araç Muayenesi – Besiktning",
          description: "İsveç'te araç muayenesi süreci ve dikkat edilmesi gerekenler",
          isLocked: true,
          duration: "18 dk"
        },
        {
          id: "exhaust-catalytic",
          title: "Egzoz – Katalizatör",
          description: "Egzoz sistemi ve katalizörün çalışma prensibi",
          isLocked: true,
          duration: "14 dk"
        },
        {
          id: "battery-electrical",
          title: "Akü ve Elektrik Sistemleri",
          description: "Araç elektrik sistemleri ve akü bakımı",
          isLocked: true,
          duration: "16 dk"
        },
        {
          id: "dashboard-lights",
          title: "Gösterge Panelindeki Işıklar ve Anlamları",
          description: "Araç gösterge panelindeki uyarı ışıklarının anlamları",
          isLocked: true,
          duration: "20 dk"
        },
        {
          id: "car-lights",
          title: "Otomobilin Işıkları",
          description: "Araç aydınlatma sistemleri ve doğru kullanımı",
          isLocked: true,
          duration: "15 dk"
        },
        {
          id: "brake-systems",
          title: "Fren Sistemleri",
          description: "ABS, ESP gibi fren ve güvenlik sistemleri",
          isLocked: true,
          duration: "18 dk"
        },
        {
          id: "car-parts",
          title: "Otomobilin Parçaları",
          description: "Temel araç parçaları ve işlevleri",
          isLocked: true,
          duration: "25 dk"
        },
        {
          id: "car-tires",
          title: "Otomobilin Lastikleri",
          description: "Lastik tipleri, bakımı ve değişim zamanları",
          isLocked: true,
          duration: "16 dk"
        },
        {
          id: "engine",
          title: "Motor",
          description: "Motor tipleri ve çalışma prensipleri",
          isLocked: true,
          duration: "22 dk"
        }
      ]
    },
    {
      title: "Trafik Kuralları ve Düzenlemeler",
      lessons: [
        {
          id: "stopping-parking",
          title: "Durmak ve Park Etmek",
          description: "Doğru durma ve park etme kuralları",
          isLocked: true,
          duration: "15 dk"
        },
        {
          id: "weight-calculations",
          title: "Ağırlık Hesaplamaları",
          description: "Araç ve yük ağırlık hesaplamaları",
          isLocked: true,
          duration: "14 dk"
        },
        {
          id: "train-crossings",
          title: "Trenler ve Tren Yolu Geçişleri",
          description: "Tren yolu geçişlerinde uyulması gereken kurallar",
          isLocked: true,
          duration: "12 dk"
        },
        {
          id: "alcohol-calculation",
          title: "Alkol Oranı Nasıl Hesaplanır?",
          description: "Kandaki alkol oranı hesaplama ve yasal sınırlar",
          isLocked: true,
          duration: "16 dk"
        },
        {
          id: "traffic-signs",
          title: "İsveç'te Kullanılan Trafik İşaretleri: Tam Liste",
          description: "İsveç'teki tüm trafik işaretleri ve anlamları",
          isLocked: true,
          duration: "30 dk"
        },
        {
          id: "road-lines-markings",
          title: "Yol Çizgileri ve İşaretleri",
          description: "Yol üzerindeki çizgi ve işaretlerin anlamları",
          isLocked: true,
          duration: "18 dk"
        },
        {
          id: "parking-signs",
          title: "Park İşaretleri Nasıl Okunur?",
          description: "Park işaretlerini doğru okuma ve yorumlama",
          isLocked: true,
          duration: "15 dk"
        },
        {
          id: "traffic-fines",
          title: "Trafik Cezaları: Hangi Ceza Ne Kadar?",
          description: "İsveç'teki trafik cezaları ve miktarları",
          isLocked: true,
          duration: "20 dk"
        },
        {
          id: "vehicle-towing",
          title: "Aracınızın Çekilmesine Neden Olan Durumlar",
          description: "Aracınızın çekilmesine neden olabilecek ihlaller",
          isLocked: true,
          duration: "12 dk"
        }
      ]
    },
    {
      title: "Özel Durumlar ve Güvenlik",
      lessons: [
        {
          id: "children-in-car",
          title: "Otomobilde Çocuklarla İlgili Bilinmesi Gerekenler",
          description: "Çocukların araçta güvenli taşınması",
          isLocked: true,
          duration: "18 dk"
        },
        {
          id: "trailer-caravan",
          title: "Treyler ve Karavanla İlgili Bilinmesi Gerekenler",
          description: "Römork ve karavan kullanımı ile ilgili kurallar",
          isLocked: true,
          duration: "20 dk"
        },
        {
          id: "towing-another-vehicle",
          title: "Başka Bir Aracı Çekerken Nelere Dikkat Edilmeli?",
          description: "Araç çekme kuralları ve teknikleri",
          isLocked: true,
          duration: "15 dk"
        },
        {
          id: "cargo-rules",
          title: "Yük ile İlgili Bilinmesi Gerekenler",
          description: "Araçta yük taşıma kuralları ve güvenlik önlemleri",
          isLocked: true,
          duration: "14 dk"
        },
        {
          id: "disabled-people",
          title: "Görme ve Duyma Engelli İnsanlar",
          description: "Engelli yayalara karşı sorumluluklar",
          isLocked: true,
          duration: "12 dk"
        },
        {
          id: "accidents",
          title: "Kazalarla İlgili Bilinmesi Gerekenler",
          description: "Kaza durumunda yapılması gerekenler",
          isLocked: true,
          duration: "22 dk"
        },
        {
          id: "road-construction",
          title: "Yol Yapım Çalışmaları",
          description: "Yol çalışması olan bölgelerde sürüş kuralları",
          isLocked: true,
          duration: "10 dk"
        },
        {
          id: "environment",
          title: "Çevre ile İlgili Bilinmesi Gerekenler",
          description: "Çevre dostu sürüş teknikleri",
          isLocked: true,
          duration: "15 dk"
        },
        {
          id: "children-in-traffic",
          title: "Trafikte Çocuklar",
          description: "Çocukların trafikteki davranışları ve sürücü sorumlulukları",
          isLocked: true,
          duration: "16 dk"
        }
      ]
    },
    {
      title: "Sürücü Psikolojisi ve Beceriler",
      lessons: [
        {
          id: "stopping-distances",
          title: "Durma – Fren ve Reaksiyon Mesafeleri",
          description: "Fren mesafesi ve reaksiyon süresi hesaplamaları",
          isLocked: true,
          duration: "18 dk"
        },
        {
          id: "elderly-young-drivers",
          title: "Yaşlı Sürücüler ve Genç Sürücüler",
          description: "Farklı yaş gruplarının sürüş özellikleri",
          isLocked: true,
          duration: "15 dk"
        },
        {
          id: "speed-time-distance",
          title: "Hız – Zaman ve Mesafe Hesaplamaları",
          description: "Temel fizik hesaplamaları ve trafikteki uygulamaları",
          isLocked: true,
          duration: "20 dk"
        },
        {
          id: "field-of-vision",
          title: "Görüş Açısı ve Görüş Mesafesi",
          description: "Sürücünün görüş alanı ve güvenli sürüş",
          isLocked: true,
          duration: "14 dk"
        },
        {
          id: "experienced-inexperienced",
          title: "Deneyimli ve Deneyimsiz Sürücülerin Farkları",
          description: "Deneyim seviyesinin sürüş üzerindeki etkileri",
          isLocked: true,
          duration: "16 dk"
        },
        {
          id: "alcohol-medications",
          title: "Alkollü İçecekler ve İlaçlar",
          description: "Alkol ve ilaçların sürüş kabiliyeti üzerindeki etkileri",
          isLocked: true,
          duration: "22 dk"
        }
      ]
    }
  ];

  const filteredCategories = lessonCategories.map(category => {
    const filteredLessons = category.lessons.filter(lesson => 
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...category,
      lessons: filteredLessons
    };
  }).filter(category => category.lessons.length > 0);

  const faqs = [
    {
      question: 'Teori derslerine ne kadar süre erişebilirim?',
      answer: 'Tam erişim satın aldığınızda, tüm teori derslerine ömür boyu erişim elde edersiniz. Tekrarlayan ücret yoktur ve istediğiniz kadar tekrar edebilirsiniz.'
    },
    {
      question: 'Dersler hangi dillerde mevcut?',
      answer: 'Teori derslerimiz şu anda Türkçe, İsveççe ve İngilizce dillerinde mevcuttur. Yakında daha fazla dil eklenecektir.'
    },
    {
      question: 'Teori dersleri güncel mi?',
      answer: 'Evet, tüm teori derslerimiz düzenli olarak güncellenmektedir. İsveç trafik kurallarındaki değişiklikleri yakından takip ediyor ve içeriğimizi buna göre güncelliyoruz.'
    },
    {
      question: 'Sadece teori derslerine mi erişebilirim?',
      answer: 'Tam erişim satın aldığınızda, teori derslerinin yanı sıra pratik sorular, deneme sınavları ve kişiselleştirilmiş çalışma planına da erişim elde edersiniz. Tüm bu kaynaklar, sınavınızı ilk denemede geçmenize yardımcı olmak için tasarlanmıştır.'
    }
  ];

  const testimonials = [
    {
      name: 'Mehmet Yılmaz',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      testimonial: 'İsveç Ehliyeti\'nin teori derslerini kullanmadan önce iki kez sınavda başarısız oldum. Dersler o kadar açıklayıcı ve kapsamlıydı ki, üçüncü denemede hiç zorlanmadan geçtim. Özellikle trafik işaretleri ve yol çizgileri konusundaki dersler çok yardımcı oldu.',
      passed: 'İlk denemede geçti'
    },
    {
      name: 'Ayşe Demir',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      testimonial: 'Teori derslerindeki görsel anlatımlar ve pratik örnekler sayesinde karmaşık konuları bile kolayca anladım. Sınavda hiç zorlanmadım ve %95 puanla geçtim. Kesinlikle tavsiye ederim!',
      passed: '%95 puanla geçti'
    },
    {
      name: 'Ali Kaya',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      rating: 4,
      testimonial: 'İsveç\'te ehliyet almak isteyenler için mükemmel bir kaynak. Özellikle trafik işaretleri ve yol çizgileri konusundaki dersler çok detaylı ve anlaşılır. Sınavı ilk denemede geçmemi sağladı.',
      passed: 'İkinci denemede geçti'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">İsveç Ehliyet Sınavı Teori Dersleri</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Kapsamlı teori dersleri ile İsveç ehliyet sınavına hazırlanın ve ilk denemede geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/pricing" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              onClick={scrollToTop}
            >
              Tam Erişim Al
            </Link>
            <Link 
              to="/demo" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
              onClick={scrollToTop}
            >
              Ücretsiz Demo Dene
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-blue-600">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">45+</p>
              <p className="text-gray-600 font-medium">Kapsamlı Ders</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-green-500">
              <p className="text-3xl md:text-4xl font-bold text-green-500 mb-2">20+</p>
              <p className="text-gray-600 font-medium">Saat İçerik</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-purple-500">
              <p className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">%98</p>
              <p className="text-gray-600 font-medium">Geçme Oranı</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-yellow-500">
              <p className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">4.9/5</p>
              <p className="text-gray-600 font-medium">Öğrenci Puanı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Lessons Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-6 text-center">Teori Dersleri</h2>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                İsveç ehliyet sınavını geçmek için ihtiyacınız olan tüm teorik bilgiler. Derslerimiz uzman eğitmenler tarafından hazırlanmıştır.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto mb-12">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Ders ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Enhanced CTA Banner */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg mb-10 flex flex-col md:flex-row items-center justify-between shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="mb-6 md:mb-0 md:mr-6 text-white">
                  <h3 className="text-2xl font-bold mb-3">Tam Erişim ile Tüm Derslerin Kilidini Açın</h3>
                  <p className="text-blue-100 text-lg">
                    Sadece 299 SEK karşılığında tüm derslere sınırsız erişim elde edin ve sınavınızı ilk denemede geçin.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                      <span className="text-blue-50">45+ Kapsamlı Ders</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                      <span className="text-blue-50">Sınırsız Erişim</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                      <span className="text-blue-50">30 Gün İade Garantisi</span>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/pricing" 
                  className="whitespace-nowrap bg-white text-blue-700 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-md"
                  onClick={scrollToTop}
                >
                  Tam Erişim Al <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </Link>
              </div>
              
              {/* Lesson Categories */}
              {filteredCategories.length > 0 ? (
                <div className="space-y-6">
                  {filteredCategories.map((category, categoryIndex) => (
                    <div 
                      key={categoryIndex} 
                      className="border border-gray-200 rounded-lg overflow-hidden"
                      ref={el => categoryRefs.current[category.title] = el}
                    >
                      <button
                        className={`w-full flex justify-between items-center p-4 text-left font-semibold text-lg ${
                          expandedCategory === category.title ? 'bg-blue-50 text-blue-700' : 'bg-white text-gray-800'
                        }`}
                        onClick={() => toggleCategory(category.title)}
                      >
                        <span>{category.title}</span>
                        {expandedCategory === category.title ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                      
                      {expandedCategory === category.title && (
                        <div className="p-4 bg-white">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.lessons.map((lesson, lessonIndex) => (
                              <div 
                                key={lessonIndex} 
                                className={`border rounded-lg p-4 ${
                                  lesson.isLocked ? 'bg-gray-50' : 'bg-white'
                                }`}
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                                  {lesson.isLocked ? (
                                    <Lock className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
                                  ) : (
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 ml-2" />
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{lesson.description}</p>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-500 flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {lesson.duration}
                                  </span>
                                  {lesson.isLocked ? (
                                    <Link 
                                      to="/pricing" 
                                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                                      onClick={scrollToTop}
                                    >
                                      Kilidi Aç
                                    </Link>
                                  ) : (
                                    <Link 
                                      to={`/lessons/${lesson.id}`} 
                                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                                      onClick={scrollToTop}
                                    >
                                      Derse Git
                                    </Link>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-600 mb-4">Aramanızla eşleşen ders bulunamadı.</p>
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="text-blue-600 font-medium hover:text-blue-800"
                  >
                    Tüm dersleri göster
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Neden Bizim Teori Derslerimiz?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İsveç Ehliyeti teori dersleri, sınavınızı ilk denemede geçmeniz için ihtiyacınız olan her şeyi sunar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:-translate-y-1">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kapsamlı İçerik</h3>
              <p className="text-gray-600">
                İsveç sürücü sınavının tüm konularını kapsayan 45+ ders ile eksiksiz hazırlanın.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:-translate-y-1">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Uzman Eğitmenler</h3>
              <p className="text-gray-600">
                Tüm dersler, İsveç'te sürücü eğitimi konusunda uzman eğitmenler tarafından hazırlanmıştır.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:-translate-y-1">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kanıtlanmış Başarı</h3>
              <p className="text-gray-600">
                Öğrencilerimizin %98'i sınavı ilk denemede geçiyor. Başarınız için tasarlandı.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Başarı Hikayeleri</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İsveç Ehliyeti ile İsveç sürücü sınavını geçen öğrencilerden dinleyin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-green-600">{testimonial.passed}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sınavınızı Geçmeye Hazır mısınız?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Tam erişim ile tüm teori derslerine, pratik sorulara ve deneme sınavlarına sınırsız erişim elde edin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/pricing" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              onClick={scrollToTop}
            >
              Tam Erişim Al
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
              onClick={scrollToTop}
            >
              Ücretsiz Demo Dene
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sık Sorulan Sorular</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teori dersleri hakkında sık sorulan soruların cevaplarını bulun.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-gray-700">Güvenli Ödeme</span>
            </div>
            <div className="flex items-center">
              <Award className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-gray-700">30 Gün Para İade Garantisi</span>
            </div>
            <div className="flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6 mr-2" />
              <span className="text-gray-700">Stripe ile Güçlendirilmiştir</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheoryLessonsPage;