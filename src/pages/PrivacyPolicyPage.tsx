import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-blue-700">
                  At DrivePrep, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information.
                </p>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect the following information from you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, postal address.</li>
              <li><strong>Account Information:</strong> Username, password, and profile information.</li>
              <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely through our payment processors).</li>
              <li><strong>Usage Data:</strong> Information about how you use our Site, tests completed, answers, and results.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, information collected through cookies and similar technologies.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
              <Eye className="h-5 w-5 mr-2 text-blue-600" />
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We may use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To create and manage your account.</li>
              <li>To provide and improve our services.</li>
              <li>To personalize your learning experience.</li>
              <li>To process payment transactions.</li>
              <li>To communicate with you (e.g., notifications, updates, customer support).</li>
              <li>To analyze and improve our services.</li>
              <li>To prevent fraud and ensure security.</li>
              <li>To fulfill our legal obligations.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
              <Lock className="h-5 w-5 mr-2 text-blue-600" />
              3. Sharing Your Information
            </h2>
            <p className="mb-4">
              We may share your information with third parties in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Providers:</strong> Third-party service providers who help us provide our services (e.g., payment processors, cloud storage providers).</li>
              <li><strong>Legal Requirements:</strong> When required to comply with a legal obligation, protect our legal rights, or respond to legal proceedings.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be among the transferred assets.</li>
              <li><strong>With Your Consent:</strong> In other cases where we have your explicit consent to share your information.</li>
            </ul>
            <p className="mb-4">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies on our Site. These technologies help us personalize your experience, analyze site usage, and improve our services. For more information about cookies, please see our <Link to="/cookie-policy" className="text-blue-600 hover:underline" onClick={scrollToTop}>Cookie Policy</Link>.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We take appropriate technical and organizational measures to protect your information. However, please note that no data transmission over the internet or electronic storage is 100% secure.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to provide our services or to comply with our legal obligations.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Children's Privacy</h2>
            <p className="mb-4">
              Our services are not directed to children under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Your Rights</h2>
            <p className="mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to request access to your personal data.</li>
              <li>The right to request correction of inaccurate or incomplete personal data.</li>
              <li>The right to request deletion of your personal data.</li>
              <li>The right to object to the processing of your personal data.</li>
              <li>The right to request restriction of processing of your personal data.</li>
              <li>The right to data portability.</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@driveprep.com" className="text-blue-600 hover:underline">privacy@driveprep.com</a>.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Changes</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. In case of significant changes, we will notify you via email or by posting a notice on our Site.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10. Contact</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:privacy@driveprep.com" className="text-blue-600 hover:underline">privacy@driveprep.com</a>.
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

export default PrivacyPolicyPage;