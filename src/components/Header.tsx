import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flag } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Function to scroll to top when clicking header links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-blue-600 text-white py-2 px-4 relative">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-sm text-center flex-grow">🎉 Özel teklif: Ödeme sırasında SWEDEN20 koduyla %20 indirim!</p>
            <button 
              onClick={() => setShowAnnouncement(false)}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close announcement"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0" onClick={scrollToTop}>
            <span className="text-xl font-bold text-gray-800 font-display whitespace-nowrap">İsveç Ehliyeti</span>
          </Link>

          <div className="flex items-center md:hidden">
            {/* Mobile Login Button - Only visible on mobile */}
            <Link 
              to="/login" 
              className="px-3 py-1 bg-orange-500 text-white text-sm font-bold rounded-md hover:bg-orange-600 transition-colors mr-3"
              onClick={scrollToTop}
            >
              Giriş Yap
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link 
              to="/" 
              className={`font-bold whitespace-nowrap text-sm ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={scrollToTop}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/about" 
              className={`font-bold whitespace-nowrap text-sm ${isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={scrollToTop}
            >
              Hakkımızda
            </Link>
            <Link 
              to="/theory-lessons" 
              className={`font-bold whitespace-nowrap text-sm ${isActive('/theory-lessons') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={scrollToTop}
            >
              Teori Dersleri
            </Link>
            <Link 
              to="/pricing" 
              className={`font-bold whitespace-nowrap text-sm ${isActive('/pricing') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={scrollToTop}
            >
              Fiyatlandırma
            </Link>
            <Link 
              to="/contact" 
              className={`font-bold whitespace-nowrap text-sm ${isActive('/contact') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={scrollToTop}
            >
              İletişim
            </Link>
            <Link 
              to="/demo" 
              className={`font-bold whitespace-nowrap text-sm ${isActive('/demo') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={scrollToTop}
            >
              Demo Dene
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <Link 
              to="/login" 
              className="px-3 py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition-colors whitespace-nowrap text-sm"
              onClick={scrollToTop}
            >
              Giriş
            </Link>
            <Link 
              to="/signup" 
              className="px-3 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap text-sm"
              onClick={scrollToTop}
            >
              Kayıt Ol
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-bold ${isActive('/') ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/about" 
              className={`font-bold ${isActive('/about') ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
            >
              Hakkımızda
            </Link>
            <Link 
              to="/theory-lessons" 
              className={`font-bold ${isActive('/theory-lessons') ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
            >
              Teori Dersleri
            </Link>
            <Link 
              to="/pricing" 
              className={`font-bold ${isActive('/pricing') ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
            >
              Fiyatlandırma
            </Link>
            <Link 
              to="/contact" 
              className={`font-bold ${isActive('/contact') ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
            >
              İletişim
            </Link>
            <Link 
              to="/demo" 
              className={`font-bold ${isActive('/demo') ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
            >
              Demo Dene
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Link 
                to="/login"
                className="px-4 py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Giriş
              </Link>
              <Link 
                to="/signup"
                className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Kayıt Ol
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;