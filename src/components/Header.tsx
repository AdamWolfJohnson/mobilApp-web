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
          <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <span className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Arial, sans-serif' }}>İsveç Ehliyeti</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={scrollToTop}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/about" 
              className={`font-medium ${isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={scrollToTop}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              Hakkımızda
            </Link>
            <Link 
              to="/pricing" 
              className={`font-medium ${isActive('/pricing') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={scrollToTop}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              Fiyatlandırma
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium ${isActive('/contact') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={scrollToTop}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              İletişim
            </Link>
            <Link 
              to="/demo" 
              className={`font-medium ${isActive('/demo') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={scrollToTop}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              Demo Dene
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-blue-600 font-medium hover:text-blue-800"
              onClick={scrollToTop}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              Giriş Yap
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              onClick={scrollToTop}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              Kayıt Ol
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              Ana Sayfa
            </Link>
            <Link 
              to="/about" 
              className={`font-medium ${isActive('/about') ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              Hakkımızda
            </Link>
            <Link 
              to="/pricing" 
              className={`font-medium ${isActive('/pricing') ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              Fiyatlandırma
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium ${isActive('/contact') ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              İletişim
            </Link>
            <Link 
              to="/demo" 
              className={`font-medium ${isActive('/demo') ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToTop();
              }}
              style={{ fontFamily: 'Futura, Arial, sans-serif' }}
            >
              Demo Dene
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Link 
                to="/login"
                className="px-4 py-2 text-blue-600 font-medium border border-blue-600 rounded-md"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
                style={{ fontFamily: 'Futura, Arial, sans-serif' }}
              >
                Giriş Yap
              </Link>
              <Link 
                to="/signup"
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
                style={{ fontFamily: 'Futura, Arial, sans-serif' }}
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