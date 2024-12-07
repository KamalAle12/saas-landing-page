import Card1 from './card/Card1';
import Banner from './components/Banner';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
const App=()=>(
  <main className="relative">
    <Navbar />
    <section className="xl:px-8 wide:px-10 py-4">
      <HeroSection />
    </section>
    <section className="py-4">
      <Banner />
    </section>
    <section className="py-4">
      <PricingSection/>
    </section>
    <section className='py-4'>
      <TestimonialsSection/>
    </section>
    
    <section>
      <Footer/>
    </section>
  </main>
);

export default App;