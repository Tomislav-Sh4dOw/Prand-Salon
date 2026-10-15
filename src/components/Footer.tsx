import { MapPin, Music2, ExternalLink } from 'lucide-react';
import { salonInfo, branches, assets } from '@/data/salonData';

export function Footer() {
  const scrollToTop = () =>
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button onClick={scrollToTop} className="mb-4">
              <img
                src={assets.logo}
                alt="PRAND SALON"
                className="w-36 h-auto max-h-14 object-contain object-center"
              />
            </button>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs mb-5">
              {salonInfo.intro}
            </p>

            {/* TikTok */}
            <a
              href={salonInfo.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 rounded-lg text-white text-sm font-medium hover:border-gold/40 hover:bg-white/5 transition-all"
            >
              <Music2 className="w-4 h-4 text-gold" />
              <span>تيك توك</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
            </a>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-5">الفروع</h4>
            <div className="space-y-4">
              {branches.map((branch) => (
                <div key={branch.id} className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">{branch.name}</p>
                    <p className="text-neutral-400 text-sm">{branch.address}، {branch.landmark}</p>
                    <p className="text-neutral-500 text-xs mt-0.5">{branch.area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-5">روابط سريعة</h4>
            <div className="flex flex-col gap-3">
              {[
                { id: 'hero', label: 'الرئيسية' },
                { id: 'facilities', label: 'المكان' },
                { id: 'barbers', label: 'الحلاقين' },
                { id: 'gallery', label: 'أعمالنا' },
                { id: 'services', label: 'الخدمات' },
                { id: 'reviews', label: 'آراء العملاء' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-neutral-400 text-sm hover:text-gold transition-colors text-right"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <p className="text-neutral-600 text-xs leading-relaxed max-w-lg">
            هذا الموقع مقترح تصميمي غير رسمي تم إعداده للعرض على مالك الصالون. جميع البيانات
            قابلة للتعديل والاستبدال بالبيانات الحقيقية المعتمدة.
          </p>
          <p className="text-neutral-600 text-xs shrink-0">
            © 2026 PRAND SALON — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
