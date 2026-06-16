import { Instagram, MessageCircle, Phone, MapPin, Clock, Heart } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import logoDarkImg from '../../assets/logo-dark.png';

interface FooterProps {
  language: 'kz' | 'ru';
  theme?: 'light' | 'dark';
}

export function Footer({ language, theme }: FooterProps) {
  const translations = {
    kz: {
      tagline: 'Балаңыз үшін жайлы мекен және қауіпсіз орта.',
      hours: 'Жұмыс уақыты',
      hoursValue: 'Дүйсенбі – Жұма: 08:00 – 19:00',
      address: 'Мекен-жай',
      addressValue: 'Астана қ., Нәжімеденов к-сі, 37',
      contact: 'Байланыс',
      rights: '© 2026 AK-NIET Балабақшасы. Барлық құқықтар қорғалған.',
      madeWith: 'Балаларға деген сүйіспеншілікпен жасалды',
      programs: 'Бағдарламалар',
      programsList: ['Каратэ', 'Гимнастика', 'Ағылшын тілі', 'Даярлық тобы'],
      quickLinks: 'Жылдам сілтемелер',
      quickList: ['Біз туралы', 'Бағдарламалар', 'Галерея', 'Сұрақтар', 'Байланыс'],
      quickHrefs: ['#about', '#programs', '#gallery', '#faq', '#contact'],
    },
    ru: {
      tagline: 'Уютное место и абсолютно безопасная среда для развития вашего ребёнка.',
      hours: 'Режим работы',
      hoursValue: 'Понедельник – Пятница: 08:00 – 19:00',
      address: 'Адрес',
      addressValue: 'г. Астана, ул. Нажимеденова, 37',
      contact: 'Контакты',
      rights: '© 2026 Детский сад AK-NIET. Все права защищены.',
      madeWith: 'Сделано с любовью к детям',
      programs: 'Программы',
      programsList: ['Каратэ', 'Гимнастика', 'Английский язык', 'Подготовительная группа'],
      quickLinks: 'Навигация',
      quickList: ['О нас', 'Программы', 'Галерея', 'Вопросы', 'Контакты'],
      quickHrefs: ['#about', '#programs', '#gallery', '#faq', '#contact'],
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-[#F8FAFC] dark:bg-[#0f182e] border-t border-gray-150 dark:border-white/5 text-gray-800 dark:text-white relative overflow-hidden">

      {/* ── Top wave (already provided by ContactForm wave-bottom) ── */}

      {/* ── Main footer content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Logo & description */}
          <div className="space-y-5 lg:col-span-1">
            <a href="#" className="inline-block">
              <img
                src={theme === 'dark' ? logoDarkImg : logoImg}
                alt="AK-NIET Logo"
                className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">{t.tagline}</p>

            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://wa.me/77773626742"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[#3BB85E]/15 hover:bg-[#3BB85E] text-[#3BB85E] hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[#E62445]/10 hover:bg-[#E62445] text-[#E62445] hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="tel:+77773626742"
                className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[#1CA6D0]/10 hover:bg-[#1CA6D0] text-[#1CA6D0] hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-110"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Programs list */}
          <div className="space-y-4">
            <h4 className="font-black text-gray-900 dark:text-white text-base flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#1CA6D0] rounded-full inline-block" />
              {t.programs}
            </h4>
            <ul className="space-y-2.5">
              {t.programsList.map((p, i) => (
                <li key={i}>
                  <a href="#programs" className="text-gray-600 dark:text-gray-450 hover:text-[#1CA6D0] dark:hover:text-[#1CA6D0] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#1CA6D0] transition-colors flex-shrink-0" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-black text-gray-900 dark:text-white text-base flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#3BB85E] rounded-full inline-block" />
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {t.quickList.map((link, i) => (
                <li key={i}>
                  <a href={t.quickHrefs[i]} className="text-gray-600 dark:text-gray-450 hover:text-[#3BB85E] dark:hover:text-[#3BB85E] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-[#3BB85E] transition-colors flex-shrink-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            <h4 className="font-black text-gray-900 dark:text-white text-base flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#E62445] rounded-full inline-block" />
              {t.contact}
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-xl bg-[#1CA6D0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={15} className="text-[#1CA6D0]" />
                </div>
                <div>
                  <p className="text-gray-450 dark:text-white/40 text-xs font-bold uppercase tracking-wider mb-0.5">{t.hours}</p>
                  <p className="text-gray-750 dark:text-gray-300 text-sm">{t.hoursValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#E62445]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={15} className="text-[#E62445]" />
                </div>
                <div>
                  <p className="text-gray-450 dark:text-white/40 text-xs font-bold uppercase tracking-wider mb-0.5">{t.address}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{t.addressValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FAC315]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={15} className="text-[#FAC315]" />
                </div>
                <div className="space-y-1">
                  <a href="tel:+77773626742" className="block text-gray-700 dark:text-gray-300 hover:text-[#1CA6D0] dark:hover:text-[#1CA6D0] transition-colors">
                    +7 (777) 362-67-42
                  </a>
                  <a href="tel:+77071819707" className="block text-gray-700 dark:text-gray-300 hover:text-[#1CA6D0] dark:hover:text-[#1CA6D0] transition-colors">
                    +7 (707) 181-97-07
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded map */}
        <div className="w-full h-56 sm:h-72 rounded-[24px] overflow-hidden mb-10 shadow-xl border border-gray-150 dark:border-white/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.7461878891544!2d71.4746816768832!3d51.131665471730595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424581452291583d%3A0xe54fb7a21696d51d!2z0YPQuy4g0J3QsNC20LjQvNC10LTQtdC90L7QstCwIDM3LCDQkNGB0YLQsNC90LAg0JzQtdC60YLQtdC_!5e0!3m2!1sru!2skz!4v1718018300000!5m2!1sru!2skz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AK-NIET Location"
          />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200/60 dark:border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <p>{t.rights}</p>
          <p className="flex items-center gap-1.5">
            {t.madeWith} <Heart size={12} className="text-[#E62445] fill-[#E62445]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
