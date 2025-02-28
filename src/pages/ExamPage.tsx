import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';
import { questions } from '../data/questions';
import { ExamResult, Question } from '../types';
import { Clock, AlertCircle } from 'lucide-react';

const EXAM_TIME = 20 * 60; // 20 minutes in seconds
const PASSING_SCORE = 80; // 80% to pass

const ExamPage: React.FC = () => {
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(EXAM_TIME);
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  
  // Initialize exam with random questions
  useEffect(() => {
    if (examStarted && examQuestions.length === 0) {
      // Shuffle and select random questions
      const shuffled = [...questions].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 10); // Take 10 random questions
      setExamQuestions(selected);
      setSelectedAnswers(Array(selected.length).fill(-1));
    }
  }, [examStarted, examQuestions.length]);
  
  // Timer countdown
  useEffect(() => {
    let timer: number;
    
    if (examStarted && !examFinished && timeRemaining > 0) {
      timer = window.setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [examStarted, examFinished, timeRemaining]);
  
  const startExam = () => {
    setExamStarted(true);
    setExamFinished(false);
    setTimeRemaining(EXAM_TIME);
    setCurrentQuestionIndex(0);
  };
  
  const handleAnswer = (selectedOption: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setSelectedAnswers(newAnswers);
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const finishExam = () => {
    setExamFinished(true);
    
    // Calculate results
    let correctCount = 0;
    const answeredQuestions = examQuestions.map((question, index) => {
      const selectedAnswer = selectedAnswers[index];
      const isCorrect = selectedAnswer === question.correctAnswer;
      
      if (isCorrect) correctCount++;
      
      return {
        question,
        selectedAnswer,
        isCorrect
      };
    });
    
    const score = (correctCount / examQuestions.length) * 100;
    
    setExamResult({
      totalQuestions: examQuestions.length,
      correctAnswers: correctCount,
      wrongAnswers: examQuestions.length - correctCount,
      score,
      passingScore: PASSING_SCORE,
      passed: score >= PASSING_SCORE,
      answeredQuestions
    });
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  if (!examStarted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Exam Mode</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Exam Instructions</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>You will have 20 minutes to complete the exam</li>
            <li>The exam consists of 10 random questions</li>
            <li>You need to score at least 80% to pass</li>
            <li>You can navigate between questions</li>
            <li>Once you submit the exam, you cannot change your answers</li>
          </ul>
          
          <button
            onClick={startExam}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Start Exam
          </button>
        </div>
      </div>
    );
  }
  
  if (examFinished && examResult) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Exam Results</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className={`p-4 mb-6 rounded-md ${examResult.passed ? 'bg-green-100' : 'bg-red-100'}`}>
            <h2 className="text-xl font-bold mb-2">
              {examResult.passed ? 'Congratulations! You Passed!' : 'You Did Not Pass'}
            </h2>
            <p className={examResult.passed ? 'text-green-800' : 'text-red-800'}>
              Your score: {examResult.score.toFixed(0)}% (Passing score: {examResult.passingScore}%)
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Total Questions</p>
              <p className="text-xl font-bold">{examResult.totalQuestions}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm text-gray-500">Time Taken</p>
              <p className="text-xl font-bold">{formatTime(EXAM_TIME - timeRemaining)}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-md">
              <p className="text-sm text-green-600">Correct Answers</p>
              <p className="text-xl font-bold text-green-700">{examResult.correctAnswers}</p>
            </div>
            <div className="bg-red-50 p-3 rounded-md">
              <p className="text-sm text-red-600">Wrong Answers</p>
              <p className="text-xl font-bold text-red-700">{examResult.wrongAnswers}</p>
            </div>
          </div>
          
          <h3 className="font-bold text-lg mb-4">Question Review</h3>
          
          {examResult.answeredQuestions.map((item, index) => (
            <div key={index} className="mb-4 p-3 border rounded-md">
              <div className="flex items-start">
                <div className={`rounded-full p-1 mr-2 ${item.isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                  {item.isCorrect ? (
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="font-medium">{item.question.text}</p>
                  <p className="text-sm mt-1">
                    Your answer: <span className={item.isCorrect ? 'text-green-600' : 'text-red-600'}>
                      {item.question.options[item.selectedAnswer]}
                    </span>
                  </p>
                  {!item.isCorrect && (
                    <p className="text-sm mt-1 text-green-600">
                      Correct answer: {item.question.options[item.question.correctAnswer]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => {
                setExamStarted(false);
                setExamFinished(false);
                setExamResult(null);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Back to Instructions
            </button>
            
            <button
              onClick={startExam}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Take New Exam
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  if (examQuestions.length === 0) {
    return <div className="container mx-auto px-4 py-8">Loading exam questions...</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Exam Mode</h1>
        <div className={`flex items-center ${timeRemaining < 60 ? 'text-red-600 animate-pulse' : 'text-gray-700'}`}>
          <Clock className="h-5 w-5 mr-1" />
          <span className="font-medium">{formatTime(timeRemaining)}</span>
        </div>
      </div>
      
      <div className="bg-blue-50 p-3 rounded-md mb-4 flex items-start">
        <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
        <p className="text-sm text-blue-800">
          Answer all questions and click "Submit Exam" when you're finished. You can navigate between questions.
        </p>
      </div>
      
      <div className="mb-4 bg-white rounded-lg p-3 shadow-sm">
        <div className="flex flex-wrap gap-2">
          {examQuestions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                ${currentQuestionIndex === index ? 'ring-2 ring-blue-500' : ''}
                ${selectedAnswers[index] !== -1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      
      <QuestionCard 
        question={examQuestions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        showExplanation={false}
        selectedAnswer={selectedAnswers[currentQuestionIndex] !== -1 ? selectedAnswers[currentQuestionIndex] : undefined}
        showNavigation={true}
        onNext={handleNext}
        onPrevious={handlePrevious}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={examQuestions.length}
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
        
        {currentQuestionIndex === examQuestions.length - 1 ? (
          <button
            onClick={finishExam}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Submit Exam
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ExamPage;