import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, GraduationCap, Hash, User, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    rollNo: ''
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // Simulate Google Auth network request
    setTimeout(() => {
        setFormData({
            ...formData,
            name: "Aditya Verma", // Simulated data from Google
            email: "aditya.verma@example.com"
        });
        setIsLoading(false);
        setStep(2);
    }, 1500);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(formData.branch && formData.rollNo) {
        // Save user to context (simulating backend)
        login(formData);
        // Redirect to quiz page
        navigate('/quiz');
    }
  };

  const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
        <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
        />
        <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
        />
        <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
        />
        <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
        />
    </svg>
  );

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-black relative overflow-hidden">
        {/* Decorative backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-neon-purple/20 rounded-full blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-md p-4">
        <button onClick={() => navigate('/')} className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </button>

        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          
          {step === 1 ? (
            <>
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white font-mono">Sign In</h2>
                    <p className="text-gray-400 mt-2">Access the contest dashboard</p>
                </div>

                <div className="space-y-6">
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                        className="w-full flex items-center justify-center py-3.5 px-4 border border-gray-600 rounded-lg shadow-sm bg-white text-gray-900 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-purple transition-all transform hover:scale-[1.02]"
                    >
                        {isLoading ? (
                            <span className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin mr-3"></span>
                        ) : (
                            <GoogleIcon />
                        )}
                        {isLoading ? "Connecting..." : "Continue with Google"}
                    </button>
                    
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-black text-gray-500 rounded">Trusted by Model Club</span>
                        </div>
                    </div>

                    <p className="text-center text-xs text-gray-500">
                        By continuing, you agree to the Terms of Service and Privacy Policy.
                    </p>
                </div>
            </>
          ) : (
            <form onSubmit={handleFinalSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white font-mono">Almost There!</h2>
                    <p className="text-gray-400 text-sm mt-1">Please provide your academic details to complete registration.</p>
                </div>

                <div className="space-y-4">
                    {/* Read-only fields from Google */}
                    <div className="grid grid-cols-1 gap-4">
                         <div className="bg-black/40 border border-gray-800 rounded-lg p-3 flex items-center">
                            <User className="w-5 h-5 text-gray-500 mr-3" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Name</p>
                                <p className="text-gray-300 font-medium">{formData.name}</p>
                            </div>
                         </div>
                         <div className="bg-black/40 border border-gray-800 rounded-lg p-3 flex items-center">
                            <Mail className="w-5 h-5 text-gray-500 mr-3" />
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
                                <p className="text-gray-300 font-medium">{formData.email}</p>
                            </div>
                         </div>
                    </div>

                    {/* New Input fields */}
                    <div>
                        <label className="block text-sm font-medium text-neon-cyan mb-2">Branch</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <GraduationCap className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                            type="text"
                            required
                            value={formData.branch}
                            onChange={(e) => setFormData({...formData, branch: e.target.value})}
                            className="block w-full pl-10 bg-black/40 border border-gray-700 rounded-lg py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                            placeholder="e.g. CSE, ME, ECE"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-neon-cyan mb-2">Roll Number</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Hash className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                            type="text"
                            required
                            value={formData.rollNo}
                            onChange={(e) => setFormData({...formData, rollNo: e.target.value})}
                            className="block w-full pl-10 bg-black/40 border border-gray-700 rounded-lg py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                            placeholder="e.g. 210056"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-neon-purple to-purple-800 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-purple transition-all transform active:scale-95"
                >
                    Complete Registration
                </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default Login;