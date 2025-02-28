export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  image?: string;
}

export interface ExamResult {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  score: number;
  passingScore: number;
  passed: boolean;
  answeredQuestions: {
    question: Question;
    selectedAnswer: number;
    isCorrect: boolean;
  }[];
}

export interface TestResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  categories: {
    name: string;
    correct: number;
    total: number;
  }[];
  passed: boolean;
  answers: {
    questionId: number;
    selectedAnswer: number;
    correctAnswer: number;
    isCorrect: boolean;
  }[];
}