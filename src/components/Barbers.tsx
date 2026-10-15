import { Star, AlertCircle } from 'lucide-react';
import { barbers, type Barber } from '@/data/salonData';
import { useReveal } from '@/hooks/useReveal';

function BarberCard({ barber, index, visible }: { barber: Barber; index: number; visible: boolean }) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-gold/40 transition-all duration-500 ${
        visible ? 'scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Portrait */}
      <div className="relative h-80 sm:h-96 overflow-hidden">
        <img
          src={barber.portrait}
          alt={barber.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Demo badge */}
        {barber.isDemo && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/20 border border-amber-500/40 rounded-full backdrop-blur-sm">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs text-amber-300 font-medium">محتوى تجريبي</span>
          </div>
        )}

        {/* Rating badge */}
        {barber.rating && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 border border-gold/30 rounded-full backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 text-gold fill-current" />
            <span className="text-sm text-gold font-bold">{barber.rating}</span>
          </div>
        )}

        {/* Info */}
        <div className="absolute bottom-0 right-0 left-0 p-5">
          <h3 className="font-display font-bold text-xl text-white mb-1">{barber.name}</h3>
          <p className="text-gold text-sm font-medium">{barber.specialty}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 bg-neutral-950">
        <p className="text-neutral-400 text-sm leading-relaxed mb-4">{barber.bio}</p>

        {/* Mini gallery */}
        {barber.gallery.length > 0 && (
          <div className="flex gap-2">
            {barber.gallery.map((img, gi) => (
              <div
                key={gi}
                className="relative flex-1 rounded-lg overflow-hidden h-20 group/gallery"
              >
                <img
                  src={img}
                  alt={`${barber.name} — عمل ${gi + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover/gallery:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Barbers() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="barbers" className="py-20 sm:py-28 bg-neutral-950">
      <div ref={ref} className={`max-w-7xl mx-auto px-5 sm:px-8 ${isVisible ? '' : 'reveal'}`}>
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            فريقنا
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-3">
            احنا هنا عشانك
          </h2>
          <div className="w-20 h-1 gold-gradient-bg mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {barbers.map((barber, i) => (
            <BarberCard key={barber.id} barber={barber} index={i} visible={isVisible} />
          ))}
        </div>

        <div className="mt-8 flex items-start gap-2.5 justify-center text-neutral-500 text-sm max-w-2xl mx-auto">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500/70" />
          <p>
            البيانات المعروضة أمثلة توضيحية لأغراض التصميم. سيتم استبدالها بالأسماء والصور
            والتقييمات الحقيقية للحلاقين بعد اعتماد المالك.
          </p>
        </div>
      </div>
    </section>
  );
}
