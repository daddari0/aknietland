import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageCircle, Clock, Users, ArrowRight, Star, GraduationCap } from 'lucide-react';
import entranceImg from '../../assets/entrance.jpg';
import logoImg from '../../assets/logo.png';
import logoDarkImg from '../../assets/logo-dark.png';

interface HeroProps {
  language: 'kz' | 'ru';
  theme?: 'light' | 'dark';
}

export function Hero({ language, theme }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    kz: {
      tagline: 'Астананың №1 жеке балабақшасы',
      title: 'Балаңыздың бақытты болашағы',
      titleAccent: 'осы жерден басталады!',
      subtitle: 'Жайлы мекен, қауіпсіз орта және сапалы білім — AK-NIET балабақшасы сіздің баланың жан-жақты дамуы үшін.',
      bookPlace: 'Орын брондау',
      whatsApp: 'WhatsApp-қа жазу',
      badgeHours: '8:00 – 19:00',
      badgeAges: '2 – 6 жас',
      badgeGroups: '3 жас тобы',
      ratingLabel: 'Ата-аналар бағасы',
      waMessage: 'https://wa.me/77773626742?text=%D0%A1%D3%99%D0%BB%D0%B5%D0%BC%D0%B5%D1%82%D1%81%D1%96%D0%B7%D0%B1%D0%B5!%20AK-NIET%20%D0%B1%D0%B0%D0%BB%D0%B0%D0%B1%D0%B0%D2%B7%D1%88%D0%B0%D1%81%D1%8B%20%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8B%20%D0%B1%D1%96%D0%BB%D0%B3%D1%96%D0%BC%20%D0%BA%D0%B5%D0%BB%D0%B5%D0%B4%D1%96.',
    },
    ru: {
      tagline: 'Частный детский сад №1 в Астане',
      title: 'Счастливое будущее вашего',
      titleAccent: 'ребёнка начинается здесь!',
      subtitle: 'Уютная атмосфера, полная безопасность и качественное образование — AK-NIET создан для всестороннего развития вашего малыша.',
      bookPlace: 'Записаться',
      whatsApp: 'Написать в WhatsApp',
      badgeHours: '8:00 – 19:00',
      badgeAges: 'от 2 до 6 лет',
      badgeGroups: '3 группы',
      ratingLabel: 'Оценка родителей',
      waMessage: 'https://wa.me/77773626742?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%B1%D0%BE%D0%BB%D0%B5%D0%B5%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%20%D0%BE%20%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%BC%20%D1%81%D0%B0%D0%B4%D0%B5%20AK-NIET.',
    },
  };

  const t = translations[language];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#EFF8FB] via-[#FAF9F6] to-[#EFFDF2] dark:from-[#152238] dark:via-[#1c2e4a] dark:to-[#1e3a63]">

      {/* ── Decorative animated blobs — parallax layers ── */}
      <div
        className="absolute top-[-10%] right-[-8%] w-[500px] h-[500px] rounded-full bg-[#1CA6D0]/10 dark:bg-[#1CA6D0]/15 blur-[90px] animate-float-slow"
        style={{ transform: `translateY(${scrollY * 0.14}px)` }}
      />
      <div
        className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#3BB85E]/8 dark:bg-[#3BB85E]/12 blur-[100px] animate-float-slow delay-1000"
        style={{ transform: `translateY(${-scrollY * 0.10}px)` }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-[#FAC315]/6 dark:bg-[#FAC315]/8 blur-[70px] animate-float-slow delay-500"
        style={{ transform: `translateY(${scrollY * 0.06}px)` }}
      />

      {/* ── Floating sparkle dots ── */}
      {[
        { top: '15%', left: '8%', size: 'w-3 h-3', color: 'bg-[#FAC315]', delay: 'delay-300' },
        { top: '70%', left: '5%', size: 'w-2 h-2', color: 'bg-[#1CA6D0]', delay: 'delay-700' },
        { top: '20%', right: '12%', size: 'w-4 h-4', color: 'bg-[#3BB85E]', delay: 'delay-500' },
        { top: '80%', right: '8%', size: 'w-2.5 h-2.5', color: 'bg-[#E62445]', delay: 'delay-1000' },
        { top: '45%', left: '3%', size: 'w-2 h-2', color: 'bg-gray-400 dark:bg-white', delay: 'delay-200' },
      ].map((dot, i) => (
        <div
          key={i}
          className={`absolute rounded-full opacity-60 animate-float-up ${dot.size} ${dot.color} ${dot.delay}`}
          style={{ top: dot.top, left: (dot as any).left, right: (dot as any).right }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Content ── */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">

            {/* Tagline badge */}
            <div className="inline-flex items-center gap-2 bg-[#1CA6D0]/8 border border-[#1CA6D0]/20 text-[#158ab0] dark:bg-white/10 dark:border-white/20 dark:text-white/90 text-sm font-semibold px-5 py-2 rounded-full">
              {t.tagline}
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-gray-900 dark:text-white tracking-tight">
                {t.title}
                <br />
                <span className="gradient-text">{t.titleAccent}</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-650 dark:text-white/70 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.subtitle}
              </p>
            </div>

            {/* Quick fact badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="glass-card text-gray-800 dark:text-white border border-gray-200/50 dark:border-white/10 text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <Clock size={15} className="text-[#1CA6D0]" />
                {t.badgeHours}
              </span>
              <span className="glass-card text-gray-800 dark:text-white border border-gray-200/50 dark:border-white/10 text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <Users size={15} className="text-[#3BB85E]" />
                {t.badgeAges}
              </span>
              <span className="glass-card text-gray-800 dark:text-white border border-gray-200/50 dark:border-white/10 text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                <GraduationCap size={15} className="text-[#FAC315]" />
                {t.badgeGroups}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-white rounded-2xl px-8 py-7 text-base font-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #E62445, #c41e3a)' }}
                >
                  {t.bookPlace}
                  <ArrowRight size={18} />
                </Button>
              </a>
              <a href={t.waMessage} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-2xl px-8 py-7 text-base font-black border-2 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-[#3BB85E]/8 text-[#3BB85E]"
                  style={{ borderColor: '#3BB85E', color: '#3BB85E' }}
                >
                  <MessageCircle size={18} />
                  {t.whatsApp}
                </Button>
              </a>
            </div>

            {/* Rating row */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-2">
              <div className="flex">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={16} className="text-[#FAC315] fill-[#FAC315]" />
                ))}
              </div>
              <span className="text-gray-500 dark:text-white/60 text-sm font-medium">5.0 · {t.ratingLabel}</span>
            </div>
          </div>

          {/* ── RIGHT: Entrance photo with logo overlay — counter-parallax ── */}
          <div
            className="relative mx-auto max-w-lg lg:max-w-none w-full animate-fade-in-up delay-200"
            style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
          >

            {/* Glow ring behind image */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#1CA6D0]/20 via-[#FAC315]/15 to-[#3BB85E]/20 blur-2xl animate-pulse" />

            {/* Photo card */}
            <div className="relative bg-white/60 dark:bg-white/10 backdrop-blur-sm p-3 rounded-[36px] border border-gray-100 dark:border-white/20 shadow-2xl">
              <div className="rounded-[28px] overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                <ImageWithFallback
                  src={entranceImg}
                  alt="AK-NIET Balabaqsha Entrance"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Logo float badge */}
            <div className="absolute -top-6 -left-4 sm:-left-8 bg-white dark:bg-[#152238] rounded-3xl shadow-2xl p-3 border border-gray-100 dark:border-white/10 animate-bounce-subtle">
              <img src={theme === 'dark' ? logoDarkImg : logoImg} alt="AK-NIET Logo" className="h-16 w-auto object-contain" />
            </div>

            {/* Safety badge bottom-right */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-6 bg-white dark:bg-gray-900 rounded-2xl px-5 py-3 shadow-xl border border-gray-50 dark:border-gray-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3BB85E]/15 flex items-center justify-center">
                <span className="text-[#3BB85E] text-xl font-black">✓</span>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  {language === 'kz' ? 'Орта' : 'Среда'}
                </p>
                <p className="text-sm font-black text-gray-800 dark:text-white">
                  {language === 'kz' ? 'Қауіпсіз & Жайлы' : 'Безопасно & Уютно'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Wave bottom divider ── */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{height: '70px'}}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAF9F6" className="fill-[#FAF9F6] dark:fill-[#152238]" />
        </svg>
      </div>
    </section>
  );
}
