import {
  Scissors,
  Layers,
  Sparkles,
  Crown,
  Droplet,
  Info,
} from 'lucide-react';
import { services, type Service } from '@/data/salonData';
import { useReveal } from '@/hooks/useReveal';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  scissors: Scissors,
  layers: Layers,
  sparkles: Sparkles,
  crown: Crown,
  droplet: Droplet,
  razor: Scissors,
};

function ServiceCard({ service, index, visible }: { service: Service; index: number; visible: boolean }) {
  const Icon = ICONS[service.icon] ?? Scissors;

  return (
    <div
      className={`group relative rounded-xl border border-white/10 hover:border-gold/40 p-6 bg-neutral-950 hover:bg-neutral-900/50 transition-all duration-400 ${
        visible ? 'scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl gold-gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-black" />
      </div>

      <h3 className="font-display font-bold text-lg text-white mb-2">{service.name}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">{service.description}</p>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-gold text-sm font-bold">{service.priceNote}</span>
      </div>
    </div>
  );
}

export function Services() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-20 sm:py-28 bg-neutral-950">
      <div ref={ref} className={`max-w-7xl mx-auto px-5 sm:px-8 ${isVisible ? '' : 'reveal'}`}>
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            خدماتنا
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-3">
            كل اللي محتاجه في مكان واحد
          </h2>
          <div className="w-20 h-1 gold-gradient-bg mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} visible={isVisible} />
          ))}
        </div>

        <div className="mt-8 flex items-start gap-2.5 justify-center text-neutral-500 text-sm max-w-2xl mx-auto">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-gold/60" />
          <p>
            القائمة قابلة للتعديل. الأسعار الفعلية سيتم إضافتها بعد اعتماد المالك — لا يتم
            عرض أسعار غير موثقة.
          </p>
        </div>
      </div>
    </section>
  );
}
