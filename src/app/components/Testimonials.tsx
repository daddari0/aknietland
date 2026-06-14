import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  language: 'kz' | 'ru';
}

const testimonialData = {
  kz: {
    badge: '⭐ Ата-аналар пікірлері',
    title: 'Олар не дейді',
    titleAccent: 'біз туралы?',
    subtitle: 'AK-NIET таңдаған ата-аналардың шынайы пікірлері',
    items: [
      {
        name: 'Аида Б.',
        role: 'Ерлан мен Айдананың анасы',
        avatar: '👩',
        color: '#1CA6D0',
        text: '«AK-NIET — бұл тек балабақша ғана емес, ол — екінші үй. Балаларым таңертең ерте барғысы келеді, ал кешке оралғанда жаңа нәрселер үйренгенін шаттана айтады!»',
        rating: 5,
      },
      {
        name: 'Бауыржан С.',
        role: 'Тимурдың әкесі',
        avatar: '👨',
        color: '#3BB85E',
        text: '«Тазалық пен қауіпсіздік деңгейі өте жоғары. Тәрбиешілер кәсіби, баламыз ертеректен дамыды. Тіркелу туралы өкінбедік — тамаша орын!»',
        rating: 5,
      },
      {
        name: 'Гүлнара М.',
        role: 'Динаның анасы',
        avatar: '👩‍🦱',
        color: '#E62445',
        text: '«5 тамақтану, ағылшын тілі, каратэ — бәрі бір жерде! Қызым 3 айда қаншама нәрсе үйренді деп таң қалдым. Жеке тәсіл өте ұнады, барлығы жылы және мейірімді.»',
        rating: 5,
      },
    ],
    stats: [
      { value: '5+', label: 'Жылдар тәжірибесі' },
      { value: '100+', label: 'Бақытты балалар' },
      { value: '5.0★', label: 'Ата-аналар бағасы' },
      { value: '100%', label: 'Ризашылық деңгейі' },
    ],
  },
  ru: {
    badge: '⭐ Отзывы родителей',
    title: 'Что говорят',
    titleAccent: 'о нас?',
    subtitle: 'Реальные отзывы родителей, которые выбрали AK-NIET',
    items: [
      {
        name: 'Аида Б.',
        role: 'Мама Ерлана и Айданы',
        avatar: '👩',
        color: '#1CA6D0',
        text: '«AK-NIET — это не просто садик, это второй дом. Дети идут туда с удовольствием каждое утро, а возвращаясь домой, рассказывают что-то новое с горящими глазами!»',
        rating: 5,
      },
      {
        name: 'Бауыржан С.',
        role: 'Папа Тимура',
        avatar: '👨',
        color: '#3BB85E',
        text: '«Уровень чистоты и безопасности — на высшем уровне. Воспитатели профессиональные, наш сын развивается с опережением. Ни разу не пожалели — отличное место!»',
        rating: 5,
      },
      {
        name: 'Гульнара М.',
        role: 'Мама Дины',
        avatar: '👩‍🦱',
        color: '#E62445',
        text: '«5-разовое питание, английский, карате — всё в одном месте! Была поражена, сколько всего дочь освоила за 3 месяца. Индивидуальный подход порадовал — все добрые и тёплые.»',
        rating: 5,
      },
    ],
    stats: [
      { value: '5+', label: 'лет опыта' },
      { value: '100+', label: 'счастливых детей' },
      { value: '5.0★', label: 'оценка родителей' },
      { value: '100%', label: 'довольных семей' },
    ],
  },
};

export function Testimonials({ language }: TestimonialsProps) {
  const t = testimonialData[language];
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white dark:bg-[#1c2e4a] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#1CA6D0]/6 dark:bg-[#1CA6D0]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#3BB85E]/6 dark:bg-[#3BB85E]/5 blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-[#E62445]/4 dark:bg-[#E62445]/3 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-[#FAC315]/10 border border-[#FAC315]/25 text-[#b88a00] dark:bg-[#FAC315]/20 dark:text-[#FAC315] text-sm font-bold px-5 py-2 rounded-full mb-5">
            {t.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
            {t.title}{' '}
            <span className="gradient-text">{t.titleAccent}</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Stats bar */}
        <div className="reveal reveal-delay-1 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/10 border border-gray-100 dark:border-white/10 rounded-[24px] p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-1 gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group relative bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/8 border border-gray-100 dark:border-white/10 rounded-[28px] p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400`}
            >
              {/* Quote icon */}
              <div
                className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: item.color }}
              >
                <Quote size={36} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, s) => (
                  <Star key={s} size={15} className="text-[#FAC315] fill-[#FAC315]" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-6 italic">
                {item.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-white/8">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xl shadow-sm flex-shrink-0"
                  style={{ background: `${item.color}18` }}
                >
                  {item.avatar}
                </div>
                <div>
                  <p className="font-black text-gray-900 dark:text-white text-sm">{item.name}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{item.role}</p>
                </div>
                {/* Verified badge */}
                <div
                  className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  ✓
                </div>
              </div>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full rounded-b-[28px] transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
