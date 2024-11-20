import React, { useEffect, useState } from "react";
import { 
  FaRegCalendarTimes, 
  FaDiscord, 
  FaInstagram, 
  FaArrowUp,
  FaCode,
  FaUsers,
  FaLaptopCode,
  FaBell,
  FaTimes
} from "react-icons/fa";
import logo from "./assets/logo.png";

function App() {
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsLoading(false), 1500);
    setTimeout(() => setShowNotification(true), 3000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tl from-indigo-900 via-blue-800 to-blue-900">
        <div className="relative flex flex-col items-center">
          <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl animate-pulse"></div>
          <img 
            src={logo} 
            alt="Loading..." 
            className="w-32 h-32 relative animate-bounce-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <p className="text-white text-lg font-medium animate-pulse">Loading</p>
          <div className="flex space-x-2 mt-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-tl from-indigo-900 via-blue-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {showNotification && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:top-4 sm:bottom-auto sm:left-auto sm:right-4 w-[80%] sm:w-auto sm:max-w-sm bg-white/10 backdrop-blur-lg p-1.5 sm:p-4 rounded-lg border border-gray-800/50 shadow-xl animate-fade-in z-50">
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            <FaBell className="text-yellow-400 w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 animate-bell" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] sm:text-sm text-white font-medium truncate">Next Event Coming Soon!</p>
              <p className="text-[8px] sm:text-xs text-gray-300 mt-0.5 sm:mt-1 truncate">Join our Discord to stay updated.</p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="text-gray-400 hover:text-white transition-colors shrink-0 p-0.5 sm:p-1"
            >
              <FaTimes className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      )}

      <img 
        src={logo} 
        alt="Arena Logo" 
        className={`w-24 h-24 sm:w-32 sm:h-32 mb-4 transition-all duration-500 hover:scale-105 ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      />
      <div className={`backdrop-blur-lg bg-black/40 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800/50 text-center transition-all duration-500 hover:shadow-indigo-500/10 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <FaRegCalendarTimes className="text-white w-16 h-16 sm:w-24 sm:h-24 mb-4 mx-auto opacity-80" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-300 hover:text-white transition-colors">
          Registrations Closed
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-2">
          Thank you for your interest in the Arena Challenge. Registrations are
          now closed.
        </p>
        <p className="text-sm sm:text-base text-gray-400 mt-2">
          Please stay tuned for future events and announcements.
        </p>
        
        <div className="mt-8 pt-6 border-t border-gray-800/30">
          <h3 className="text-sm font-semibold text-gray-300 mb-6 relative">
            Stay Connected
            <span className="absolute -top-1 -right-2 w-2 h-2 bg-green-500 rounded-full"></span>
          </h3>
          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="group flex items-center space-x-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <FaUsers className="text-green-400 w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm text-gray-300">Active Community</p>
              </div>
            </div>
            <div className="group flex items-center space-x-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <FaLaptopCode className="text-blue-400 w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm text-gray-300">Tech Discussions and Workshops</p>
              </div>
            </div>
            <div className="group flex items-center space-x-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <FaCode className="text-purple-400 w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm text-gray-300">Monthly Coding Challenges</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/ncs._club/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              aria-label="Follow on Instagram"
            >
              <FaInstagram className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm">
                Follow us on Instagram
              </span>
            </a>
            <a
              href="https://discord.gg/8zsXTy4S"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              aria-label="Join Discord"
            >
              <FaDiscord className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm">
                Join our Discord
              </span>
            </a>
          </div>
        </div>
      </div>

      <footer className="w-full max-w-md mx-auto text-center mt-4">
        <p className="text-gray-500 text-xs sm:text-sm hover:text-gray-400 transition-colors">
          © 2024 NCS Club.
        </p>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 bg-black/30 backdrop-blur-sm p-3 rounded-lg text-gray-400 hover:text-white hover:bg-black/50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}

export default App;
