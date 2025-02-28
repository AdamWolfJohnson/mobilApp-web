import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { questions } from '../data/questions';
import { ArrowRight, AlertCircle, CheckCircle, Lock, ChevronLeft, ChevronRight, HelpCircle, Share2, ThumbsUp, ThumbsDown, Clock, Award, X } from 'lucide-react';

interface TestQuestion {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const DemoPracticePage: React.FC = () => {
  // Form states
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [accessGranted, setAccessGranted] = useState(false);
  
  // Practice states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(20 * 60); // 20 minutes in seconds
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // We'll show 15 questions in the demo
  const demoQuestions = questions.slice(0, 15).map((q, index) => ({
    id: index + 1,
    text: q.text,
    options: q.options,
    correctAnswer: q.correctAnswer
  }));
  
  // Timer effect
  useEffect(() => {
    let timer: number;
    if (testStarted && !testCompleted && timeRemaining > 0) {
      timer = window.setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            finishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [testStarted, testCompleted, timeRemaining]);
  
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!email.trim()) {
      errors.email = 'Email gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Geçerli bir email adresi giriniz';
    }
    
    if (!phone.trim()) {
      errors.phone = 'Telefon numarası gereklidir';
    } else if (!/^\+?[0-9\s-()]{8,}$/.test(phone)) {
      errors.phone = 'Geçerli bir telefon numarası giriniz';
    }
    
    return errors;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Initialize the answers array
    setSelectedAnswers(Array(demoQuestions.length).fill(-1));
    setAnsweredQuestions([]);
    
    // Grant access to the demo
    setAccessGranted(true);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const startTest = () => {
    setTestStarted(true);
    setTimeRemaining(20 * 60); // Reset to 20 minutes
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(demoQuestions.length).fill(-1));
    setAnsweredQuestions([]);
    setTestCompleted(false);
    setShowResults(false);
  };
  
  const handleAnswer = (selectedOption: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setSelectedAnswers(newAnswers);
    
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < demoQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const finishTest = () => {
    setTestCompleted(true);
    setShowResults(true);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const calculateScore = () => {
    let correctCount = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === demoQuestions[index].correctAnswer) {
        correctCount++;
      }
    });
    return {
      correct: correctCount,
      total: demoQuestions.length,
      percentage: Math.round((correctCount / demoQuestions.length) * 100)
    };
  };
  
  const isPassing = () => {
    const score = calculateScore();
    return score.percentage >= 70; // 70% is passing
  };
  
  const getResultsByCategory = () => {
    // Simulating categories for the demo
    return [
      { name: "Trafik İşaretleri", correct: 5, total: 6 },
      { name: "Trafik Kuralları", correct: 4, total: 5 },
      { name: "Araç Tekniği", correct: 3, total: 4 }
    ];
  };
  
