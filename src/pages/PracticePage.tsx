import React, { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import { questions } from '../data/questions';

const PracticePage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  
  const currentQuestion = questions[currentQuestionIndex];
  const hasAnswered = selectedAnswers[currentQuestionIndex] !== -1;
  
  const handleAnswer = (selectedOption: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setSelectedAnswers(newAnswers);
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Practice Mode</h1>
      <p className="mb-4 text-gray-600">
        Take your time to practice with these questions. You'll see explanations after answering.
      </p>
      
      <QuestionCard 
        question={currentQuestion}
        onAnswer={handleAnswer}
        showExplanation={hasAnswered}
        selectedAnswer={hasAnswered ? selectedAnswers[currentQuestionIndex] : undefined}
        isCorrect={hasAnswered ? selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer : undefined}
        showNavigation={true}
        onNext={handleNext}
        onPrevious={handlePrevious}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
      />
      
      <div className="mt-6 flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-4 py-2 rounded-md ${
            currentQuestionIndex === 0 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
          className={`px-4 py-2 rounded-md ${
            currentQuestionIndex === questions.length - 1 
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PracticePage;