import { Info, MapPin, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-bold mb-4">IndianRailways.ai</h4>
            <p className="text-sm text-gray-400">
              Your intelligent assistant for Railway Board Circulars and official documents.
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Browse Circulars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">AI Assistant</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">About</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Disclaimer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 flex items-start gap-4">
            <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Important Disclaimer
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                This platform provides AI-assisted access to publicly available Indian Railways circulars and documents. Developed with appropriate permissions. <span className="font-semibold">Not an official government website.</span> All information is provided for informational purposes. While we strive for accuracy, users should verify critical information with official Railway Board sources. IndianRailways.ai is not responsible for any consequences arising from the use of information on this platform.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 sm:mb-0">
            <p>&copy; {currentYear} IndianRailways.ai. All rights reserved.</p>
            <p className="mt-2">Made for Railway employees and officers across India</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
