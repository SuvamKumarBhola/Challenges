import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle, LogIn } from 'lucide-react';

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email) {
            tempErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = 'Invalid email format';
        }

        if (!formData.password) {
            tempErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters long';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            setTimeout(() => {
                console.log("Form Submitted Successfully", formData);
                alert("Login Successful!");
                setIsSubmitting(false);
            }, 1000);
        } else {
            console.log("Validation Failed");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                        <LogIn className="text-blue-600" size={32} />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back</h1>
                    <p className="text-slate-500">Sign in to your account</p>
                </div>

                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <Mail size={20} />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                                placeholder="you@example.com"
                                className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${errors.email
                                    ? 'border-red-300 focus:border-red-500'
                                    : 'border-slate-200 focus:border-blue-500'
                                    }`}
                            />
                        </div>
                        {errors.email && (
                            <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                                <AlertCircle size={16} />
                                <span>{errors.email}</span>
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <Lock size={20} />
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                                placeholder="Enter your password"
                                className={`w-full pl-11 pr-12 py-3 border-2 rounded-lg focus:outline-none transition-colors ${errors.password
                                    ? 'border-red-300 focus:border-red-500'
                                    : 'border-slate-200 focus:border-blue-500'
                                    }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {errors.password && (
                            <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                                <AlertCircle size={16} />
                                <span>{errors.password}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-slate-600">Remember me</span>
                        </label>
                        <button
                            type="button"
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className={`w-full py-3 rounded-lg font-semibold transition-all ${isSubmitting
                            ? 'bg-slate-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl active:scale-95'
                            } text-white`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Signing in...
                            </span>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-slate-600">
                        Don't have an account?{' '}
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                            Sign up
                        </button>
                    </p>
                </div>

                <div className="mt-6 flex items-center gap-4">
                    <div className="flex-1 h-px bg-slate-200" />
                    <span className="text-sm text-slate-400">Or continue with</span>
                    <div className="flex-1 h-px bg-slate-200" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-200 rounded-lg hover:bg-slate-50 transition-all active:scale-95">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span className="text-sm font-medium text-slate-700">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-200 rounded-lg hover:bg-slate-50 transition-all active:scale-95">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="text-sm font-medium text-slate-700">GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;