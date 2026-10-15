import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Branches } from '@/components/Branches';
import { Facilities } from '@/components/Facilities';
import { Barbers } from '@/components/Barbers';
import { Gallery } from '@/components/Gallery';
import { Services } from '@/components/Services';
import { Reviews } from '@/components/Reviews';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Branches />
        <Facilities />
        <Barbers />
        <Gallery />
        <Services />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
