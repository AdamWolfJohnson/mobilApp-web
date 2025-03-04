import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SlideProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage: string;
}

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Reduced to only 2 slides
  const slides: SlideProps[] = [
    {
      title: "İsveç Ehliyet Sınavınızı Güvenle Geçin",
      subtitle: "İsveç Ehliyeti ile hazırlanan binlerce başarılı sürücüye katılın. Kapsamlı platformumuz daha akıllıca çalışmanıza yardımcı olur.",
      buttonText: "Başlayın",
      buttonLink: "/pricing",
      secondaryButtonText: "Ücretsiz Demo Deneyin",
      secondaryButtonLink: "/demo",
      backgroundImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      title: "10.000+ Soruya Sınırsız Erişim",
      subtitle: "Gerçek sınav sorularına benzer binlerce soru ile pratik yapın ve sınavınıza en iyi şekilde hazırlanın.",
      buttonText: "Hemen Başla",
      buttonLink: "/pricing",
      backgroundImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    }
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 8000); // Change slide every 8 seconds

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden">
      {/* Slides */}
      <div className="relative h-[500px] md:h-[550px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${
              currentSlide === index 
                ? 'visible opacity-100 z-10' 
                : 'hidden opacity-0 z-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                style={{ 
                  backgroundImage: `url(${slide.backgroundImage})`
                }}
              ></div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-800/50"></div>
            </div>
            
            {/* Content */}
            <div className="container mx-auto px-4 h-full relative z-20">
              <div className="flex items-center h-full py-12">
                <div className="max-w-xl p-8 rounded-xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-white leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      to={slide.buttonLink}
                      className="bg-white text-blue-700 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      onClick={scrollToTop}
                    >
                      {slide.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    {slide.secondaryButtonText && (
                      <Link
                        to={slide.secondaryButtonLink || "#"}
                        className="bg-transparent border-2 border-white px-8 py-4 rounded-md font-bold text-lg text-white hover:bg-white/10 transition-colors text-center shadow-lg"
                        onClick={scrollToTop}
                      >
                        {slide.secondaryButtonText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation - Only navigation element */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              currentSlide === index
                ? 'w-16 h-4 bg-white rounded-full'
                : 'w-4 h-4 bg-white/60 hover:bg-white/80 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;