import React, { useState } from 'react';
import { Question } from '../types';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  onAnswer: (selectedOption: number) => void;
  showExplanation: boolean;
  selectedAnswer?: number;
  isCorrect?: boolean;
  showNavigation?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  currentQuestionIndex?: number;
  totalQuestions?: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  showExplanation,
  selectedAnswer,
  isCorrect,
  showNavigation = false,
  onNext,
  onPrevious,
  currentQuestionIndex,
  totalQuestions
}) => {
  const [selected, setSelected] = useState<number | undefined>(selectedAnswer);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleOptionClick = (index: number) => {
    if (selectedAnswer !== undefined) return; // Don't allow changing answer if already submitted
    setSelected(index);
    onAnswer(index);
  };

  const getOptionClass = (index: number) => {
    if (selectedAnswer === undefined && selected === index) {
      return 'bg-blue-100 border-blue-500 shadow-md';
    }
    
    if (selectedAnswer !== undefined) {
      if (index === question.correctAnswer) {
        return 'bg-green-100 border-green-500 shadow-md';
      }
      if (selectedAnswer === index && selectedAnswer !== question.correctAnswer) {
        return 'bg-red-100 border-red-500 shadow-md';
      }
    }
    
    return 'hover:bg-gray-100 border-gray-300 hover:shadow-md';
  };

  return (
    <div className="bg-white rounded-lg">
      {showNavigation && currentQuestionIndex !== undefined && totalQuestions !== undefined && (
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={onPrevious}
            disabled={currentQuestionIndex === 0}
            className={`p-2 rounded-full ${currentQuestionIndex === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
            aria-label="Previous question"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
          <button 
            onClick={onNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
            className={`p-2 rounded-full ${currentQuestionIndex === totalQuestions - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
            aria-label="Next question"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
      
      <h3 className="text-lg font-medium mb-4">{question.text}</h3>
      
      {question.image && !imageError && (
        <div className="mb-4 relative">
          {!imageLoaded && (
            <div className="w-full h-48 bg-gray-200 animate-pulse rounded-md flex items-center justify-center">
              <span className="text-gray-500 text-sm">Loading image...</span>
            </div>
          )}
          <img 
            src={question.image} 
            alt="Question visual" 
            className={`w-full h-auto max-h-60 object-contain rounded-md ${imageLoaded ? 'block' : 'hidden'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      )}
      
      {imageError && question.image && (
        <div className="mb-4 p-3 bg-gray-100 rounded-md flex items-center justify-center">
          <AlertCircle className="h-5 w-5 text-gray-500 mr-2" />
          <span className="text-gray-600 text-sm">Image could not be loaded</span>
        </div>
      )}
      
      <div className="space-y-3 mb-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={selectedAnswer !== undefined}
            className={`w-full text-left p-4 border rounded-lg transition-all duration-200 ${getOptionClass(index)}`}
          >
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-sm font-medium">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-gray-800">{option}</span>
            </div>
          </button>
        ))}
      </div>
      
      {showExplanation && (
        <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} mt-4`}>
          <div className="flex items-start">
            <div className={`rounded-full p-1 mr-3 flex-shrink-0 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
              {isCorrect ? (
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <div>
              <p className="font-medium mb-2">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
              <p className="text-sm">{question.explanation}</p>
              {!isCorrect && (
                <p className="mt-2 text-sm font-medium">
                  Correct answer: {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;