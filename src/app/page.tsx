"use client"; // This directive tells Next.js that this file is a client-side component

import { useState, useEffect } from 'react';
import MultiStepForm from "@/components/MultiStepForm";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply the dark class to the <html> element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-indigo-800 p-6 sm:p-12">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-300 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-300 to-yellow-200 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-800 sm:text-5xl dark:text-white">
          Multi-Step Form
        </h1>
        <p className="text-lg text-indigo-600 mt-2 sm:mt-4 dark:text-gray-400">
          Collaborate and complete forms with ease.
        </p>
      </header>

      {/* Form Container */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-3xl p-6 sm:p-10">
        <MultiStepForm />
      </div>

    </div>
  );
}
