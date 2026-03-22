'use client';

import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { Github, Facebook, Mail, Lock, User, ArrowRight, CheckCircle, Zap, Shield, Users } from 'lucide-react';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // --- Validation Schemas ---
    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const registerSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(2, 'Name is too short')
            .required('Full Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    // --- Formik Hooks ---
    const loginForm = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log('Login attempt:', values);
            alert('Login successful! Check console for data.');
        },
    });

    const registerForm = useFormik({
        initialValues: { fullName: '', email: '', password: '' },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            console.log('Register attempt:', values);
            alert('Registration successful! Check console for data.');
        },
    });

    const toggleMode = () => {
        // Reset forms when switching
        loginForm.resetForm();
        registerForm.resetForm();
        setIsLogin(!isLogin);
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className="min-h-screen flex">
            {/* --- Left Side: Branding & Info --- */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/10 to-transparent rounded-full"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20 text-white">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 mb-16">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 2C7.89543 2 7 2.89543 7 4V8C7 9.10457 7.89543 10 9 10H13C14.1046 10 15 9.10457 15 8V4C15 2.89543 14.1046 2 13 2H9Z" />
                                <path d="M9 14C7.89543 14 7 14.8954 7 16V20C7 21.1046 7.89543 22 9 22H13C14.1046 22 15 21.1046 15 20V16C15 14.8954 14.1046 14 13 14H9Z" />
                            </svg>
                        </div>
                        <span className="text-3xl font-bold">TaskFlow</span>
                    </Link>

                    {/* Hero Text */}
                    <h1 className="text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                        Manage tasks<br />
                        <span className="text-orange-500">effortlessly</span>
                    </h1>
                    <p className="text-slate-400 text-lg mb-12 max-w-md">
                        Join thousands of teams using TaskFlow to organize, track, and complete their projects on time.
                    </p>

                    {/* Features List */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-orange-500" />
                            </div>
                            <span className="text-slate-300">Easy task management & organization</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                <Zap className="w-4 h-4 text-orange-500" />
                            </div>
                            <span className="text-slate-300">Real-time collaboration</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                <Users className="w-4 h-4 text-orange-500" />
                            </div>
                            <span className="text-slate-300">Team workspace & sharing</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                <Shield className="w-4 h-4 text-orange-500" />
                            </div>
                            <span className="text-slate-300">Secure & reliable platform</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Right Side: Auth Forms --- */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-8 bg-white dark:bg-slate-900">
                {/* Mobile Logo */}
                <Link href="/" className="lg:hidden absolute top-6 left-6 flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 2C7.89543 2 7 2.89543 7 4V8C7 9.10457 7.89543 10 9 10H13C14.1046 10 15 9.10457 15 8V4C15 2.89543 14.1046 2 13 2H9Z" />
                            <path d="M9 14C7.89543 14 7 14.8954 7 16V20C7 21.1046 7.89543 22 9 22H13C14.1046 22 15 21.1046 15 20V16C15 14.8954 14.1046 14 13 14H9Z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold">TaskFlow</span>
                </Link>

                <div className="w-full max-w-md">
                    {/* Form Container */}
                    <div className="relative">
                        {/* Login Form */}
                        <div
                            className={`transition-all duration-500 ease-in-out ${isLogin
                                    ? 'opacity-100 translate-x-0 visible'
                                    : 'opacity-0 translate-x-8 invisible absolute top-0 left-0 right-0'
                                }`}
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back</h2>
                                <p className="text-slate-600 dark:text-slate-400 mt-2">Enter your credentials to access your account</p>
                            </div>

                            {/* Social Login */}
                            <div className="flex gap-3 mb-6">
                                <button type="button" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <Github className="w-5 h-5" />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">GitHub</span>
                                </button>
                                <button type="button" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <Facebook className="w-5 h-5 text-blue-600" />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">Facebook</span>
                                </button>
                            </div>

                            <div className="relative flex items-center gap-4 mb-6">
                                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
                                <span className="text-sm text-slate-500">or continue with email</span>
                                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
                            </div>

                            <form onSubmit={loginForm.handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            onChange={loginForm.handleChange}
                                            onBlur={loginForm.handleBlur}
                                            value={loginForm.values.email}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    {loginForm.touched.email && loginForm.errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{loginForm.errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            name="password"
                                            type="password"
                                            placeholder="••••••••"
                                            onChange={loginForm.handleChange}
                                            onBlur={loginForm.handleBlur}
                                            value={loginForm.values.password}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    {loginForm.touched.password && loginForm.errors.password && (
                                        <p className="text-red-500 text-xs mt-1">{loginForm.errors.password}</p>
                                    )}
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500" />
                                        <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">Remember me</span>
                                    </label>
                                    <a href="#" className="text-sm text-orange-500 hover:text-orange-600 font-medium">Forgot password?</a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center gap-2"
                                >
                                    Sign In
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>

                            <p className="text-center mt-8 text-slate-600 dark:text-slate-400">
                                Don't have an account?{' '}
                                <button onClick={toggleMode} className="text-orange-500 hover:text-orange-600 font-semibold">
                                    Sign up for free
                                </button>
                            </p>
                        </div>

                        {/* Register Form */}
                        <div
                            className={`transition-all duration-500 ease-in-out ${!isLogin
                                    ? 'opacity-100 translate-x-0 visible'
                                    : 'opacity-0 -translate-x-8 invisible absolute top-0 left-0 right-0'
                                }`}
                        >
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Create your account</h2>
                                <p className="text-slate-600 dark:text-slate-400 mt-2">Start managing your tasks like a pro</p>
                            </div>

                            {/* Social Login */}
                            <div className="flex gap-3 mb-6">
                                <button type="button" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <Github className="w-5 h-5" />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">GitHub</span>
                                </button>
                                <button type="button" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <Facebook className="w-5 h-5 text-blue-600" />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">Facebook</span>
                                </button>
                            </div>

                            <div className="relative flex items-center gap-4 mb-6">
                                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
                                <span className="text-sm text-slate-500">or sign up with email</span>
                                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
                            </div>

                            <form onSubmit={registerForm.handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            name="fullName"
                                            type="text"
                                            placeholder="John Doe"
                                            onChange={registerForm.handleChange}
                                            onBlur={registerForm.handleBlur}
                                            value={registerForm.values.fullName}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    {registerForm.touched.fullName && registerForm.errors.fullName && (
                                        <p className="text-red-500 text-xs mt-1">{registerForm.errors.fullName}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            onChange={registerForm.handleChange}
                                            onBlur={registerForm.handleBlur}
                                            value={registerForm.values.email}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    {registerForm.touched.email && registerForm.errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{registerForm.errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            name="password"
                                            type="password"
                                            placeholder="••••••••"
                                            onChange={registerForm.handleChange}
                                            onBlur={registerForm.handleBlur}
                                            value={registerForm.values.password}
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    {registerForm.touched.password && registerForm.errors.password && (
                                        <p className="text-red-500 text-xs mt-1">{registerForm.errors.password}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center gap-2"
                                >
                                    Create Account
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>

                            <p className="text-center mt-8 text-slate-600 dark:text-slate-400">
                                Already have an account?{' '}
                                <button onClick={toggleMode} className="text-orange-500 hover:text-orange-600 font-semibold">
                                    Sign in
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
