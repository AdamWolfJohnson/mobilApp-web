import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfServicePage: React.FC = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              By using the DrivePrep website ("Site"), you agree to these Terms of Service ("Terms"). Please read these terms carefully. If you do not agree to these terms, please do not use our Site.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Account Creation</h2>
            <p className="mb-4">
              You may need to create an account to use certain parts of our Site. You are responsible for maintaining the confidentiality of your account information and are responsible for all activities that occur under your account.
            </p>
            <p className="mb-4">
              When you create an account, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate, current, and complete information.</li>
              <li>Maintain and update your information.</li>
              <li>Keep your account information secure and not share it with others.</li>
              <li>Notify us immediately if you believe your account security has been breached.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Payments and Subscriptions</h2>
            <p className="mb-4">
              When you subscribe to our paid services, you agree to provide accurate and complete payment information. Your subscription will automatically renew unless you cancel it.
            </p>
            <p className="mb-4">
              You can cancel your subscription at any time from your account settings. Cancellation will take effect at the end of your current billing period.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Content and Intellectual Property</h2>
            <p className="mb-4">
              All content on our Site (including text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software) is the property of DrivePrep and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mb-4">
              By using our Site, you agree:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Not to copy, distribute, modify, or sell our content.</li>
              <li>To use our content only for personal, non-commercial purposes.</li>
              <li>Not to create derivative works from our content.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. User Conduct</h2>
            <p className="mb-4">
              When using our Site, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with all applicable laws.</li>
              <li>Respect the rights of others.</li>
              <li>Not use our Site to harass, threaten, or intimidate others.</li>
              <li>Not upload harmful code or viruses to our Site.</li>
              <li>Not disrupt the normal operation of our Site.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Disclaimer</h2>
            <p className="mb-4">
              Our Site is provided "AS IS" and "AS AVAILABLE." DrivePrep does not guarantee that the Site will be uninterrupted, timely, secure, or error-free.
            </p>
            <p className="mb-4">
              DrivePrep is not liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our Site.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Governing Law and Jurisdiction</h2>
            <p className="mb-4">
              These Terms are governed by the laws of the Republic of Turkey. Any dispute related to these Terms will be subject to the exclusive jurisdiction of the courts of the Republic of Turkey.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Changes</h2>
            <p className="mb-4">
              DrivePrep reserves the right to modify these Terms at any time. Changes will be effective when posted on our Site. Your continued use of our Site after changes are posted constitutes your acceptance of the modified Terms.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Contact</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at <a href="mailto:support@driveprep.com" className="text-blue-600 hover:underline">support@driveprep.com</a>.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link 
              to="/" 
              className="text-blue-600 hover:underline"
              onClick={scrollToTop}
            >
              Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;