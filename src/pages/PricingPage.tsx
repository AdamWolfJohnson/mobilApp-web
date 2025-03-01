import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CreditCard, Lock, Check } from 'lucide-react';
import FAQ from '../components/FAQ';

const PricingPage: React.FC = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const pricingPlans = [
    {
      title: '1 Aylık Erişim',
      price: '199 SEK',
      period: 'tek ödeme',
      features: [
        'Tüm pratik sorulara erişim',
        'Deneme sınavları',
        'Çalışma materyalleri',
        'Sorular için açıklamalar',
        'Performans takibi',
        'Mobil ve masaüstü erişimi',
        '30 gün para iade garantisi'
      ],
      isPopular: false,
      buttonText: '1 Aylık Erişim Al'
    },
    {
      title: 'Sınırsız Erişim',
      price: '399 SEK',
      period: 'tek ödeme',
      features: [
        'Tüm pratik sorulara sınırsız erişim',
        'Sınırsız deneme sınavları',
        'Kapsamlı çalışma materyalleri',
        'Tüm sorular için detaylı açıklamalar',
        'Performans takibi',
        'Mobil ve masaüstü erişimi',
        '30 gün para iade garantisi'
      ],
      isPopular: true,
      buttonText: 'Sınırsız Erişim Al'
    },
    {
      title: '3 Aylık Erişim',
      price: '299 SEK',
      period: 'tek ödeme',
      features: [
        'Tüm pratik sorulara 3 ay erişim',
        'Deneme sınavları',
        'Kapsamlı çalışma materyalleri',
        'Sorular için detaylı açıklamalar',
        'Performans takibi',
        'Mobil ve masaüstü erişimi',
        '30 gün para iade garantisi'
      ],
      isPopular: false,
      buttonText: '3 Aylık Erişim Al'
    }
  ];

  const faqs = [
    {
      question: 'Bu tek seferlik bir ödeme mi yoksa abonelik mi?',
      answer: 'Bu tek seferlik bir ödemedir. Tekrarlayan ücretler veya gizli masraflar olmadan tüm içeriğimize sınırsız erişim elde edersiniz.'
    },
    {
      question: 'Erişimim ne kadar sürer?',
      answer: 'Erişiminiz seçtiğiniz plana göre değişir. 1 aylık plan için 30 gün, 3 aylık plan için 90 gün, Sınırsız Erişim planı için ise süresiz erişim sağlanır.'
    },
    {
      question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
      answer: 'Tüm büyük kredi kartlarını (Visa, Mastercard, American Express), PayPal ve Apple Pay\'i kabul ediyoruz.'
    },
    {
      question: 'Ücretsiz deneme sürümü var mı?',
      answer: 'Evet, satın almadan önce platformumuzun nasıl çalıştığını görmek için örnek sorularla demomuzu deneyebilirsiniz.'
    },
    {
      question: 'İptal edip para iadesi alabilir miyim?',
      answer: 'Evet, 30 gün para iade garantisi sunuyoruz. Hizmetimizden memnun kalmazsanız, satın alma tarihinden itibaren 30 gün içinde tam para iadesi talep edebilirsiniz.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Basit, Şeffaf Fiyatlandırma</h1>
          <p className="text-xl max-w-3xl mx-auto">
            İhtiyacınıza uygun bir plan seçin ve sürücü sınavınızı geçmek için gereken tüm kaynaklara erişin.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-xl overflow-hidden border-2 ${
                  plan.isPopular ? 'border-blue-500 transform scale-105 md:scale-110 z-10' : 'border-gray-200'
                } transition-all duration-300 hover:shadow-lg`}
              >
                {plan.isPopular && (
                  <div className="bg-blue-500 text-white text-center py-3 font-medium">
                    En Popüler
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h2>
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    </div>
                    <p className="text-gray-500 mt-2">Tek seferlik ödeme</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                        <p className="ml-3 text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
                    plan.isPopular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pay Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Neden Sınırsız Erişim Planımızı Seçmelisiniz?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sürücü sınavı hazırlığınıza yatırım yapmak, ücretsiz kaynakların sağlayamayacağı avantajlar sunar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Daha Yüksek Geçme Oranı</h3>
              <p className="text-gray-600">
                Üyelerimizin %98'i sınavı geçiyor, bu oran ulusal ortalamanın (%47) çok üzerinde. Yapılandırılmış yaklaşımımız ve kapsamlı materyallerimiz fark yaratıyor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maliyet Etkin</h3>
              <p className="text-gray-600">
                Sınavda başarısız olmak, başka bir sınav ücreti ve potansiyel olarak daha fazla sürüş dersi ödemeniz anlamına gelir. Üyeliğimiz, sınavınızı tekrar etmekten daha az maliyetlidir.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">İç Huzuru</h3>
              <p className="text-gray-600">
                Para iade garantimiz ve yapılandırılmış yaklaşımımızla, sınav gününde kendinizi güvende ve hazır hissedebilir, kaygıyı azaltıp performansı artırabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                  alt="James Wilson" 
                  className="w-24 h-24 rounded-full object-cover mx-auto"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <p className="text-gray-600 italic text-lg mb-4">
                  "İsveç Ehliyeti'ni bulmadan önce iki kez sınavda başarısız oldum. Sınırsız erişim tam da ihtiyacım olandı—deneme sınavları gerçek sınava çok benziyordu ve detaylı açıklamalar kavramları daha iyi anlamama yardımcı oldu. Bir sonraki denemede mükemmel bir puanla geçtim!"
                </p>
                <p className="font-semibold text-gray-800">James Wilson</p>
                <p className="text-blue-600">İsveç Ehliyeti kullandıktan sonra geçti</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sık Sorulan Sorular</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fiyatlandırmamız hakkında sorularınız mı var? Aşağıda cevapları bulun.
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
              <Lock className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-gray-700">Güvenli Ödeme</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-gray-700">30 Gün Para İade Garantisi</span>
            </div>
            <div className="flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6 mr-2" />
              <span className="text-gray-700">Stripe ile Güçlendirilmiştir</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sınavınızı Geçmeye Hazır mısınız?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Bugün sınırsız erişim alın ve başarı için hazırlanmaya başlayın.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            onClick={scrollToTop}
          >
            Şimdi Sınırsız Erişim Alın
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;