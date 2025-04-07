import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Pricing from '@/components/Pricing';
import CaseStudy from '@/components/CaseStudy';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <TechStack />
        <Pricing />
        <CaseStudy />
        <Testimonials />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
