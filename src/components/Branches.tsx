import { MapPin, Navigation } from 'lucide-react';
import { branches } from '@/data/salonData';
import { useReveal } from '@/hooks/useReveal';

export function Branches() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="branches" className="py-20 sm:py-28 charcoal-gradient">
      <div ref={ref} className={`max-w-7xl mx-auto px-5 sm:px-8 ${isVisible ? '' : 'reveal'}`}>
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            فروعنا
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-3">
            موقعنا في خدمتك
          </h2>
          <div className="w-20 h-1 gold-gradient-bg mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {branches.map((branch, i) => (
            <div
              key={branch.id}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-gold/40 transition-all duration-500 ${
                isVisible ? 'scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Branch identity is shown without assigning an interior photo. */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-neutral-800 via-neutral-950 to-black">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,75,0.45),transparent_45%)]" />
                <div className="absolute bottom-5 right-5 left-5 flex items-end justify-between">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {branch.name}
                  </h3>
                  <span className="text-xs text-neutral-300 bg-black/50 px-3 py-1 rounded-full border border-white/10">
                    {branch.area}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 bg-neutral-950">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{branch.address}</p>
                    <p className="text-neutral-400 text-sm mt-1">{branch.landmark}</p>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    للاستفسار عن مواعيد العمل، يرجى زيارة الفرع
                  </span>
                  <Navigation className="w-4 h-4 text-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-neutral-600 text-sm mt-8">
          لم يتم إضافة أرقام هواتف أو مواعيد عمل حتى يتم التحقق منها رسمياً
        </p>
      </div>
    </section>
  );
}
