import { useEffect, useState } from 'react';
import { salonInfo, heroImages } from '@/data/salonData';

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToBranches = () =>
    document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToGallery = () =>
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === currentImage ? 1 : 0,
          }}
        />
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-gold/30 bg-black/40 fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-gold pulse-gold" />
            <span className="text-sm text-gold font-medium tracking-wide">
              {salonInfo.area}
            </span>
          </div>

          {/* Brand */}
          <div className="mb-4 fade-in delay-100">
            <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              PRAND <span className="text-gold">SALON</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6 fade-in delay-200">
            {salonInfo.tagline}
          </h1>

          {/* Intro */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl fade-in delay-300">
            {salonInfo.intro}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 fade-in delay-500">
            <button
              onClick={scrollToBranches}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient-bg text-black font-bold rounded-xl hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              اختر الفرع
            </button>
            <button
              onClick={scrollToGallery}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 hover:border-gold/50 transition-all"
            >
              شاهد أعمالنا
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 fade-in delay-700">
        <span className="text-xs text-neutral-500 tracking-widest">اكتشف المزيد</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent float-anim" />
      </div>
    </section>
  );
}
