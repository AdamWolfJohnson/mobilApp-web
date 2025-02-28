import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className={`flex justify-between items-center w-full text-left font-medium p-5 ${
          isOpen ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
        }`}
        onClick={toggleOpen}
      >
        <span className="text-lg">{question}</span>
        <div className={`flex-shrink-0 ml-4 p-1 rounded-full ${isOpen ? 'bg-blue-100' : 'bg-gray-100'}`}>
          {isOpen ? (
            <ChevronUp className={`h-5 w-5 ${isOpen ? 'text-blue-600' : 'text-gray-500'}`} />
          ) : (
            <ChevronDown className={`h-5 w-5 ${isOpen ? 'text-blue-600' : 'text-gray-500'}`} />
          )}
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 border-t border-gray-100 bg-white">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

interface FAQProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem 
          key={index} 
          question={faq.question} 
          answer={faq.answer} 
          isOpen={openIndex === index}
          toggleOpen={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;