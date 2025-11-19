import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Benefits } from './components/Benefits';
import { DocumentCategories } from './components/DocumentCategories';
import { AICapabilities } from './components/AICapabilities';
import { TargetAudience } from './components/TargetAudience';
import { Trust } from './components/Trust';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Introduction />
      <Benefits />
      <DocumentCategories />
      <AICapabilities />
      <TargetAudience />
      <Trust />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
