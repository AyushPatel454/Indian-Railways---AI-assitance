import { Shield, Check, Lock } from 'lucide-react';

export function Trust() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Accuracy & Transparency
            </h2>
          </div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We prioritize accuracy and trust in every aspect of our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Check className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Official Sources</h3>
            </div>
            <p className="text-gray-600 text-sm">
              All documents sourced from official Railway Board publications and verified PDF files
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-green-600 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-gray-900">Secure & Verified</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Publicly available government circulars verified and indexed with appropriate permissions
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-orange-500" />
              <h3 className="font-semibold text-gray-900">Regularly Updated</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Database continuously updated with latest circulars and official directives
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 border-2 border-blue-100">
          <p className="text-gray-700 text-center leading-relaxed">
            <span className="font-semibold text-blue-600">IndianRailways.ai</span> is committed to providing accurate, up-to-date information from the most authoritative sources within the Indian Railways system.
          </p>
        </div>
      </div>
    </section>
  );
}
