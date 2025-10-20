import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import WhyChooseSection from './components/WhyChooseSection';
import CommunitySection from './components/CommunitySection';
import TestimonialsSection from './components/TestimonialsSection';
import RegistrationForm from './components/RegistrationForm';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-poppins bg-white">
      <Navbar />
      <a id="hero" />
      <HeroSection />
      <a id="about" />
      <AboutSection />
      <a id="skills" />
      <SkillsSection />
      <a id="why" />
      <WhyChooseSection />
      <a id="community" />
      <CommunitySection />
      <a id="testimonials" />
      <TestimonialsSection />
      <a id="register" />
      <RegistrationForm />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
