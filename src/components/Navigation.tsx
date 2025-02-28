import React from 'react';
import { Home, BookOpen, Award, Settings } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose, setCurrentPage, currentPage }) => {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    onClose();
  };

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-blue-600">Menu</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <button 
                onClick={() => handleNavClick('home')}
                className={`flex items-center space-x-2 w-full p-2 rounded-md ${
                  currentPage === 'home' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('practice')}
                className={`flex items-center space-x-2 w-full p-2 rounded-md ${
                  currentPage === 'practice' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <BookOpen className="h-5 w-5" />
                <span>Practice</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('exam')}
                className={`flex items-center space-x-2 w-full p-2 rounded-md ${
                  currentPage === 'exam' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <Award className="h-5 w-5" />
                <span>Take Exam</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('settings')}
                className={`flex items-center space-x-2 w-full p-2 rounded-md ${
                  currentPage === 'settings' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;