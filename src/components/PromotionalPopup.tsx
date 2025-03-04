import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';

interface PromotionalPopupProps {
  delay?: number;
  aboutPageDelay?: number;
}

const PromotionalPopup: React.FC<PromotionalPopupProps> = ({ 
  delay = 5,
  aboutPageDelay = 10 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  const togglePopup = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    setHasBeenShown(false);
    setIsVisible(false);
    
    let timer: number;
    
    if (isAboutPage) {
      timer = window.setTimeout(() => {
        setIsVisible(true);
        setHasBeenShown(true);
      }, aboutPageDelay * 1000);
    } 
    else {
      timer = window.setTimeout(() => {
        setIsVisible(true);
        setHasBeenShown(true);
      }, delay * 1000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [delay, aboutPageDelay, isAboutPage, location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-auto overflow-hidden">
        <button 
          onClick={togglePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Kapat"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
          <h2 className="text-2xl font-bold mb-2">İsveç'te Bir İlk!</h2>
          <p className="text-blue-100 mb-2">
            Sınırsız erişim sunan tek platform
          </p>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Tüm Soru ve Konu Anlatımlarına Sınırsız Erişim
          </h3>
          
          <p className="text-gray-600 mb-4">
            İsveç ehliyet sınavını ilk denemede geçmeniz için ihtiyacınız olan her şey tek bir yerde!
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-blue-600 mr-2">299 SEK</div>
              <div className="text-sm text-gray-500">tek ödeme</div>
            </div>
            <p className="text-sm text-blue-700 mt-1">Tekrarlayan ücret yok, ömür boyu erişim!</p>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <div className="text-green-500 mr-2">✓</div>
              <div className="text-gray-600 text-sm">10.000+ pratik soru</div>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-2">✓</div>
              <div className="text-gray-600 text-sm">45+ kapsamlı konu anlatımı</div>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-2">✓</div>
              <div className="text-gray-600 text-sm">Sınırsız deneme sınavı</div>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mr-2">✓</div>
              <div className="text-gray-600 text-sm">30 gün para iade garantisi</div>
            </div>
          </div>
          
          <Link 
            to="/pricing" 
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            onClick={() => {
              togglePopup();
              scrollToTop();
            }}
          >
            Hemen Başla
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromotionalPopup;