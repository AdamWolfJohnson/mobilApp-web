import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // EmailJS service configuration
    // You'll need to replace these with your actual EmailJS credentials
    const serviceId = 'service_your_service_id';
    const templateId = 'template_your_template_id';
    const publicKey = 'your_public_key';
    
    // Send the email using EmailJS
    emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Mesajınız için teşekkürler! En kısa sürede size geri döneceğiz.'
        });
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin veya doğrudan bizimle iletişime geçin.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          if (formStatus?.success) {
            setFormStatus(null);
          }
        }, 5000);
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Ad Soyad
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Adınız"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-posta Adresi
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="email@ornek.com"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Konu
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Bir konu seçin</option>
          <option value="general">Genel Soru</option>
          <option value="support">Teknik Destek</option>
          <option value="billing">Fatura Sorusu</option>
          <option value="feedback">Geri Bildirim</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Size nasıl yardımcı olabiliriz?"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
      </button>
      
      {formStatus && (
        <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {formStatus.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;