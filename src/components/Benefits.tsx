import { CheckCircle, Brain, Zap, RefreshCw } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: "Search 60,000+ Verified Railway Circulars",
    description: "Access Railway Board Circulars, RBE Orders, Establishment Rules, Personnel guidelines, Commercial rules, Finance circulars, Engineering documents, and more."
  },
  {
    icon: Brain,
    title: "AI Assistant for Instant Answers",
    description: "Ask any railway-related query in simple language. The AI finds the correct rule/document for you instantly."
  },
  {
    icon: Zap,
    title: "Fast Circular Search",
    description: "Search by RBE number, Subject, Department, Year, or Keywords. Get results in milliseconds."
  },
  {
    icon: RefreshCw,
    title: "Daily Updates",
    description: "Latest circulars and orders updated regularly so you never miss any change or new directive."
  }
];

export function Benefits() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose IndianRailways.ai?
          </h2>
          <p className="text-lg text-gray-600">Everything you need to work smarter with railway documents</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-orange-100 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-orange-500 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
          <p className="text-gray-700">
            <span className="font-semibold text-blue-600">Made for Railway Employees:</span> Whether you work in Personnel, Commercial, Engineering, Finance, Accounts, or Medical — this platform helps you save time and work smarter.
          </p>
        </div>
      </div>
    </section>
  );
}
