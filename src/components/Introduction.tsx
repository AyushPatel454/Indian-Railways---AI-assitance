export function Introduction() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold text-blue-600">IndianRailways.ai</span> is India's first AI-powered platform that helps you search, read, and understand more than <span className="font-bold">60,000 Railway Board Circulars</span> and departmental documents instantly.
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">60K+</div>
              <p className="text-gray-600 text-sm">Documents Indexed</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-gray-600 text-sm">Official Sources</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">24/7</div>
              <p className="text-gray-600 text-sm">Available Access</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-10">Fast, accurate, and employee-friendly.</p>
        </div>
      </div>
    </section>
  );
}
