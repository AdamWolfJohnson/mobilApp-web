import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Info, Settings, Clock } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <div className="flex items-start">
                <Cookie className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-blue-700">
                  This Cookie Policy explains how DrivePrep uses cookies and similar technologies on our website. When you visit our website, you consent to our use of cookies as described in this policy.
                </p>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
              <Info className="h-5 w-5 mr-2 text-blue-600" />
              1. What Are Cookies?
            </h2>
            <p className="mb-4">
              Cookies are small text files that websites place on your computer or mobile device. Cookies help websites recognize you, remember your preferences, and provide a better user experience.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-blue-600" />
              2. Types of Cookies We Use
            </h2>
            <p className="mb-4">
              We use the following types of cookies on our website:
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for our website to function properly and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Performance Cookies</h3>
            <p className="mb-4">
              These cookies collect information about how visitors use our website. These cookies collect information about which pages are most popular, how visitors navigate around the site, and any error messages they encounter. This helps us improve our website.
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Functionality Cookies</h3>
            <p className="mb-4">
              These cookies allow our website to remember choices you make, such as your language preference or the region you are in. These cookies enable us to provide you with a more personalized experience.
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Targeting/Advertising Cookies</h3>
            <p className="mb-4">
              These cookies collect information about your browsing habits and can be used to deliver advertisements that are more relevant to your interests. They can also be used to limit the number of times you see an advertisement and to measure the effectiveness of advertising campaigns.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-600" />
              3. Cookie Duration
            </h2>
            <p className="mb-4">
              The cookies we use fall into two categories in terms of duration:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Session Cookies:</strong> These cookies are temporary and are deleted when you close your browser.</li>
              <li><strong>Persistent Cookies:</strong> These cookies remain on your computer or mobile device after you close your browser and help us recognize you when you return to our website.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="mb-4">
              Our website may also contain cookies placed by third-party service providers. These third parties may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google Analytics (analytics services)</li>
              <li>Facebook (social media features and advertising)</li>
              <li>Stripe (payment processing)</li>
              <li>Other advertising networks and analytics providers</li>
            </ul>
            <p className="mb-4">
              The use of cookies by these third parties is subject to their own privacy policies, over which we have no control.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. How to Control Cookies</h2>
            <p className="mb-4">
              Most web browsers allow you to choose whether to accept or reject cookies. You can usually control cookies by changing your browser settings. For more information about how to manage cookies, please refer to your browser's help section.
            </p>
            <p className="mb-4">
              Please note that if you disable cookies, some features of our website may not function properly.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Changes</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time. In case of significant changes, we will notify you via email or by posting a notice on our Site.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Contact</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Cookie Policy, please contact us at <a href="mailto:privacy@driveprep.com" className="text-blue-600 hover:underline">privacy@driveprep.com</a>.
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

export default CookiePolicyPage;