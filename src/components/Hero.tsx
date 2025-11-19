import { Train, Search, MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [count, setCount] = useState(0);
  const targetCount = 60000;

  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(targetCount / 50);
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Train className="w-10 h-10 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              IndianRailways.ai
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Smart AI Assistant for <span className="text-blue-600">{count.toLocaleString()}+</span> Railway Circulars
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find any Railway Board Circular, RBE Order, Rulebook, or Department Document in seconds.
            <br />
            <span className="text-gray-700 font-semibold">Powered by AI. Built for Railway employees, officers, and departments.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <Search className="w-5 h-5" />
              Search Circulars
            </button>
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <MessageSquare className="w-5 h-5" />
              Ask the AI Assistant
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-8">
            Trusted by Railway employees across India
          </p>
        </div>
      </div>
    </header>
  );
}
