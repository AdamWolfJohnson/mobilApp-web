import React from 'react';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import EmailJSSetupGuide from '../components/EmailJSSetupGuide';

const ContactPage: React.FC = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const faqs = [
    {
      question: 'Ne kadar hızlı yanıt alacağım?',
      answer: 'İş günlerinde tüm sorguları 24 saat içinde yanıtlamayı hedefliyoruz. Acil konular için, anında yardım almak için canlı sohbet seçeneğimizi kullanabilirsiniz.'
    },
    {
      question: 'Hesabımla ilgili teknik sorunlar yaşıyorum. Ne yapmalıyım?',
      answer: 'Lütfen iletişim formundaki konu açılır menüsünden "Teknik Destek" seçeneğini seçerek teknik destek ekibimizle iletişime geçin. Yaşadığınız sorun ve gördüğünüz hata mesajları hakkında ayrıntılar ekleyin.'
    },
    {
      question: 'Memnun kalmazsam para iadesi alabilir miyim?',
      answer: 'Evet, tüm planlarımız için 30 gün para iade garantisi sunuyoruz. Hizmetimizden memnun kalmazsanız, satın alma tarihinden itibaren 30 gün içinde tam para iadesi için lütfen bizimle iletişime geçin.'
    },
    {
      question: 'Ödeme bilgilerimi nasıl güncelleyebilirim?',
      answer: 'Ödeme bilgilerinizi, hesabınıza giriş yaparak ve hesap ayarlarınızdaki "Fatura" bölümüne giderek güncelleyebilirsiniz.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bize Ulaşın</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Sorularınız mı var veya yardıma mı ihtiyacınız var? Başarınız için buradayız.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* EmailJS Setup Guide - Geliştirme aşamasında görünür, canlıya alırken kaldırın */}
            <EmailJSSetupGuide />
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-10">
              <h2 className="text-2xl font-bold mb-6">Bize Mesaj Gönderin</h2>
              <ContactForm />
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">İletişime Geçin</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <Mail className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-gray-800">E-posta Gönderin</h3>
                  </div>
                  <p className="text-gray-600 mb-1">destek@isvecehliyet.com</p>
                  <p className="text-gray-500">Genel sorular ve destek için</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-gray-800">Canlı Sohbet</h3>
                  </div>
                  <p className="text-gray-600 mb-1">Web sitemizde mevcuttur</p>
                  <p className="text-gray-500">Çalışma saatleri: 9:00 - 17:00</p>
                </div>
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
              Yaygın sorulara hızlı cevaplar bulun.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section - Updated with gradient background */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Başlamaya Hazır mısınız?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            İsveç Ehliyeti ile sınavını başarıyla geçen binlerce sürücüye katılın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => {
                scrollToTop();
                window.location.href = '/signup';
              }}
              className="bg-white text-blue-700 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Şimdi Kaydolun
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => {
                scrollToTop();
                window.location.href = '/pricing';
              }}
              className="bg-transparent border-2 border-white px-8 py-4 rounded-md font-bold text-lg text-white hover:bg-white/10 transition-colors"
            >
              Fiyatlandırmayı Görüntüle
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;