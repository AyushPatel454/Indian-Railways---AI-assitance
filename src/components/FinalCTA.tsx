import { Search, MessageSquare, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Exploring Indian Railways Like Never Before
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Search circulars, ask questions, and get accurate answers in seconds. Everything you need, all in one intelligent platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="group px-8 py-4 bg-white hover:bg-blue-50 text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl">
              <Search className="w-5 h-5 transition-transform group-hover:scale-110" />
              Browse Circulars
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl">
              <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
              Ask AI Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <p className="text-blue-200 text-sm">
            No signup required to explore. Get started instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
