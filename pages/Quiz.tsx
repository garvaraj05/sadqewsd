import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Timer, AlertTriangle, ChevronRight, Brain, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const questions = [
  {
    id: 1,
    question: "I am the smallest positive number that is neither prime nor composite. Who am I?",
    options: ["0", "1", "2", "3"]
  },
  {
    id: 2,
    question: "Multiply the answer from Question 1 with the number of sides in the simplest polygon. What do you get?",
    options: ["2", "3", "1", "4"]
  },
  {
    id: 3,
    question: "The answer from Question 2 represents a month of the year. Which Indian festival is commonly celebrated in this month?",
    options: ["Diwali", "Holi", "Raksha Bandhan", "Dussehra"]
  },
  {
    id: 4,
    question: "What is the primary color most associated with the festival in Question 3?",
    options: ["Black", "Blue", "Red", "Grey"]
  },
  {
    id: 5,
    question: "Take the first letter of the color from Question 4. Which programming language begins with this letter?",
    options: ["Ruby", "Python", "Java", "C"]
  },
  {
    id: 6,
    question: "Which of the following is a valid keyword from the language in Question 5?",
    options: ["import", "alias", "static", "boolean"]
  },
  {
    id: 7,
    question: "Count the number of letters in the keyword from Question 6 and subtract 2. What is the result?",
    options: ["5", "4", "3", "2"]
  },
  {
    id: 8,
    question: "This number corresponds to a fundamental law of motion. Who proposed these laws?",
    options: ["Einstein", "Newton", "Galileo", "Kepler"]
  },
  {
    id: 9,
    question: "Which apple variety is popularly linked with the scientist from Question 8?",
    options: ["Red Apple", "Kashmiri Apple", "Green Apple", "Fuji Apple"]
  },
  {
    id: 10,
    question: "Take the color of the apple from Question 9. Which planet often appears in this color in illustrations?",
    options: ["Jupiter", "Mars", "Mercury", "Neptune"]
  }
];

