import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { ServicesGrid } from '../components/ServicesGrid';
import { AppPreview } from '../components/AppPreview';
import { TrustBanner } from '../components/TrustBanner';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesGrid />
        <AppPreview />
        <TrustBanner />
      </main>
      <Footer />
    </div>
  );
}