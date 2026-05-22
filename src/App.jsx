import './styles/global.css';

import Navbar       from './components/Navbar/Navbar';
import Hero         from './components/Hero/Hero';
import Features     from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ          from './components/FAQ/FAQ';
import Footer       from './components/Footer/Footer';
import Chatbot      from './components/Chatbot/Chatbot';
import BackToTop    from './components/BackToTop/BackToTop';

// Heavy sections loaded normally (split further with React.lazy if needed)
import LogoBar        from './components/LogoBar/LogoBar';
import Carousel       from './components/Carousel/Carousel';
import MapSection     from './components/MapSection/MapSection';
import AudienceSection from './components/AudienceSection/AudienceSection';
import StatsSection   from './components/StatsSection/StatsSection';
import HowItWorks     from './components/HowItWorks/HowItWorks';
import AISection      from './components/AISection/AISection';
import DownloadSection from './components/DownloadSection/DownloadSection';
import Contact        from './components/Contact/Contact';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LogoBar />
        <Carousel />
        <Features />
        <AISection />
        <MapSection />
        <AudienceSection />
        <StatsSection />
        <HowItWorks />
        <DownloadSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
      <BackToTop />
    </>
  );
}
