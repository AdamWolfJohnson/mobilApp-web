import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  // Function to scroll to top when clicking footer links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>İsveç Ehliyeti</span>
            </div>
            <p className="text-gray-400 mb-4">
              İsveç sürücü belgesi hazırlığı için güvenilir ortağınız. Sınavınızı güvenle geçmenize yardımcı oluyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors" onClick={scrollToTop}>Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors" onClick={scrollToTop}>Hakkımızda</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors" onClick={scrollToTop}>Fiyatlandırma</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors" onClick={scrollToTop}>İletişim</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors" onClick={scrollToTop}>Sık Sorulan Sorular</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>Yasal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors" onClick={scrollToTop}>Kullanım Koşulları</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors" onClick={scrollToTop}>Gizlilik Politikası</Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors" onClick={scrollToTop}>Çerez Politikası</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors" onClick={scrollToTop}>İade Politikası</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Futura, Arial, sans-serif' }}>Bize Ulaşın</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:destek@isvecehliyet.com" className="text-gray-400 hover:text-white transition-colors">
                  destek@isvecehliyet.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+46123456789" className="text-gray-400 hover:text-white transition-colors">
                  +46 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-gray-400" />
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Canlı Destek
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} İsveç Ehliyeti. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;