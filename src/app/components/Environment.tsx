import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShieldCheck, Heart, Sparkles, Award, Utensils, Lock, Home, BookOpen, Shirt } from 'lucide-react';
import classroomImg from '../../assets/classroom.jpg';
import hallwayImg from '../../assets/hallway.jpg';

interface EnvironmentProps {
  language: 'kz' | 'ru';
}

type RoomKey = 'classroom' | 'hallway';

export function Environment({ language }: EnvironmentProps) {
  const [activeRoom, setActiveRoom] = useState<RoomKey>('classroom');
  const [animKey, setAnimKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const translations = {
    kz: {
      badge: 'Біздің орта',
      title: 'Жайлы мекен,',
      titleAccent: 'қауіпсіз орта',
      subtitle:
        'AK-NIET балабақшасында біз балалар үшін барынша қолайлы, таза және қауіпсіз орта құруға ерекше көңіл бөлеміз.',
      features: [
        { title: 'Қауіпсіздік', desc: 'Күнделікті кварцтау, тазалық пен 24/7 бейнебақылау.' },
        { title: 'Жылылық пен қамқорлық', desc: 'Сәбилерге үй жылуын сыйлайтын атмосфера.' },
        { title: 'Дамыту ортасы', desc: 'Заманауи ойыншықтар мен экологиялық таза жиһаз.' },
        { title: 'Білікті тәрбиешілер', desc: 'Әр баланың мінезіне ерекше ықыласпен қарайтын мамандар.' },
        { title: '5 мезгіл тамақтану', desc: 'Сертификатталған диетолог әзірлеген теңгерімді мәзір.' },
        { title: 'Бақылау жүйесі', desc: 'Кіруді бақылау және ата-анаға хабарлама жүйесі.' },
      ],
      rooms: {
        classroom: {
          label: 'Оқу-ойын бөлмесі',
          desc: 'Дамыту ойыншықтары, ақыл-ой жаттығулары және жайлы парталар.',
        },
        hallway: {
          label: 'Киім ауыстыратын бөлме',
          desc: 'Әр балаға арналған жеке шкафтар мен ыңғайлы орын.',
        },
      },
    },
    ru: {
      badge: 'Наша среда',
      title: 'Уютное место,',
      titleAccent: 'безопасная среда',
      subtitle:
        'В детском саду AK-NIET мы уделяем особое внимание созданию комфортной, чистой и абсолютно безопасной среды для каждого ребёнка.',
      features: [
        { title: 'Безопасность', desc: 'Ежедневная дезинфекция и круглосуточное видеонаблюдение.' },
        { title: 'Тепло и забота', desc: 'Домашняя атмосфера заботы для каждого малыша.' },
        { title: 'Развивающая среда', desc: 'Современные игрушки и экологически чистая мебель.' },
        { title: 'Опытные педагоги', desc: 'Специалисты с индивидуальным подходом к каждому.' },
        { title: '5-разовое питание', desc: 'Сбалансированное меню от сертифицированного диетолога.' },
        { title: 'Система контроля', desc: 'Контроль доступа и оповещения для родителей.' },
      ],
      rooms: {
        classroom: {
          label: 'Игровая и учебная комната',
          desc: 'Развивающие игрушки, умственные упражнения и удобные столы.',
        },
        hallway: {
          label: 'Раздевальная комната',
          desc: 'Индивидуальные шкафчики и удобное место для каждого ребёнка.',
        },
      },
    },
  };

  const t = translations[language];

  const roomImages: Record<RoomKey, string> = {
    classroom: classroomImg,
    hallway: hallwayImg,
  };

  const featureIcons = [ShieldCheck, Heart, Sparkles, Award, Utensils, Lock];
  const featureColors = ['#1CA6D0', '#FAC315', '#3BB85E', '#E62445', '#1CA6D0', '#FAC315'];

  const roomIcons = {
    classroom: BookOpen,
    hallway: Shirt,
  };

  const handleRoomChange = (room: RoomKey) => {
    if (room === activeRoom) return;
    setActiveRoom(room);
    setAnimKey(k => k + 1);
  };

  // Scroll reveal for feature cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    const cards = sectionRef.current?.querySelectorAll('.reveal');
    cards?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#EFFDF2] via-[#FAF9F6] to-[#EFF8FB] dark:from-[#152238] dark:via-[#1c2e4a] dark:to-[#243f6d]">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1CA6D0]/8 dark:bg-[#1CA6D0]/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#3BB85E]/8 dark:bg-[#3BB85E]/10 blur-[80px]" />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{transform: 'rotate(180deg)'}}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{height:'60px',display:'block',width:'100%'}}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" className="fill-white dark:fill-[#1c2e4a]" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-[#3BB85E]/8 border border-[#3BB85E]/20 text-[#2fa34f] dark:bg-white/10 dark:border-white/20 dark:text-white/80 text-sm font-bold px-5 py-2 rounded-full mb-5">
            <Home size={15} className="text-[#3BB85E]" />
            {t.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
            {t.title}{' '}
            <span className="gradient-text">{t.titleAccent}</span>
          </h2>
          <p className="text-xl text-gray-650 dark:text-white/60 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Feature grid with stagger reveal */}
          <div className="grid grid-cols-2 gap-4">
            {t.features.map((f, i) => {
              const IconComponent = featureIcons[i];
              return (
                <div
                  key={i}
                  className={`reveal reveal-delay-${Math.min(i + 1, 5)} glass-card rounded-[24px] p-5 hover:bg-white/90 dark:hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group border border-gray-200/50 dark:border-white/10 shadow-sm`}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${featureColors[i]}15` }}
                  >
                    <IconComponent size={22} style={{ color: featureColors[i] }} />
                  </div>
                  <h4 className="font-black text-gray-900 dark:text-white text-sm mb-1">{f.title}</h4>
                  <p className="text-gray-600 dark:text-white/55 text-xs leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Interactive room switcher */}
          <div className="reveal reveal-delay-2 flex flex-col gap-4">
            {/* Tab selector */}
            <div className="flex gap-2 p-1.5 bg-white/80 dark:bg-white/10 rounded-2xl border border-gray-200/60 dark:border-white/10 shadow-sm backdrop-blur-sm">
              {(['classroom', 'hallway'] as RoomKey[]).map((room) => {
                const isActive = activeRoom === room;
                const RoomIcon = roomIcons[room];
                return (
                  <button
                    key={room}
                    onClick={() => handleRoomChange(room)}
                    className={`flex-1 flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-white dark:bg-white/20 text-gray-900 dark:text-white shadow-md scale-[1.02]'
                        : 'text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/70'
                    }`}
                  >
                    <RoomIcon size={16} className={isActive ? 'text-[#1CA6D0]' : 'text-gray-400 dark:text-white/45'} />
                    {t.rooms[room].label}
                  </button>
                );
              })}
            </div>

            {/* Photo with animated transition */}
            <div
              key={animKey}
              className="animate-room-fade relative rounded-[28px] overflow-hidden shadow-2xl border border-gray-150 dark:border-white/10 group"
            >
              <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-800">
                <ImageWithFallback
                  src={roomImages[activeRoom]}
                  alt={t.rooms[activeRoom].label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Gradient overlay with description */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-black text-base mb-1">{t.rooms[activeRoom].label}</p>
                <p className="text-white/70 text-sm leading-relaxed">{t.rooms[activeRoom].desc}</p>
              </div>
            </div>

            {/* Room indicator dots */}
            <div className="flex justify-center gap-2">
              {(['classroom', 'hallway'] as RoomKey[]).map((room) => (
                <button
                  key={room}
                  onClick={() => handleRoomChange(room)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeRoom === room
                      ? 'w-8 h-2.5 bg-[#1CA6D0]'
                      : 'w-2.5 h-2.5 bg-gray-300 dark:bg-white/20 hover:bg-gray-400'
                  }`}
                  aria-label={t.rooms[room].label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom divider */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{height:'64px'}}>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#FAF9F6" className="fill-[#FAF9F6] dark:fill-[#152238]" />
        </svg>
      </div>
    </section>
  );
}
