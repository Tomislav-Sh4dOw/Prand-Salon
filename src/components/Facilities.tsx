import { Crown, Sparkles } from 'lucide-react';
import { assets } from '@/data/salonData';
import { useReveal } from '@/hooks/useReveal';

export function Facilities() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-neutral-950">
      <div ref={ref} className={`max-w-7xl mx-auto px-5 sm:px-8 ${isVisible ? '' : 'reveal'}`}>
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={assets.crown} alt="شعار تاج PS" className="w-12 h-12 rounded-full object-cover" />
              <span className="text-gold text-sm font-medium tracking-widest uppercase">تجربة براند</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              المكان جزء من الستايل
            </h2>
            <div className="w-20 h-1 gold-gradient-bg mt-6 rounded-full" />
            <p className="text-neutral-400 leading-relaxed mt-6 max-w-lg">
              تفاصيل المكان مصممة عشان كل زيارة تكون تجربة مختلفة. استكشف أجواء الصالون ومحطات العمل من غير ربط أي صورة بفرع محدد.
            </p>
            <div className="flex items-center gap-2 mt-7 text-neutral-500 text-sm">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>صور داخلية حقيقية من الصالون</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {assets.facilities.map((facility, index) => (
              <div
                key={facility.id}
                className={`relative overflow-hidden rounded-2xl border border-white/10 group ${
                  index === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-[3/4]'
                } ${isVisible ? 'scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <img
                  src={facility.image}
                  alt={facility.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 flex items-center gap-2">
                  {index === 1 && <Crown className="w-4 h-4 text-gold" />}
                  <span className="text-white text-sm font-bold">{facility.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-neutral-600 text-sm mt-8">الصور الداخلية المعروضة غير مرتبطة بفرع محدد.</p>
      </div>
    </section>
  );
}
