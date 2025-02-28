import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, DollarSign, Calendar, HelpCircle } from 'lucide-react';

const RefundPolicyPage: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <div className="flex items-start">
                <RefreshCw className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-blue-700">
                  At DrivePrep, we value customer satisfaction. This Refund Policy explains our refund and return processes for your purchases.
                </p>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
              1. Refund Conditions
            </h2>
            <p className="mb-4">
              You may request a refund for your purchases under the following conditions:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>30-Day Money-Back Guarantee:</strong> For all our paid memberships, you can request a refund for any reason within 30 days of the purchase date.</li>
              <li><strong>Technical Issues:</strong> If you experience persistent technical issues accessing our services and our support team cannot resolve them, you may request a refund during your subscription period.</li>
              <li><strong>Incorrect Billing:</strong> If your account was charged incorrectly, you may request a refund within 14 days of noticing the issue.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              2. Refund Process
            </h2>
            <p className="mb-4">
              To request a refund, follow these steps:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Log in to your account and go to "Account Settings."</li>
              <li>Click on the "My Subscriptions" tab.</li>
              <li>Click the "Request Refund" button.</li>
              <li>Specify the reason for your refund request and fill in the required information.</li>
              <li>Submit your request.</li>
            </ol>
            <p className="mb-4">
              Alternatively, you can request a refund by sending an email to <a href="mailto:refunds@driveprep.com" className="text-blue-600 hover:underline">refunds@driveprep.com</a>. In your email, please include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The email address associated with your account</li>
              <li>Date of purchase</li>
              <li>Plan purchased</li>
              <li>Reason for your refund request</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Refund Timeframe</h2>
            <p className="mb-4">
              After reviewing your refund request, we typically process it within 5-10 business days. Approved refunds are returned to your original payment method. Depending on your bank or credit card company, it may take 5-10 business days for the refund to appear in your account.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Non-Refundable Situations</h2>
            <p className="mb-4">
              Refund requests are generally not approved in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Refund requests made more than 30 days after the purchase date (except for technical issues).</li>
              <li>Issues resulting from sharing your account information with others.</li>
              <li>Violations of our Terms of Service.</li>
              <li>Failing your driving test (however, if you have our Success Guarantee plan, we may offer additional services in this case).</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Partial Refunds</h2>
            <p className="mb-4">
              In some cases, we may offer a partial refund instead of a full refund. This typically applies when you have used a portion of our services. The partial refund amount is calculated based on your usage period and other factors.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
              6. Frequently Asked Questions
            </h2>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">What happens if my refund request is denied?</h3>
            <p className="mb-4">
              If your refund request is denied, you will receive an email explaining the reason for the decision. If you would like us to reconsider, you can contact our customer service team at <a href="mailto:support@driveprep.com" className="text-blue-600 hover:underline">support@driveprep.com</a>.
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Do I automatically get a refund if I cancel my subscription?</h3>
            <p className="mb-4">
              No, canceling your subscription does not automatically result in a refund. When you cancel your subscription, you can continue to access our services until the end of your current billing period, but automatic renewal is stopped. To request a refund, you need to follow the steps outlined above.
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Can I get a refund if I purchased a promotional or discounted plan?</h3>
            <p className="mb-4">
              Yes, promotional or discounted plans are also covered by our refund policy. However, the refund amount is calculated based on the actual amount you paid, not the original price.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Changes</h2>
            <p className="mb-4">
              We may update this Refund Policy from time to time. In case of significant changes, we will notify you via email or by posting a notice on our Site.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Contact</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Refund Policy, please contact us at <a href="mailto:refunds@driveprep.com" className="text-blue-600 hover:underline">refunds@driveprep.com</a>.
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

export default RefundPolicyPage;