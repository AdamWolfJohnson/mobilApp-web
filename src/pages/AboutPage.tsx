import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Target, ThumbsUp, Heart, Linkedin, Instagram, Mail, Play } from 'lucide-react';

const AboutPage: React.FC = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [showVideo, setShowVideo] = useState(false);

  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Öğrenci Odaklı',
      description: 'Yaptığımız her şey öğrencilerimizin başarısına odaklanmıştır.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Mükemmellik',
      description: 'İçeriğimizde, platformumuzda ve desteğimizde mükemmelliği hedefliyoruz.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Sürekli Öğrenme',
      description: 'Materyallerimizi sürekli olarak en son sınav gereksinimlerini yansıtacak şekilde güncelliyoruz.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Sonuç Odaklı',
      description: 'Başarımızı öğrencilerimizin geçme oranlarıyla ölçüyoruz.'
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-blue-600" />,
      title: 'Erişilebilirlik',
      description: 'Kaliteli sınav hazırlığını herkes için erişilebilir kılıyoruz.'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Tutku',
      description: 'İnsanların sürüş hedeflerine ulaşmasına yardımcı olmak için tutkuyla çalışıyoruz.'
    }
  ];

  const team = [
    {
      name: 'Orhan Can',
      role: 'Kurucu & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Öğrencilerin sınavlarını geçmelerine yardımcı olma konusunda 15+ yıllık deneyime sahip eski sürüş eğitmeni.',
      social: {
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        email: 'mailto:orhan@isvecehliyet.com'
      }
    },
    {
      name: 'Merve Can',
      role: 'İçerik Müdürü',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Tüm içeriğimizin doğru ve güncel olmasını sağlayan sertifikalı sürüş sınavı görevlisi.',
      social: {
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        email: 'mailto:merve@isvecehliyet.com'
      }
    },
    {
      name: 'Akif Can',
      role: 'Baş Geliştirici',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Platformumuzu sezgisel, duyarlı ve öğrenme için etkili olacak şekilde oluşturan teknoloji uzmanı.',
      social: {
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        email: 'mailto:akif@isvecehliyet.com'
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">İsveç Ehliyeti Hakkında</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Her sürücünün sınavını güvenle geçmesine ve yollarda daha güvenli olmasına yardımcı olmak için buradayız.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-4">Hikayemiz</h2>
              <p className="text-gray-600 mb-4">
                İsveç Ehliyeti, birçok öğrencinin sürücü sınavları için ne kadar gergin ve hazırlıksız olduğunu ilk elden gören bir sürüş eğitmeni olan David Anderson tarafından 2018 yılında kuruldu.
              </p>
              <p className="text-gray-600 mb-4">
                Yıllarca öğrencilere bire bir yardım ettikten sonra, David, kişisel olarak sunduğu aynı kalitede hazırlığı sağlayan çevrimiçi bir platform oluşturarak daha fazla kişiye ulaşabileceğini ve daha büyük bir etki yaratabileceğini fark etti.
              </p>
              <p className="text-gray-600">
                Bugün, İsveç Ehliyeti 50.000'den fazla öğrencinin sürücü sınavlarını geçmesine yardımcı oldu ve %98 başarı oranına sahip. Ekibimiz, misyonumuza bağlı eski sürüş sınavı görevlileri, eğitim uzmanları ve teknoloji uzmanlarını içerecek şekilde büyüdü: daha güvenli, daha kendinden emin sürücüler yaratmak.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Ekip toplantısı" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Misyonumuz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Sürücü adaylarını, sürücü sınavını geçmeleri ve hayat boyu güvenli, sorumlu sürücüler olmaları için ihtiyaç duydukları bilgi, beceri ve güvenle donatmak.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kapsamlı Öğrenme</h3>
              <p className="text-gray-600">
                Sınavınız için bilmeniz gereken her şeyi kapsayan kapsamlı, güncel materyaller sunuyoruz.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Etkili Hazırlık</h3>
              <p className="text-gray-600">
                Yöntemlerimiz, öğrencilerin bilgileri akılda tutmasına ve sınav koşullarında iyi performans göstermesine yardımcı olduğu kanıtlanmıştır.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ömür Boyu Güvenlik</h3>
              <p className="text-gray-600">
                Sadece sınavı geçmenize yardımcı olmakla kalmıyor, aynı zamanda ömür boyu güvenli bir sürücü olmanıza yardımcı oluyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bu temel ilkeler, İsveç Ehliyeti'nde yaptığımız her şeye rehberlik eder.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:-translate-y-1">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ekibimizle Tanışın</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Başarınıza adanmış İsveç Ehliyeti'nin arkasındaki tutkulu insanlar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-4 mt-4">
                    <a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-pink-600 transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-700 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.social.email}
                      className="text-gray-500 hover:text-red-600 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-4">Neden İsveç Ehliyeti'ni Seçmelisiniz?</h2>
              <p className="text-gray-600 mb-4">
                Mevcut birçok sürücü sınavı hazırlık seçeneği arasından hangisini seçeceğinizi bilmek zor olabilir. İşte binlerce öğrencinin İsveç Ehliyeti'ne güvenmesinin nedenleri:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600"><strong>Uzman İçerik:</strong> Sürüş eğitmenleri ve sınav görevlileri tarafından oluşturulmuştur</span>
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
              {!showVideo ? (
                <div className="relative group cursor-pointer" onClick={() => setShowVideo(true)}>
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Yolculuğunuza Başlamaya Hazır mısınız?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            İsveç Ehliyeti ile sınavlarını başarıyla geçen binlerce sürücüye katılın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/pricing" 
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              onClick={scrollToTop}
            >
              Fiyatlandırma Planlarını Görüntüle
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

export default AboutPage;