const Quiz: React.FC = () => {
  const { user, completeQuiz } = useAuth();
  const navigate = useNavigate();
  // Initialize state based on whether user has already completed quiz
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'completed'>(
    user?.quizCompleted ? 'completed' : 'intro'
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    // Safety check if user state updates late
    if (user?.quizCompleted && gameState !== 'completed') {
        setGameState('completed');
    }
  }, [user, navigate, gameState]);

  useEffect(() => {
    let timer: any;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
            if (prev <= 1) {
                completeQuiz();
                setGameState('completed');
                return 0;
            }
            return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft, completeQuiz]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: option });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      completeQuiz();
      setGameState('completed');
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  if (gameState === 'intro') {
    return (
      <div className="min-h-screen pt-16 bg-black flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-4xl w-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center mb-8 text-neon-purple">
            <AlertTriangle className="w-10 h-10 mr-4" />
            <h1 className="text-3xl md:text-4xl font-mono font-bold tracking-tighter">OPERATION PARADOX</h1>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Round 1: The Trigger <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Enter the Paradox</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed mb-10 border-l-4 border-neon-cyan pl-6 font-light">
            <p>Welcome to Round 1 of Operation Paradox: The Hunt Beyond Logic. This is where your mission begins.</p>
            <p>In this stage, you’ll face rapid-fire riddles, subtle traps, hidden clues, and pattern-based puzzles designed to test how well you can think beyond the obvious.</p>
            <p><strong className="text-white font-semibold">Decode the clues. Outsmart the illusions. Trigger the next phase.</strong></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Duration", val: "5 Minutes" },
              { label: "Format", val: "10 MCQs" },
              { label: "Target", val: "Logic Survival" }
            ].map((stat, i) => (
              <div key={i} className="bg-black/40 p-5 rounded-xl border border-white/10 hover:border-neon-purple/50 transition-colors">
                <span className="block text-gray-500 text-xs font-mono uppercase tracking-wider mb-1">{stat.label}</span>
                <span className="text-xl md:text-2xl text-white font-mono font-bold">{stat.val}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setGameState('playing')}
            className="w-full bg-neon-purple hover:bg-purple-600 text-white font-bold py-5 rounded-xl text-xl font-mono tracking-widest transition-all shadow-[0_0_25px_rgba(176,38,255,0.4)] hover:shadow-[0_0_40px_rgba(176,38,255,0.6)] flex items-center justify-center group active:scale-[0.99]"
          >
            START MISSION
            <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'completed') {
    return (
      <div className="min-h-screen pt-16 bg-black flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-zinc-900/50 backdrop-blur-xl border border-neon-cyan/30 p-12 rounded-3xl shadow-[0_0_60px_rgba(0,243,255,0.15)]"
            >
                <div className="w-28 h-28 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                    <Brain className="w-14 h-14 text-neon-cyan" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono tracking-tighter">MISSION STATUS: LOGGED</h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
                    Your responses have been encrypted and sent to the mainframe. The Paradox is analyzing your logic patterns.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-10 max-w-md mx-auto">
                    <p className="text-neon-cyan font-mono text-base">Agent: {user?.name}</p>
                    <p className="text-sm text-gray-500 mt-2">Results will be announced on the dashboard.</p>
                </div>
                <button 
                    onClick={() => navigate('/')}
                    className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/10 hover:border-white/30"
                >
                    Return to Base
                </button>
            </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-black text-white relative overflow-hidden flex flex-col">
        
        {/* Sticky Header */}
        <div className="fixed top-16 left-0 w-full bg-black/80 backdrop-blur-lg border-b border-white/10 z-40">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
                <div className="flex items-center text-neon-purple font-mono text-xl font-bold tracking-wider">
                    <Timer className="w-5 h-5 mr-3 animate-pulse" />
                    {formatTime(timeLeft)}
                </div>
                <div className="text-gray-400 text-sm font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    Question <span className="text-white font-bold">{currentQuestion + 1}</span> / {questions.length}
                </div>
            </div>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-gray-900 w-full">
                <motion.div 
                    className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex items-center justify-center p-4 md:p-6 mt-16 pb-24">
            <div className="max-w-5xl w-full">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-zinc-900/60 border border-white/10 p-6 md:p-12 rounded-3xl relative backdrop-blur-md shadow-2xl"
                    >
                        {/* Background Effect inside card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <span className="inline-flex items-center px-4 py-1.5 bg-neon-cyan/10 text-neon-cyan text-xs font-mono font-bold rounded-full border border-neon-cyan/20">
                                    QUERY_ID: 00{currentQ.id}
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-4xl font-bold mb-10 leading-snug font-sans text-white">
                                {currentQ.question}
                            </h3>

                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                {currentQ.options.map((option, index) => {
                                    const isSelected = answers[currentQ.id] === option;
                                    return (
                                        <motion.button
                                            key={index}
                                            variants={itemVariants}
                                            onClick={() => handleOptionSelect(option)}
                                            className={`relative w-full text-left p-5 md:p-6 rounded-2xl border-2 transition-all duration-200 flex items-center group overflow-hidden ${
                                                isSelected
                                                ? 'bg-neon-purple/10 border-neon-purple text-white shadow-[0_0_20px_rgba(176,38,255,0.2)]'
                                                : 'bg-black/60 border-gray-800 text-gray-400 hover:border-gray-600 hover:bg-white/5'
                                            }`}
                                        >
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-5 flex-shrink-0 transition-colors ${
                                                isSelected
                                                ? 'border-neon-purple bg-neon-purple'
                                                : 'border-gray-600 group-hover:border-gray-400'
                                            }`}>
                                                {isSelected && <Check className="w-3 h-3 text-white" />}
                                            </div>
                                            <span className={`font-mono text-lg md:text-xl ${isSelected ? 'font-bold' : 'font-medium'}`}>
                                                {option}
                                            </span>
                                            
                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                        </motion.button>
                                    );
                                })}
                            </motion.div>

                            <div className="mt-12 flex justify-end border-t border-white/10 pt-8">
                                <button
                                    onClick={handleNext}
                                    disabled={!answers[currentQ.id]}
                                    className={`px-10 py-4 rounded-xl font-bold transition-all flex items-center text-lg font-mono tracking-wide ${
                                        answers[currentQ.id]
                                        ? 'bg-white text-black hover:bg-gray-200 shadow-lg transform hover:-translate-y-1'
                                        : 'bg-gray-800 text-gray-600 cursor-not-allowed'
                                    }`}
                                >
                                    {currentQuestion === questions.length - 1 ? 'SUBMIT MISSION' : 'NEXT QUERY'}
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    </div>
  );
};

export default Quiz;