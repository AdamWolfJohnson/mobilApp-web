import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Merhaba, İsveç Ehliyeti hakkında bilgi almak istiyorum." 
}) => {
  // Format phone number by removing any non-digit characters
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL with phone number and optional message
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-6 bottom-6 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 175.216 175.552"
        className="h-7 w-7 fill-white"
      >
        <path d="M 87.4 0 C 39.2 0 0 39.2 0 87.4 C 0 102.9 4.3 117.6 11.7 130.3 L 4 175.6 L 50.2 168 C 62.3 174.7 76.2 178.5 90.9 178.5 C 139.1 178.5 178.3 139.3 178.3 91.1 C 178.3 66.9 168.8 44.2 152.1 27.5 C 135.4 10.8 112.7 1.3 88.5 1.3 C 88.1 0 87.8 0 87.4 0 Z M 87.4 14.3 C 109.2 14.3 129.6 22.6 144.5 37.5 C 159.4 52.4 167.7 72.8 167.7 94.6 C 167.7 135.1 134.5 168.3 94 168.3 C 80.6 168.3 67.6 164.5 56.8 157.8 L 54.2 156.2 L 23.7 160.7 L 28.2 130.9 L 26.3 128.3 C 18.9 116.8 14.7 103.1 14.7 89 C 14.7 48.5 47.9 15.3 88.4 15.3 C 88.1 14.3 87.8 14.3 87.4 14.3 Z M 55.1 45.8 C 53.8 45.8 51.6 46.2 49.7 48.4 C 47.9 50.6 42.1 56.1 42.1 67.2 C 42.1 78.3 50.2 89 51.6 90.7 C 52.9 92.5 67.6 115.9 90.3 125.7 C 109.2 133.8 113 132.5 117.2 131.6 C 121.4 130.7 130.5 125.7 132.7 120.1 C 134.9 114.5 134.9 109.9 134 108.6 C 133.1 107.3 131.4 106.4 128.8 105.1 C 126.2 103.8 115.1 98.2 112.5 97.3 C 109.9 96.4 108.6 96 106.8 98.6 C 105 101.2 100.5 106.4 99.2 108.2 C 97.9 110 96.1 110.4 93.5 109.1 C 90.9 107.8 83.7 105.1 75.3 97.7 C 68.5 91.6 64.3 84.4 62.5 81.8 C 60.7 79.2 62.5 77.9 63.8 76.6 C 65.1 75.3 66.3 73.6 67.6 72.3 C 68.9 71 69.3 69.7 70.2 67.9 C 71.1 66.1 70.6 64.4 70.2 63.1 C 69.8 61.8 65.5 50.6 63.3 45.4 C 61.1 40.2 58.9 41.1 57.2 41.1 C 55.9 41.1 54.6 40.7 53.3 40.7 C 52.9 45.8 55.1 45.8 55.1 45.8 Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;