import { useEffect, useState } from 'react';
import { assets } from '@/data/salonData';

const NAV_ITEMS = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'branches', label: 'الفروع' },
  { id: 'facilities', label: 'المكان' },
  { id: 'barbers', label: 'الحلاقين' },
  { id: 'gallery', label: 'أعمالنا' },
  { id: 'services', label: 'الخدمات' },
  { id: 'reviews', label: 'آراء العملاء' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark border-b border-white/5 py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
            aria-label="PRAND SALON"
          >
            <img
              src={assets.logo}
              alt="PRAND SALON"
              className="w-28 sm:w-36 h-auto max-h-10 object-contain object-center"
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-gold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection('branches')}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 gold-gradient-bg text-black font-bold text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            احجز الآن
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="القائمة"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[80vw] bg-neutral-950 border-l border-white/10 flex flex-col pt-24 pb-8 px-6 transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-right py-4 text-lg font-medium border-b border-white/5 transition-colors ${
                activeSection === item.id ? 'text-gold' : 'text-neutral-300'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('branches')}
            className="mt-6 py-3.5 gold-gradient-bg text-black font-bold rounded-lg text-center"
          >
            احجز الآن
          </button>
        </div>
      </div>
    </>
  );
}
