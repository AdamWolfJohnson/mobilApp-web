import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, BookOpen, Car, CreditCard, Shield, Clock } from 'lucide-react';
import FAQ from '../components/FAQ';

const FAQPage: React.FC = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const generalFaqs = [
    {
      question: 'İsveç Ehliyeti sürücü sınavını geçmeme nasıl yardımcı olur?',
      answer: 'İsveç Ehliyeti, binlerce test sorusu, deneme sınavları ve detaylı açıklamalar içeren kapsamlı pratik materyaller sunar. Platformumuz, gerçek İsveç sürücü sınavı ortamını simüle ederek özgüven ve bilgi kazanmanıza yardımcı olur.'
    },
    {
      question: 'İsveç Ehliyeti yeni başlayanlar için uygun mu?',
      answer: 'Kesinlikle! İsveç Ehliyeti, her seviyedeki öğrenciler için tasarlanmıştır. Yeni başlıyorsanız, yapılandırılmış öğrenme yollarımız size materyali adım adım öğretecektir.'
    },
    {
      question: 'Platformu hangi cihazlarda kullanabilirim?',
      answer: 'İsveç Ehliyeti tamamen duyarlıdır ve akıllı telefonlar, tabletler, dizüstü bilgisayarlar ve masaüstü bilgisayarlar dahil tüm cihazlarda çalışır.'
    }
  ];

  const subscriptionFaqs = [
    {
      question: 'Üyelik ne kadar sürer?',
      answer: 'Ömür boyu erişim için tek seferlik ödeme sunuyoruz. Sınavınıza hazırlanmak için platformumuzu istediğiniz kadar kullanabilirsiniz, tekrarlayan ücret yoktur.'
    },
    {
      question: 'Bu tek seferlik bir ödeme mi yoksa abonelik mi?',
      answer: 'Bu tek seferlik bir ödemedir. Tekrarlayan ücretler veya gizli masraflar olmadan tüm içeriğimize sınırsız erişim elde edersiniz.'
    },
    {
      question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
      answer: 'Tüm büyük kredi kartlarını (Visa, Mastercard, American Express), PayPal ve Apple Pay\'i kabul ediyoruz.'
    },
    {
      question: 'İptal edip para iadesi alabilir miyim?',
      answer: 'Evet, 30 gün para iade garantisi sunuyoruz. Hizmetimizden memnun kalmazsanız, satın alma tarihinden itibaren 30 gün içinde tam para iadesi talep edebilirsiniz.'
    }
  ];

  const contentFaqs = [
    {
      question: 'İçeriğiniz ne sıklıkla güncelleniyor?',
      answer: 'İçeriğimizi düzenli olarak güncelliyoruz ve İsveç sürücü sınavındaki değişiklikleri yakından takip ediyoruz. Yeni sorular ve güncellemeler sürekli olarak eklenmektedir.'
    },
    {
      question: 'Kaç soru ve deneme sınavı var?',
      answer: 'Platformumuzda 10.000\'den fazla pratik soru ve sınırsız sayıda deneme sınavı bulunmaktadır. Sorular, İsveç sürücü sınavının tüm bölümlerini kapsar.'
    },
    {
      question: 'İçerik hangi dillerde mevcut?',
      answer: 'İçeriğimiz şu anda İsveççe, İngilizce ve Türkçe dillerinde mevcuttur. Yakında daha fazla dil eklenecektir.'
    }
  ];

  const technicalFaqs = [
    {
      question: 'Hesabımla ilgili teknik sorunlar yaşıyorum. Ne yapmalıyım?',
      answer: 'Lütfen destek ekibimizle iletişime geçin. Sorununuzu çözmek için size yardımcı olacağız. Destek ekibimize destek@isvecehliyet.com adresinden ulaşabilirsiniz.'
    },
    {
      question: 'Şifremi unuttum. Ne yapmalıyım?',
      answer: 'Giriş sayfasındaki "Şifremi Unuttum" bağlantısına tıklayın. E-posta adresinizi girin ve şifrenizi sıfırlamak için talimatları içeren bir e-posta alacaksınız.'
    },
    {
      question: 'Ödeme bilgilerimi nasıl güncelleyebilirim?',
      answer: 'Ödeme bilgilerinizi, hesabınıza giriş yaparak ve hesap ayarlarınızdaki "Fatura" bölümüne giderek güncelleyebilirsiniz.'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>Sık Sorulan Sorular</h1>
          
          <div className="mb-12">
            <p className="text-lg text-gray-600 mb-8">
              İsveç Ehliyeti hakkında en çok sorulan soruların cevaplarını burada bulabilirsiniz. Başka sorularınız varsa, lütfen <Link to="/contact" className="text-blue-600 hover:underline" onClick={scrollToTop}>bizimle iletişime geçin</Link>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <HelpCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>Genel Sorular</h2>
                </div>
                <p className="text-gray-600">Platform, içerik ve hizmetlerimiz hakkında genel sorular.</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <CreditCard className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>Abonelik ve Ödeme</h2>
                </div>
                <p className="text-gray-600">Fiyatlandırma, ödeme ve abonelik hakkında sorular.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>İçerik ve Materyaller</h2>
                </div>
                <p className="text-gray-600">Sorular, sınavlar ve eğitim materyalleri hakkında bilgiler.</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="text-xl font-semibold" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>Teknik Destek</h2>
                </div>
                <p className="text-gray-600">Hesap, giriş ve teknik sorunlar hakkında yardım.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <section id="general">
              <div className="flex items-center mb-6">
                <HelpCircle className="h-7 w-7 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>Genel Sorular</h2>
              </div>
              <FAQ faqs={generalFaqs} />
            </section>
            
            <section id="subscription">
              <div className="flex items-center mb-6">
                <CreditCard className="h-7 w-7 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>Abonelik ve Ödeme</h2>
              </div>
              <FAQ faqs={subscriptionFaqs} />
            </section>
            
            <section id="content">
              <div className="flex items-center mb-6">
                <BookOpen className="h-7 w-7 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>İçerik ve Materyaller</h2>
              </div>
              <FAQ faqs={contentFaqs} />
            </section>
            
            <section id="technical">
              <div className="flex items-center mb-6">
                <Shield className="h-7 w-7 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>Teknik Destek</h2>
              </div>
              <FAQ faqs={technicalFaqs} />
            </section>
          </div>
          
          <div className="mt-16 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>Başka Sorularınız mı Var?</h2>
            <p className="text-gray-600 mb-6">
              Burada cevabını bulamadığınız sorularınız için lütfen bizimle iletişime geçin. Size yardımcı olmaktan memnuniyet duyarız.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              onClick={scrollToTop}
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;