import { useState, useCallback, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, ImageIcon } from 'lucide-react';
import { galleryItems, galleryCategories } from '@/data/salonData';
import { useReveal } from '@/hooks/useReveal';

export function Gallery() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<'all' | 'styles' | 'fades' | 'curly' | 'classic'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') nextImage();
      if (e.key === 'ArrowRight') prevImage();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-20 sm:py-28 charcoal-gradient">
      <div ref={ref} className={`max-w-7xl mx-auto px-5 sm:px-8 ${isVisible ? '' : 'reveal'}`}>
        <div className="text-center mb-10">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            معرض الأعمال
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-3">
            شغلنا بيتكلم عننا
          </h2>
          <div className="w-20 h-1 gold-gradient-bg mx-auto mt-6 rounded-full" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeCategory === 'all'
                ? 'gold-gradient-bg text-black'
                : 'border border-white/15 text-neutral-300 hover:border-gold/40 hover:text-white'
            }`}
          >
            الكل
          </button>
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'gold-gradient-bg text-black'
                  : 'border border-white/15 text-neutral-300 hover:border-gold/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(i)}
              className={`group relative rounded-xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] ${
                isVisible ? 'scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <img
                src={item.image}
                alt={item.alt ?? item.label}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 right-0 left-0 p-3 sm:p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-gold" />
                  <span className="text-white text-xs sm:text-sm font-medium">{item.label}</span>
                </div>
              </div>
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/40 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <X className="w-3.5 h-3.5 text-white rotate-45" />
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-neutral-600 text-sm mt-8">
          صور ستايلات PRAND المعروضة من المواد المضافة للعرض، ويمكن تحديثها من إعدادات الأصول المركزية
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-gold/50 transition-colors z-10"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-gold/50 transition-colors"
            aria-label="السابق"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-4xl w-full px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].alt ?? filteredItems[lightboxIndex].label}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center text-white text-sm mt-4">
              {filteredItems[lightboxIndex].label}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-gold/50 transition-colors"
            aria-label="التالي"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </section>
  );
}