  if (!accessGranted) {
    return (
      <div className="min-h-screen bg-gray-50 py-6 px-4 sm:py-12">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Sürücü Testi Demosu</h1>
              <p className="text-base sm:text-lg text-gray-600">
                Ehliyet sınavına hazırlanmak için ücretsiz deneme testimizi çözün.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-3">Hızlı Erişim</h2>
                <p className="text-gray-600 mb-5">
                  Kayıt gerekmez. Hemen başlamak için email ve telefon numaranızı girin.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Adresi
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base`}
                      placeholder="email@ornek.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon Numarası
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${formErrors.phone ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base`}
                      placeholder="05XX XXX XX XX"
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                    )}
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center text-base"
                    >
                      Ücretsiz Teste Başla
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </form>
                
                <div className="mt-5 text-sm text-gray-500">
                  Devam ederek{' '}
                  <a href="#" className="text-blue-600 hover:underline">Kullanım Şartları</a>{' '}
                  ve{' '}
                  <a href="#" className="text-blue-600 hover:underline">Gizlilik Politikası</a>'nı kabul etmiş olursunuz.
                </div>
              </div>
              
              <div className="bg-blue-50 px-5 py-4 sm:px-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">15 örnek soruya ücretsiz erişim</span> - Kredi kartı gerekmez
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Gerçek Sınav Soruları</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Gerçek ehliyet sınavına benzer sorularla pratik yapın.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Detaylı Sonuç Analizi</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Test sonunda detaylı analiz ve doğru cevapları görün.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Mobil Uyumlu</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Telefon, tablet veya bilgisayarınızdan her yerde çalışın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gray-50 py-6 px-4 sm:py-12">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Sürücü Testi Demosu</h1>
              <p className="text-base sm:text-lg text-gray-600">
                Teste başlamaya hazır mısınız?
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-3">Test Bilgileri</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <HelpCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">15 Soru</p>
                      <p className="text-sm text-gray-500">Çoktan seçmeli sorular</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">20 Dakika</p>
                      <p className="text-sm text-gray-500">Süre sınırı</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">%70 Başarı</p>
                      <p className="text-sm text-gray-500">Geçme notu</p>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={startTest}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center text-base"
                >
                  Teste Başla
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <div className="bg-yellow-50 px-5 py-4 sm:px-6">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-yellow-700">
                    <span className="font-medium">Önemli:</span> Test başladıktan sonra süre işlemeye başlayacak. Testi tamamlamak için tüm soruları cevaplayın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (showResults) {
    const score = calculateScore();
    const passed = isPassing();
    const categories = getResultsByCategory();
    
    return (
      <div className="min-h-screen bg-gray-50 py-6 px-4 sm:py-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="bg-gray-800 text-white p-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Test Sonuçları</h1>
                  <div className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" alt="Türk Bayrağı" className="h-6 mr-2" />
                    <span className="font-medium">Sürücü Testi</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-8">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">Aday Bilgileri</h2>
                    <p className="text-gray-600">Ad: {email.split('@')[0]}</p>
                    <p className="text-gray-600">Email: {email}</p>
                    <p className="text-gray-600">Telefon: {phone}</p>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:text-right">
                    <h2 className="text-lg font-semibold mb-1">Test Bilgileri</h2>
                    <p className="text-gray-600">Tarih: {new Date().toLocaleDateString()}</p>
                    <p className="text-gray-600">Süre: {formatTime(20 * 60 - timeRemaining)}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg mb-8">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className={`rounded-full p-3 ${passed ? 'bg-green-100' : 'bg-red-100'} mr-4`}>
                      {passed ? (
                        <CheckCircle className={`h-8 w-8 ${passed ? 'text-green-600' : 'text-red-600'}`} />
                      ) : (
                        <X className={`h-8 w-8 ${passed ? 'text-green-600' : 'text-red-600'}`} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{passed ? 'Başarılı' : 'Başarısız'}</h3>
                      <p className="text-gray-600">
                        {passed 
                          ? 'Tebrikler! Testi geçtiniz.' 
                          : 'Üzgünüz, testi geçemediniz. Tekrar deneyebilirsiniz.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{score.correct}/{score.total}</div>
                    <div className={`text-lg font-medium ${passed ? 'text-green-600' : 'text-red-600'}`}>
                      {score.percentage}%
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Kategori Bazında Sonuçlar</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Kategori
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Doğru
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Toplam
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Başarı
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {categories.map((category, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {category.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {category.correct}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {category.total}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                (category.correct / category.total) >= 0.7 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {Math.round((category.correct / category.total) * 100)}%
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Soru Detayları</h3>
                  <div className="space-y-4">
                    {demoQuestions.map((question, index) => {
                      const userAnswer = selectedAnswers[index];
                      const isCorrect = userAnswer === question.correctAnswer;
                      
                      return (
                        <div key={index} className="border rounded-lg overflow-hidden">
                          <div className="flex items-center justify-between bg-gray-50 px-4 py-2">
                            <div className="font-medium">Soru {index + 1}</div>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                              isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {isCorrect ? 'Doğru' : 'Yanlış'}
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="mb-3">{question.text}</p>
                            <div className="space-y-2">
                              {question.options.map((option, optIndex) => (
                                <div 
                                  key={optIndex} 
                                  className={`p-2 rounded-md ${
                                    optIndex === question.correctAnswer
                                      ? 'bg-green-100 border border-green-300'
                                      : userAnswer === optIndex && userAnswer !== question.correctAnswer
                                        ? 'bg-red-100 border border-red-300'
                                        : 'bg-gray-50 border border-gray-200'
                                  }`}
                                >
                                  <div className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-sm font-medium">
                                      {String.fromCharCode(65 + optIndex)}
                                    </span>
                                    <span>{option}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={startTest}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors flex-1 text-center"
                  >
                    Testi Tekrar Çöz
                  </button>
                  <Link
                    to="/signup"
                    className="px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors flex-1 text-center"
                  >
                    Tam Erişim İçin Kaydol
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-blue-800">Daha Fazla Pratik Yapın</h3>
                <p className="mt-1 text-sm text-blue-700">
                  Tam üyelik ile 1000+ soru, sınırsız test ve kişiselleştirilmiş çalışma planına erişin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const currentQuestion = demoQuestions[currentQuestionIndex];
  
  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4 sm:py-8">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Header with timer */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center">
            <h1 className="text-lg font-bold text-gray-900">Sürücü Testi</h1>
            <div className={`flex items-center ${timeRemaining < 60 ? 'text-red-600 animate-pulse' : 'text-gray-700'}`}>
              <Clock className="h-5 w-5 mr-1" />
              <span className="font-medium">Zaman kısıtlaması: {formatTime(timeRemaining)}</span>
            </div>
          </div>
          
          {/* Question card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <div className="p-4 sm:p-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold">
                  Soru {currentQuestionIndex + 1} - {demoQuestions.length}
                </h2>
                <p className="text-lg mt-2">{currentQuestion.text}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-4 border rounded-lg transition-all duration-200 ${
                      selectedAnswers[currentQuestionIndex] === index
                        ? 'bg-blue-100 border-blue-500 shadow-md'
                        : 'hover:bg-gray-100 border-gray-300 hover:shadow-md'
                    }`}
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
              
              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`px-4 py-2 rounded-md flex items-center ${
                    currentQuestionIndex === 0 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  <span>Önceki</span>
                </button>
                
                {currentQuestionIndex === demoQuestions.length - 1 ? (
                  <button
                    onClick={finishTest}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
                  >
                    <span>Testi Bitir</span>
                    <CheckCircle className="h-5 w-5 ml-1" />
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                  >
                    <span>Sonraki</span>
                    <ChevronRight className="h-5 w-5 ml-1" />
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Question navigation */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
              {demoQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-full h-10 rounded-md flex items-center justify-center text-sm font-medium transition-colors
                    ${currentQuestionIndex === index ? 'bg-blue-600 text-white' : ''}
                    ${selectedAnswers[index] !== -1 && currentQuestionIndex !== index ? 'bg-blue-100 text-blue-600' : ''}
                    ${selectedAnswers[index] === -1 && currentQuestionIndex !== index ? 'bg-gray-100 text-gray-600' : ''}
                  `}
                  aria-label={`Soru ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-100 rounded-sm mr-1"></div>
                  <span className="text-xs text-gray-600">Cevaplanan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-100 rounded-sm mr-1"></div>
                  <span className="text-xs text-gray-600">Cevaplanmayan</span>
                </div>
              </div>
              
              <button
                onClick={finishTest}
                className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700"
              >
                Testi Bitir
              </button>
            </div>
          </div>
          
          {/* Info banner */}
          <div className="bg-yellow-50 rounded-lg p-4 flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-yellow-700">
                <span className="font-medium">İpucu:</span> Tüm soruları cevapladığınızdan emin olun. Cevaplamadığınız sorular yanlış kabul edilecektir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPracticePage;