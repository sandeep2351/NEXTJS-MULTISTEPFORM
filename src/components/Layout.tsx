import React from "react";
import DarkModeToggle from "@/components/DarkModeToggle";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold text-white">
            Multi-Step Form
          </h1>
          <DarkModeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8 md:p-12 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow-md p-4 text-center">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Multi-Step Form. All rights
            reserved.
          </p>
          <p className="mt-2">
            Built with ❤️ by {" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 dark:text-indigo-400"
            >
              Sandeep
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
