import React from 'react';

const EmailJSSetupGuide: React.FC = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
      <h2 className="text-xl font-bold text-blue-800 mb-4">EmailJS Kurulum Rehberi</h2>
      
      <div className="space-y-4 text-blue-700">
        <p>
          İletişim formunun e-posta gönderebilmesi için EmailJS servisini kurmanız gerekmektedir. 
          Aşağıdaki adımları takip edin:
        </p>
        
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <a 
              href="https://www.emailjs.com/docs/sdk/installation/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              EmailJS
            </a>'e kaydolun ve hesap oluşturun.
          </li>
          <li>EmailJS Dashboard'da yeni bir servis oluşturun (Gmail, Outlook, vb.).</li>
          <li>Yeni bir e-posta şablonu oluşturun ve aşağıdaki parametreleri kullanın:
            <ul className="list-disc pl-5 mt-2">
              <li><code className="bg-blue-100 px-1 py-0.5 rounded">{"{{name}}"}</code> - Gönderenin adı</li>
              <li><code className="bg-blue-100 px-1 py-0.5 rounded">{"{{email}}"}</code> - Gönderenin e-posta adresi</li>
              <li><code className="bg-blue-100 px-1 py-0.5 rounded">{"{{subject}}"}</code> - Mesaj konusu</li>
              <li><code className="bg-blue-100 px-1 py-0.5 rounded">{"{{message}}"}</code> - Mesaj içeriği</li>
            </ul>
          </li>
          <li>EmailJS'den aldığınız Service ID, Template ID ve Public Key bilgilerini ContactForm.tsx dosyasındaki ilgili alanlara ekleyin.</li>
        </ol>
        
        <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 mt-4">
          <p className="text-yellow-800 font-medium">Önemli:</p>
          <p className="text-yellow-700 mt-1">
            Public Key güvenlik açısından hassas bir bilgi değildir ve istemci tarafında kullanılabilir. 
            Ancak, Service ID ve Template ID'lerinizi gerçek değerlerle değiştirmeyi unutmayın.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailJSSetupGuide;