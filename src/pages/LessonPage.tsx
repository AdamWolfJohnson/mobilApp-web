import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  XCircle,
  HelpCircle,
  AlertTriangle,
  Info,
  Menu,
  X,
  ArrowRight,
  Bookmark,
  Share2,
  Lightbulb,
  AlertCircle as AlertIcon
} from 'lucide-react';

interface LessonContent {
  id: string;
  title: string;
  duration: string;
  sections: LessonSection[];
  questions: QuizQuestion[];
}

interface LessonSection {
  title: string;
  content: string;
  image?: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [activeSection, setActiveSection] = useState(0);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showTipBox, setShowTipBox] = useState(true);
  
  // This would normally come from an API or database
  const lessonContent: Record<string, LessonContent> = {
    'general-concepts': {
      id: 'general-concepts',
      title: 'Genel Kavramlar',
      duration: '15 dk',
      sections: [
        {
          title: 'Trafik Kurallarının Önemi',
          content: `
            <p>Trafik kuralları, yollarda güvenli ve düzenli bir trafik akışı sağlamak için oluşturulmuş kurallardır. Bu kurallar, tüm yol kullanıcılarının güvenliğini sağlamak ve trafik kazalarını önlemek amacıyla tasarlanmıştır.</p>
            
            <p>Trafik kurallarına uymak sadece yasal bir zorunluluk değil, aynı zamanda kendinizin ve diğer yol kullanıcılarının güvenliği için hayati önem taşır. İsveç'te trafik kurallarına uyulmaması durumunda ciddi para cezaları, ehliyet puanı kaybı ve hatta ehliyetin askıya alınması gibi yaptırımlar uygulanabilir.</p>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">İsveç'te Trafik Kurallarının Temel İlkeleri</h3>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Dikkat ve Özen:</strong> Tüm sürücüler, yolda dikkatli ve özenli olmakla yükümlüdür.</li>
              <li><strong>Hız Limitleri:</strong> Belirtilen hız limitlerini aşmamak, yol ve hava koşullarına göre hızı ayarlamak.</li>
              <li><strong>Öncelik Kuralları:</strong> Kavşaklarda ve yol kesişimlerinde öncelik kurallarına uymak.</li>
              <li><strong>Güvenli Mesafe:</strong> Öndeki araçla güvenli bir takip mesafesi bırakmak.</li>
              <li><strong>Sinyal Kullanımı:</strong> Dönüşlerde ve şerit değiştirirken sinyal vermek.</li>
            </ul>
          `,
          image: 'https://images.unsplash.com/photo-1503416997304-7f8bf166c121?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Trafik İşaretleri ve Anlamları',
          content: `
            <p>Trafik işaretleri, yol kullanıcılarına bilgi vermek, uyarmak ve yönlendirmek için kullanılan görsel işaretlerdir. İsveç'te trafik işaretleri genellikle dört kategoriye ayrılır:</p>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">1. Uyarı İşaretleri</h3>
            <p>Genellikle üçgen şeklinde ve kırmızı çerçeveli olan bu işaretler, sürücüleri potansiyel tehlikeler konusunda uyarır. Örneğin, keskin viraj, yol çalışması, yaya geçidi gibi.</p>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">2. Yasaklama ve Kısıtlama İşaretleri</h3>
            <p>Genellikle daire şeklinde ve kırmızı çerçeveli olan bu işaretler, belirli eylemleri yasaklar veya kısıtlar. Örneğin, hız sınırı, park yasağı, geçiş yasağı gibi.</p>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">3. Bilgi ve Yönlendirme İşaretleri</h3>
            <p>Genellikle dikdörtgen veya kare şeklinde olan bu işaretler, yol kullanıcılarına bilgi verir ve yönlendirir. Örneğin, hastane, park yeri, benzin istasyonu gibi.</p>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">4. Zorunluluk İşaretleri</h3>
            <p>Genellikle mavi daire şeklinde olan bu işaretler, belirli eylemlerin zorunlu olduğunu belirtir. Örneğin, ileri gitme zorunluluğu, bisiklet yolu, yaya yolu gibi.</p>
            
            <p class="mt-4">Trafik işaretlerini doğru şekilde tanımak ve anlamak, güvenli sürüş için temel bir gerekliliktir. İsveç sürücü sınavında, trafik işaretleri hakkında detaylı sorular sorulur.</p>
          `,
          image: 'https://images.unsplash.com/photo-1566847438217-76e82d383f84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Yol Çizgileri ve İşaretleri',
          content: `
            <p>Yol çizgileri ve işaretleri, trafik akışını düzenlemek ve yol kullanıcılarına rehberlik etmek için kullanılır. İsveç'te kullanılan başlıca yol çizgileri şunlardır:</p>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">Kesintisiz Çizgiler</h3>
            <p>Kesintisiz (düz) çizgiler, geçilmemesi gereken sınırları belirtir. Kesintisiz bir çizgiyi geçmek genellikle yasaktır.</p>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">Kesintili Çizgiler</h3>
            <p>Kesintili (noktalı) çizgiler, güvenli olduğunda geçilebilecek sınırları belirtir. Şerit değiştirme veya sollama yaparken kullanılabilir.</p>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">Çift Çizgiler</h3>
            <p>İki paralel çizgi, her iki yöndeki trafik akışını ayırır. İki kesintisiz çizgi, her iki yönden de geçilmemesi gerektiğini belirtir. Bir kesintisiz ve bir kesintili çizgi, kesintili çizgi tarafındaki sürücülerin geçiş yapabileceğini gösterir.</p>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">Yaya Geçitleri</h3>
            <p>Zebra çizgileri olarak da bilinen beyaz paralel çizgiler, yayaların güvenle karşıdan karşıya geçebileceği alanları belirtir. Sürücüler, yaya geçitlerinde yayalara yol vermekle yükümlüdür.</p>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">Dur Çizgisi</h3>
            <p>Kalın beyaz çizgi, sürücülerin durması gereken noktayı belirtir. Genellikle trafik ışıkları veya dur işaretleri ile birlikte kullanılır.</p>
            
            <p class="mt-4">Yol çizgileri ve işaretlerini doğru şekilde yorumlamak, güvenli ve kurallara uygun sürüş için önemlidir.</p>
          `,
          image: 'https://images.unsplash.com/photo-1503416997304-7f8bf166c121?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
          title: 'Sürücü Sorumlulukları',
          content: `
            <p>Her sürücü, trafikte belirli sorumlulukları yerine getirmekle yükümlüdür. İsveç'te sürücülerin temel sorumlulukları şunlardır:</p>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">Yasal Sorumluluklar</h3>
            <ul class="list-disc pl-6 space-y-2">
              <li>Geçerli bir sürücü belgesi ve araç ruhsatı bulundurmak</li>
              <li>Aracın trafik sigortasının olduğundan emin olmak</li>
              <li>Aracın düzenli bakımını ve muayenesini yaptırmak</li>
              <li>Trafik kurallarına ve işaretlerine uymak</li>
              <li>Alkol veya uyuşturucu etkisi altında araç kullanmamak</li>
            </ul>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">Güvenlik Sorumlulukları</h3>
            <ul class="list-disc pl-6 space-y-2">
              <li>Sürüş öncesi aracın güvenlik kontrollerini yapmak</li>
              <li>Emniyet kemeri takmak ve yolcuların da takmasını sağlamak</li>
              <li>Çocuklar için uygun güvenlik koltuğu kullanmak</li>
              <li>Cep telefonu gibi dikkat dağıtıcı cihazları sürüş sırasında kullanmamak</li>
              <li>Hava ve yol koşullarına uygun hızda seyretmek</li>
            </ul>
            
            <h3 class="text-lg font-semibold mt-6 mb-3">Etik Sorumluluklar</h3>
            <ul class="list-disc pl-6 space-y-2">
              <li>Diğer yol kullanıcılarına saygılı davranmak</li>
              <li>Agresif sürüşten kaçınmak</li>
              <li>Yayalara ve bisikletlilere karşı dikkatli olmak</li>
              <li>Çevre kirliliğini en aza indirmek için ekonomik sürüş yapmak</li>
              <li>Kaza durumunda yardım etmek ve gerekli bildirimleri yapmak</li>
            </ul>
            
            <p class="mt-4">Bu sorumlulukları yerine getirmek, hem kendinizin hem de diğer yol kullanıcılarının güvenliği için önemlidir.</p>
          `,
          image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        }
      ],
      questions: [
        {
          question: "İsveç'te yol çizgileri hakkında hangisi doğrudur?",
          options: [
            "Kesintisiz çizgiler her zaman geçilebilir",
            "Kesintili çizgiler hiçbir zaman geçilemez",
            "Kesintisiz çizgiler geçilmemesi gereken sınırları belirtir",
            "Çift kesintili çizgiler her iki yönden de geçilemez"
          ],
          correctAnswer: 2,
          explanation: "Kesintisiz (düz) çizgiler, geçilmemesi gereken sınırları belirtir. Bu çizgileri geçmek genellikle yasaktır ve trafik kurallarının ihlali anlamına gelir."
        },
        {
          question: "Aşağıdakilerden hangisi sürücünün yasal sorumluluklarından biri değildir?",
          options: [
            "Geçerli bir sürücü belgesi bulundurmak",
            "Aracın trafik sigortasının olduğundan emin olmak",
            "Her gün araç yıkamak",
            "Alkol etkisi altında araç kullanmamak"
          ],
          correctAnswer: 2,
          explanation: "Her gün araç yıkamak bir yasal sorumluluk değildir. Bu bir tercih meselesidir. Diğer seçenekler ise İsveç'te sürücülerin yasal sorumluluklarıdır."
        },
        {
          question: "Üçgen şeklinde ve kırmızı çerçeveli trafik işaretleri genellikle neyi ifade eder?",
          options: [
            "Yasaklama ve kısıtlama",
            "Uyarı",
            "Bilgi ve yönlendirme",
            "Zorunluluk"
          ],
          correctAnswer: 1,
          explanation: "Üçgen şeklinde ve kırmızı çerçeveli trafik işaretleri genellikle uyarı işaretleridir. Bu işaretler, sürücüleri potansiyel tehlikeler konusunda uyarır."
        }
      ]
    }
  };
  
  const lesson = lessonContent[lessonId || ''] || null;
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Effect to scroll to top when changing sections or questions
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection, quizMode, currentQuestionIndex, quizCompleted]);
  
  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Ders Bulunamadı</h1>
              <p className="text-gray-600 mb-6">
                Aradığınız ders içeriği bulunamadı veya henüz yayınlanmamış olabilir.
              </p>
              <Link 
                to="/theory-lessons" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Tüm Derslere Dön
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const handleNextSection = () => {
    if (activeSection < lesson.sections.length - 1) {
      setActiveSection(activeSection + 1);
    } else {
      setQuizMode(true);
    }
  };
  
  const handlePrevSection = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1);
    }
  };
  
  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < lesson.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(selectedAnswers[currentQuestionIndex - 1] !== undefined);
    }
  };
  
  const handleRestartLesson = () => {
    setActiveSection(0);
    setQuizMode(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowExplanation(false);
    setQuizCompleted(false);
  };
  
  const calculateScore = () => {
    let correctCount = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === lesson.questions[index].correctAnswer) {
        correctCount++;
      }
    });
    return {
      correct: correctCount,
      total: lesson.questions.length,
      percentage: Math.round((correctCount / lesson.questions.length) * 100)
    };
  };
  
  // Render quiz results
  if (quizCompleted) {
    const score = calculateScore();
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">{lesson.title} - Quiz Sonuçları</h1>
              <Link 
                to="/theory-lessons" 
                className="text-white hover:text-blue-100 flex items-center"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Tüm Derslere Dön
              </Link>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <div className="flex flex-col items-center justify-center mb-8">
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center text-3xl font-bold mb-4 ${
                    score.percentage >= 70 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {score.percentage}%
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2">
                    {score.percentage >= 70 ? 'Tebrikler!' : 'Tekrar Deneyebilirsiniz'}
                  </h2>
                  
                  <p className="text-gray-600 text-center">
                    {score.correct} doğru, {score.total - score.correct} yanlış cevap verdiniz.
                    {score.percentage >= 70 
                      ? ' Bu dersi başarıyla tamamladınız!' 
                      : ' Dersi tekrar gözden geçirmenizi öneririz.'}
                  </p>
                </div>
                
                <h3 className="font-bold text-lg mb-4">Soru İncelemesi</h3>
                
                {lesson.questions.map((question, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={index} className="mb-6 p-4 border rounded-lg hover:shadow-md transition-all duration-200">
                      <div className="flex items-start">
                        <div className={`rounded-full p-1 mr-3 flex-shrink-0 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                          {isCorrect ? (
                            <CheckCircle className={`h-5 w-5 ${isCorrect ? 'text-green-600' : 'text-red-600'}`} />
                          ) : (
                            <XCircle className={`h-5 w-5 ${isCorrect ? 'text-green-600' : 'text-red-600'}`} />
                          )}
                        </div>
                        <div>
                          <p className="font-medium mb-3">{question.question}</p>
                          <p className="text-sm mb-2">
                            Cevabınız: <span className={isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                              {question.options[userAnswer]}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm mb-2 text-green-600 font-medium">
                              Doğru cevap: {question.options[question.correctAnswer]}
                            </p>
                          )}
                          <div className="text-sm mt-3 text-gray-600 bg-gray-50 p-3 rounded">
                            <strong>Açıklama:</strong> {question.explanation}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                <div className="flex justify-between mt-8">
                  <Link 
                    to="/theory-lessons" 
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center"
                  >
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    Tüm Derslere Dön
                  </Link>
                  
                  <button
                    onClick={handleRestartLesson}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                  >
                    Dersi Tekrar Çalış
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Render quiz
  if (quizMode) {
    const currentQuestion = lesson.questions[currentQuestionIndex];
    const userAnswer = selectedAnswers[currentQuestionIndex];
    const isCorrect = userAnswer === currentQuestion.correctAnswer;
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">{lesson.title} - Quiz</h1>
              <div className="text-sm bg-white text-blue-700 px-3 py-1 rounded-full font-medium">
                Soru {currentQuestionIndex + 1} / {lesson.questions.length}
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-8">
                <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
                
                <div className="space-y-3 mb-6">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={`w-full text-left p-4 border rounded-lg transition-all duration-200 ${
                        showExplanation && index === currentQuestion.correctAnswer
                          ? 'bg-green-100 border-green-500'
                          : showExplanation && userAnswer === index
                            ? userAnswer === currentQuestion.correctAnswer
                              ? 'bg-green-100 border-green-500'
                              : 'bg-red-100 border-red-500'
                            : userAnswer === index
                              ? 'bg-blue-100 border-blue-500'
                              : 'hover:bg-gray-100 border-gray-300'
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
                
                {showExplanation && (
                  <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} mb-6`}>
                    <div className="flex items-start">
                      <div className={`rounded-full p-1 mr-3 flex-shrink-0 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium mb-2">{isCorrect ? 'Doğru!' : 'Yanlış'}</p>
                        <p>{currentQuestion.explanation}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <button
                    onClick={handlePrevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      currentQuestionIndex === 0 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    Önceki
                  </button>
                  
                  {showExplanation ? (
                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                    >
                      {currentQuestionIndex === lesson.questions.length - 1 ? 'Sonuçları Gör' : 'Sonraki'}
                      <ChevronRight className="h-5 w-5 ml-1" />
                    </button>
                  ) : (
                    <div className="flex items-center text-gray-500">
                      <HelpCircle className="h-5 w-5 mr-1" />
                      <span>Lütfen bir cevap seçin</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg flex items-start">
              <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-700">
                  Bu quiz, derste öğrendiğiniz bilgileri test etmek için tasarlanmıştır. Her soruyu dikkatlice okuyun ve en doğru cevabı seçin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Render lesson content
  const currentSection = lesson.sections[activeSection];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
        showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          showSidebar ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-4">
            <h3 className="font-semibold mb-3">Bölümler</h3>
            <div className="space-y-2">
              {lesson.sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSection(index);
                    setShowSidebar(false);
                  }}
                  className={`w-full text-left p-2 rounded-md flex items-center ${
                    activeSection === index 
                      ? 'bg-blue-100 text-blue-700' 
                      : index < activeSection 
                        ? 'bg-green-50 text-green-700' 
                        : 'hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ${
                    activeSection === index 
                      ? 'bg-blue-600 text-white' 
                      : index < activeSection 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-200 text-gray-700'
                  }`}>
                    {index < activeSection ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className="truncate">{section.title}</span>
                </button>
              ))}
              <button
                className={`w-full text-left p-2 rounded-md flex items-center ${
                  quizMode ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                }`}
                onClick={() => {
                  setQuizMode(true);
                  setShowSidebar(false);
                }}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ${
                  quizMode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}>
                  <span>Q</span>
                </div>
                <span>Quiz</span>
              </button>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link 
                to="/theory-lessons" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
                onClick={() => setShowSidebar(false)}
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Tüm Derslere Dön
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">{lesson.title}</h1>
              <div className="flex items-center mt-2">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">{lesson.duration}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full">
                <Bookmark className="h-5 w-5" />
              </button>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="bg-gray-200 h-2">
        <div 
          className="bg-blue-600 h-2 transition-all duration-300"
          style={{ width: `${((activeSection + 1) / lesson.sections.length) * 100}%` }}
        ></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Desktop Only */}
          <div className="hidden md:block md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-8">
              <h3 className="font-semibold mb-3">Bölümler</h3>
              <div className="space-y-2">
                {lesson.sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`w-full text-left p-2 rounded-md flex items-center ${
                      activeSection === index 
                        ? 'bg-blue-100 text-blue-700' 
                        : index < activeSection 
                          ? 'bg-green-50 text-green-700' 
                          : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ${
                      activeSection === index 
                        ? 'bg-blue-600 text-white' 
                        : index < activeSection 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-200 text-gray-700'
                    }`}>
                      {index < activeSection ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                    <span className="truncate">{section.title}</span>
                  </button>
                ))}
                <button
                  className={`w-full text-left p-2 rounded-md flex items-center ${
                    quizMode ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setQuizMode(true)}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ${
                    quizMode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}>
                    <span>Q</span>
                  </div>
                  <span>Quiz</span>
                </button>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link 
                  to="/theory-lessons" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  Tüm Derslere Dön
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4" ref={contentRef}>
            {/* Section Title */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentSection.title}</h2>
              <div className="flex items-center text-sm text-gray-500">
                <span>Bölüm {activeSection + 1} / {lesson.sections.length}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{lesson.duration}</span>
              </div>
            </div>
            
            {/* Tip Box */}
            {showTipBox && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 relative">
                <button 
                  className="absolute top-2 right-2 text-amber-500 hover:text-amber-700"
                  onClick={() => setShowTipBox(false)}
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-800 mb-1">Öğrenme İpucu</h3>
                    <p className="text-sm text-amber-700">
                      Bu dersi daha iyi anlamak için, her bölümü dikkatlice okuyun ve önemli noktaları not alın. 
                      Bölüm sonundaki quiz, öğrendiklerinizi pekiştirmenize yardımcı olacaktır.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Main Content Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              {/* Featured Image */}
              {currentSection.image && (
                <div className="w-full h-64 overflow-hidden">
                  <img 
                    src={currentSection.image} 
                    alt={currentSection.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="p-8">
                <div 
                  className="prose prose-blue max-w-none prose-headings:mt-8 prose-headings:mb-4 prose-p:mb-5 prose-p:leading-relaxed prose-li:mb-2 prose-li:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: currentSection.content }}
                ></div>
                
                {/* Key Points */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <AlertIcon className="h-5 w-5 text-blue-600 mr-2" />
                    Önemli Noktalar
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-2 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Trafik kuralları, yollarda güvenli ve düzenli bir trafik akışı sağlamak için oluşturulmuştur.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-2 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Trafik işaretleri dört ana kategoriye ayrılır: uyarı, yasaklama, bilgi ve zorunluluk işaretleri.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-2 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Her sürücü, yasal, güvenlik ve etik sorumlulukları yerine getirmekle yükümlüdür.</span>
                    </li>
                  </ul>
                </div>
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                  <button
                    onClick={handlePrevSection}
                    disabled={activeSection === 0}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      activeSection === 0 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    Önceki Bölüm
                  </button>
                  
                  <button
                    onClick={handleNextSection}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                  >
                    {activeSection === lesson.sections.length - 1 ? 'Quiz\'e Başla' : 'Sonraki Bölüm'}
                    <ChevronRight className="h-5 w-5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Related Resources */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">İlgili Kaynaklar</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="#" className="flex items-center p-3 bg-white rounded-md border border-gray-200 hover:shadow-md transition-all duration-200">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-600">Trafik İşaretleri Rehberi</span>
                </a>
                 <a href="#" className="flex items-center p-3 bg-white rounded-md border border-gray-200 hover:shadow-md transition-all duration-200">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-600">Sürücü Sorumlulukları Kılavuzu</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-white rounded-md border border-gray-200 hover:shadow-md transition-all duration-200">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-600">Yol Çizgileri ve Anlamları</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-white rounded-md border border-gray-200 hover:shadow-md transition-all duration-200">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-600">Güvenli Sürüş Teknikleri</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;