import { useEffect, useRef } from 'react';
import { Clock, Users, Blocks, MapPin } from 'lucide-react';

interface QuickFactsProps {
  language: 'kz' | 'ru';
}

export function QuickFacts({ language }: QuickFactsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const translations = {
    kz: {
      hoursTitle: 'Жұмыс уақыты',
      hoursVal: '08:00 – 19:00',
      hoursDesc: 'Дүйсенбі мен жұма аралығында',

      agesTitle: 'Балалар жасы',
      agesVal: '2 – 6 жас',
      agesDesc: 'Кішкентайдан мектепке дейін',

      groupsTitle: 'Жас топтары',
      groupsVal: '3 топ',
      groupsDesc: 'Жас ерекшеліктеріне қарай бөлінген',

      addressTitle: 'Мекен-жай',
      addressVal: 'Нәжімеденов 37',
      addressDesc: 'Астана қ., Қазақстан',
    },
    ru: {
      hoursTitle: 'Режим работы',
      hoursVal: '08:00 – 19:00',
      hoursDesc: 'Понедельник по пятницу',

      agesTitle: 'Возраст приёма',
      agesVal: '2 – 6 лет',
      agesDesc: 'От малышей до дошкольников',

      groupsTitle: 'Возрастные группы',
      groupsVal: '3 группы',
      groupsDesc: 'Раздельно по возрастам',

      addressTitle: 'Адрес',
      addressVal: 'Нажимеденова 37',
      addressDesc: 'г. Астана, Казахстан',
    },
  };

  const t = translations[language];

  const facts = [
    {
      icon: Clock,
      title: t.hoursTitle,
      val: t.hoursVal,
      desc: t.hoursDesc,
      color: '#1CA6D0',
      gradient: 'from-[#1CA6D0]/10 to-[#1CA6D0]/5',
      border: 'border-[#1CA6D0]/20',
      badge: '🕗',
    },
    {
      icon: Users,
      title: t.agesTitle,
      val: t.agesVal,
      desc: t.agesDesc,
      color: '#E62445',
      gradient: 'from-[#E62445]/10 to-[#E62445]/5',
      border: 'border-[#E62445]/20',
      badge: '👶',
    },
    {
      icon: Blocks,
      title: t.groupsTitle,
      val: t.groupsVal,
      desc: t.groupsDesc,
      color: '#FAC315',
      gradient: 'from-[#FAC315]/10 to-[#FAC315]/5',
      border: 'border-[#FAC315]/20',
      badge: '🎓',
    },
    {
      icon: MapPin,
      title: t.addressTitle,
      val: t.addressVal,
      desc: t.addressDesc,
      color: '#3BB85E',
      gradient: 'from-[#3BB85E]/10 to-[#3BB85E]/5',
      border: 'border-[#3BB85E]/20',
      badge: '📍',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-[#FAF9F6] dark:bg-[#152238] relative">
      {/* Subtle top pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.01]"
        style={{ backgroundImage: 'radial-gradient(circle, #1CA6D0 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <div
                key={index}
                className={`reveal reveal-delay-${index + 1} relative bg-gradient-to-br ${fact.gradient} border ${fact.border} rounded-[28px] p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden`}
              >
                {/* Large emoji watermark */}
                <span className="absolute top-3 right-4 text-5xl opacity-10 dark:opacity-5 group-hover:opacity-20 transition-opacity select-none">
                  {fact.badge}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${fact.color}18` }}
                >
                  <IconComponent size={26} style={{ color: fact.color }} strokeWidth={2.2} />
                </div>

                {/* Label */}
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: fact.color }}>
                  {fact.title}
                </p>

                {/* Value */}
                <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-tight mb-1">
                  {fact.val}
                </h3>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{fact.desc}</p>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full rounded-b-[28px] transition-all duration-500"
                  style={{ backgroundColor: fact.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
