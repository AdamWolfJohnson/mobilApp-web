import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  isPopular = false,
  buttonText
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${isPopular ? 'border-2 border-blue-500 transform scale-105 md:scale-110' : ''}`}>
      {isPopular && (
        <div className="bg-blue-500 text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500">/{period}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-3 rounded-md font-medium transition-colors ${
          isPopular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;