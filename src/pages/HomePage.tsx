import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, BarChart, Award, Clock, Shield, Play } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQ from '../components/FAQ';

const HomePage: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showWhyChooseVideo, setShowWhyChooseVideo] = useState(false);
  
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const features = [
    {
      icon: BookOpen,
      title: 'Kapsamlı İçerik',
      description: 'İsveç sürücü teorik sınavının tüm yönlerini kapsayan binlerce pratik soruya erişin.'
    },
    {
      icon: CheckCircle,
      title: 'Uzman İncelemeli',
      description: 'Tüm sorular ve açıklamalar İsveç sürücü eğitmenleri tarafından oluşturulmuş ve incelenmiştir.'
    },
    {
      icon: BarChart,
      title: 'İlerleme Takibi',
      description: 'İlerlemenizi izleyin ve geliştirilmesi gereken alanlara odaklanın.'
    },
    {
      icon: Award,
      title: 'Deneme Sınavları',
      description: 'Gerçek İsveç sınav ortamını simüle eden gerçekçi deneme sınavları yapın.'
    },
    {
      icon: Clock,
      title: 'Çalışma Planlayıcısı',
      description: 'Sınav tarihinize ve mevcut zamanınıza göre kişiselleştirilmiş bir çalışma planı oluşturun.'
    },
    {
      icon: Shield,
      title: 'Geçme Garantisi',
      description: 'Platformumuza o kadar güveniyoruz ki, para iade garantisi sunuyoruz.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      testimonial: 'İsveç Ehliyeti sayesinde ilk denemede sınavı geçtim! Pratik sorular gerçek sınavdakilerle neredeyse aynıydı.',
      passed: 'İlk denemede geçti'
    },
    {
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      testimonial: 'Deneme sınavları gerçek sınavın baskısına hazırlanmamı sağladı. Kesinlikle tavsiye ederim!',
      passed: '%96 puanla geçti'
    },
    {
      name: 'Emma Wilson',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      rating: 4,
      testimonial: 'İlk denemede başarısız olduktan sonra İ sveç Ehliyeti kullandım ve ikinci denemede kolayca geçtim. Keşke daha önce bulsaydım!',
      passed: 'İkinci denemede geçti'
    }
  ];

  const faqs = [
    {
      question: 'İsveç Ehliyeti sürücü sınavını geçmeme nasıl yardımcı olur?',
      answer: 'İsveç Ehliyeti, binlerce test sorusu, deneme sınavları ve detaylı açıklamalar içeren kapsamlı pratik materyaller sunar. Platformumuz, gerçek İsveç sürücü sınavı ortamını simüle ederek özgüven ve bilgi kazanmanıza yardımcı olur.'
    },
    {
      question: 'İsveç Ehliyeti yeni başlayanlar için uygun mu?',
      answer: 'Kesinlikle! İsveç Ehliyeti, her seviyedeki öğrenciler için tasarlanmıştır. Yeni başlıyorsanız, yapılandırılmış öğrenme yollarımız size materyali adım adım öğretecektir.'
    },
    {
      question: 'Üyelik ne kadar sürer?',
      answer: 'Ömür boyu erişim için tek seferlik ödeme sunuyoruz. Sınavınıza hazırlanmak için platformumuzu istediğiniz kadar kullanabilirsiniz, tekrarlayan ücret yoktur.'
    },
    {
      question: 'İsveç Ehliyeti\'ne mobil cihazımdan erişebilir miyim?',
      answer: 'Evet, İsveç Ehliyeti tamamen duyarlıdır ve akıllı telefonlar, tabletler, dizüstü bilgisayarlar ve masaüstü bilgisayarlar dahil tüm cihazlarda çalışır.'
    },
    {
      question: 'İsveç Ehliyeti\'ni kullandıktan sonra sınavı geçemezsem ne olur?',
      answer: 'Üyeliğimizle bir geçme garantisi sunuyoruz. Önerilen çalışma programımızı tamamladıktan sonra sınavınızı geçemezseniz, geçene kadar üyeliğinizi ücretsiz olarak uzatacağız.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">İsveç Sürücü Sınavınızı Güvenle Geçin</h1>
              <p className="text-xl mb-8 text-blue-100">
                İsveç Ehliyeti ile hazırlanan binlerce başarılı sürücüye katılın. Kapsamlı platformumuz daha akıllıca çalışmanıza yardımcı olur.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/pricing" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold text-center hover:bg-gray-100 transition-colors"
                  onClick={scrollToTop}
                >
                  Başlayın
                </Link>
                <Link 
                  to="/demo" 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-colors text-center"
                  onClick={scrollToTop}
                >
                  Ücretsiz Demo Deneyin
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              {!showVideo ? (
                <div className="relative group cursor-pointer" onClick={() => setShowVideo(true)}>
                  <img 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Direksiyon başındaki sürücü" 
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blue-600 bg-opacity-80 rounded-full p-4 shadow-lg transform transition-transform group-hover:scale-110">
                      <Play className="h-10 w-10 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all"></div>
                </div>
              ) : (
                <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-xl">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="İsveç Sürücü Sınavı Hazırlığı"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">%98</p>
              <p className="text-gray-600">Geçme Oranı</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">50,000+</p>
              <p className="text-gray-600">Başarılı Öğrenci</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">10,000+</p>
              <p className="text-gray-600">Pratik Soru</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-600">4.9/5</p>
              <p className="text-gray-600">Öğrenci Puanı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Neden İsveç Ehliyeti?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platformumuz, İsveç sürücü sınavınızı ilk denemede geçmeniz için ihtiyacınız olan her şeyi sunacak şekilde tasarlanmıştır.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4">Satın Almadan Önce Deneyin</h2>
                <p className="text-gray-600 mb-6">
                  İsveç Ehliyeti'nin size uygun olup olmadığından emin değil misiniz? Platformumuzun nasıl olduğunu görmek için örnek pratik sorularla ücretsiz demomuzu deneyin.
                </p>
                <Link 
                  to="/demo" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                  onClick={scrollToTop}
                >
                  Ücretsiz Demoya Erişin
                </Link>
              </div>
              <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4">Demo Şunları İçerir:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>5 örnek pratik soru</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Detaylı açıklamalar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Kredi kartı gerekmez</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sadece e-posta ve telefon girin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Başarı Hikayeleri</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İsveç Ehliyeti ile İsveç sürücü sınavını geçen öğrencilerden dinleyin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                image={testimonial.image}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                passed={testimonial.passed}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Başlamaya Hazır mısınız?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ömür boyu erişim için tek bir basit plan. Tekrarlayan ücret yok.
          </p>
          <Link 
            to="/pricing" 
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            onClick={scrollToTop}
          >
            Fiyatlandırmayı Görüntüle
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-4">Neden İsveç Ehliyeti'ni Seçmelisiniz?</h2>
              <p className="text-gray-600 mb-4">
                Birçok sürücü sınavı hazırlık seçeneği arasından hangisini seçeceğinizi bilmek zor olabilir. İşte binlerce öğrencinin İsveç Ehliyeti'ne güvenmesinin nedenleri:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600"><strong>Uzman İçerik:</strong> İsveç sürücü eğitmenleri ve sınav görevlileri tarafından oluşturulmuştur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600"><strong>Kanıtlanmış Sonuçlar:</strong> Programımızı tamamlayan öğrenciler için %98 geçme oranı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600"><strong>Kapsamlı Kapsam:</strong> Tüm konular ve soru türleri dahil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600"><strong>Kişiselleştirilmiş Öğrenme:</strong> Adaptif teknoloji zayıf alanlarınıza odaklanır</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600"><strong>Her Yerden Erişilebilir:</strong> İstediğiniz cihazda, istediğiniz zaman çalışın</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600"><strong>Para İade Garantisi:</strong> Geçeceğinizden eminiz</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              {!showWhyChooseVideo ? (
                <div className="relative group cursor-pointer" onClick={() => setShowWhyChooseVideo(true)}>
                  <img 
                    src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Çalışan öğrenci" 
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blue-600 bg-opacity-80 rounded-full p-4 shadow-lg transform transition-transform group-hover:scale-110">
                      <Play className="h-10 w-10 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition-all"></div>
                </div>
              ) : (
                <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-xl">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="Neden İsveç Ehliyeti'ni Seçmelisiniz"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
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
              İsveç Ehliyeti hakkında sık sorulan soruların cevaplarını bulun.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Yolculuğa Başlayın</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            İsveç Ehliyeti ile İsveç sürücü sınavını başarıyla geçen binlerce sürücüye katılın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/pricing" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              onClick={scrollToTop}
            >
              Başlayın
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
              onClick={scrollToTop}
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;