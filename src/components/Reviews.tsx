import { Star, MessageSquare, Info } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function Reviews() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="py-20 sm:py-28 charcoal-gradient">
      <div ref={ref} className={`max-w-4xl mx-auto px-5 sm:px-8 ${isVisible ? '' : 'reveal'}`}>
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            آراء العملاء
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-3">
            رضيك أهم حاجة عندنا
          </h2>
          <div className="w-20 h-1 gold-gradient-bg mx-auto mt-6 rounded-full" />
        </div>

        {/* Prototype card */}
        <div
          className={`relative rounded-2xl border border-white/10 bg-neutral-950 p-8 sm:p-12 text-center ${
            isVisible ? 'scale-in' : 'opacity-0'
          }`}
        >
          <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6 float-anim">
            <MessageSquare className="w-8 h-8 text-gold" />
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">
            قسم آراء العملاء — قريباً
          </h3>

          <p className="text-neutral-400 leading-relaxed mb-8 max-w-xl mx-auto">
            هذا القسم نموذج تصميمي. سيتم إضافة نظام حقيقي لاستقبال وعرض آراء العملاء بعد
            اعتماد المالك، مع إمكانية التحقق من المراجعات لضمان مصداقيتها.
          </p>

          {/* Star visualization */}
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                className="w-6 h-6 text-gold/40"
              />
            ))}
          </div>
          <p className="text-neutral-600 text-xs">
            لا يتم عرض تقييمات أو مراجعات وهمية
          </p>
        </div>

        <div className="mt-8 flex items-start gap-2.5 justify-center text-neutral-500 text-sm max-w-2xl mx-auto">
          <Info className="w-4 h-4 shrink-0 mt-0.5 text-gold/60" />
          <p>
            يمكن إضافة نظام تقييم حقيقي لاحقاً يسمح للعملاء بمشاركة تجربتهم مع التحقق من
            المراجعات.
          </p>
        </div>
      </div>
    </section>
  );
}
