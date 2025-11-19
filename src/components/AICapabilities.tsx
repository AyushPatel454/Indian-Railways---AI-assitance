import { Search, FileText, Link, HelpCircle, Layers, Smile } from 'lucide-react';

const capabilities = [
  { icon: Search, title: "Relevant Circular Numbers", description: "Find exact RBE and circular numbers" },
  { icon: FileText, title: "Correct Rule Extracts", description: "Get relevant text from documents" },
  { icon: Link, title: "PDF Links to Documents", description: "Direct access to official PDFs" },
  { icon: HelpCircle, title: "Step-by-Step Explanation", description: "Easy-to-understand guidance" },
  { icon: Layers, title: "Cross-Department References", description: "Related circulars and connections" },
  { icon: Smile, title: "Human-Like Answers", description: "Natural language responses" },
];

const examples = [
  {
    query: "Tell me the latest Railway leave rules",
    category: "Leave Rules"
  },
  {
    query: "Find the circular for compassionate appointment procedure",
    category: "Recruitment"
  },
  {
    query: "What is the RBE for overtime allowance?",
    category: "Allowances"
  },
];

export function AICapabilities() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How AI Helps You
          </h2>
          <p className="text-lg text-gray-600">Our AI Assistant understands your query and provides comprehensive answers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                    <Icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">{capability.title}</h3>
                </div>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
            Example Queries
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                    {example.category}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{example.query}"
                </p>
                <p className="text-blue-600 text-xs font-semibold mt-4">→ AI finds the exact circular in seconds</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
