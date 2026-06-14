import { ImageWithFallback } from './figma/ImageWithFallback';
import classroomImg from '../../assets/classroom.jpg';
import hallwayImg from '../../assets/hallway.jpg';

interface EnvironmentProps {
  language: 'kz' | 'ru';
}

export function Environment({ language }: EnvironmentProps) {
  const translations = {
    kz: {
      badge: '🏡 Біздің орта',
      title: 'Жайлы мекен,',
      titleAccent: 'қауіпсіз орта',
      subtitle:
        'AK-NIET балабақшасында біз балалар үшін барынша қолайлы, таза және қауіпсіз орта құруға ерекше көңіл бөлеміз.',
      features: [
        { emoji: '🛡️', title: 'Қауіпсіздік', desc: 'Күнделікті кварцтау, тазалық пен 24/7 бейнебақылау.' },
        { emoji: '💛', title: 'Жылылық пен қамқорлық', desc: 'Сәбилерге үй жылуын сыйлайтын атмосфера.' },
        { emoji: '✨', title: 'Дамыту ортасы', desc: 'Заманауи ойыншықтар мен экологиялық таза жиһаздар.' },
        { emoji: '🏆', title: 'Білікті тәрбиешілер', desc: 'Әр баланың мінезіне ерекше ықыласпен қарайтын мамандар.' },
        { emoji: '🍱', title: '5 мезгілдік тамақ', desc: 'Балаларға арналған сбалансталған пайдалы тамақтану.' },
        { emoji: '🔒', title: 'Бақылау жүйесі', desc: 'Кіруді бақылау және ата-анаға хабарлама жүйесі.' },
      ],
      classroomLabel: 'Оқу-ойын бөлмесі',
      hallwayLabel: 'Киім ауыстыратын бөлме',
    },
    ru: {
      badge: '🏡 Наша среда',
      title: 'Уютное место,',
      titleAccent: 'безопасная среда',
      subtitle:
        'В детском саду AK-NIET мы уделяем особое внимание созданию комфортной, чистой и абсолютно безопасной среды для каждого ребёнка.',
      features: [
        { emoji: '🛡️', title: 'Безопасность', desc: 'Ежедневная дезинфекция и круглосуточное видеонаблюдение.' },
        { emoji: '💛', title: 'Тепло и забота', desc: 'Домашняя атмосфера заботы для каждого малыша.' },
        { emoji: '✨', title: 'Развивающая среда', desc: 'Современные игрушки и экологически чистая мебель.' },
        { emoji: '🏆', title: 'Опытные педагоги', desc: 'Специалисты с индивидуальным подходом к каждому.' },
        { emoji: '🍱', title: '5-разовое питание', desc: 'Сбалансированное меню от сертифицированного диетолога.' },
        { emoji: '🔒', title: 'Система контроля', desc: 'Контроль доступа и оповещения для родителей.' },
      ],
      classroomLabel: 'Игровая и учебная комната',
      hallwayLabel: 'Раздевальная комната',
    },
  };

  const t = translations[language];

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#EFFDF2] via-[#FDFBF7] to-[#EFF8FB] dark:from-[#0a1628] dark:via-[#0d2040] dark:to-[#112255]">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1CA6D0]/8 dark:bg-[#1CA6D0]/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#3BB85E]/8 dark:bg-[#3BB85E]/10 blur-[80px]" />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{transform: 'rotate(180deg)'}}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{height:'60px',display:'block',width:'100%'}}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" className="fill-white dark:fill-[#0d2040]" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#3BB85E]/8 border border-[#3BB85E]/20 text-[#2fa34f] dark:bg-white/10 dark:border-white/20 dark:text-white/80 text-sm font-bold px-5 py-2 rounded-full mb-5">
            {t.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
            {t.title}{' '}
            <span className="gradient-text">{t.titleAccent}</span>
          </h2>
          <p className="text-xl text-gray-650 dark:text-white/60 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Feature grid */}
          <div className="grid grid-cols-2 gap-4">
            {t.features.map((f, i) => (
              <div
                key={i}
                className="glass-card rounded-[24px] p-5 hover:bg-white/90 dark:hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group border border-gray-200/50 dark:border-white/10 shadow-sm"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">{f.emoji}</div>
                <h4 className="font-black text-gray-900 dark:text-white text-sm mb-1">{f.title}</h4>
                <p className="text-gray-600 dark:text-white/55 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: Photos */}
          <div className="flex flex-col gap-5">
            {/* Classroom photo */}
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-gray-150 dark:border-white/10 group">
              <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-800">
                <ImageWithFallback
                  src={classroomImg}
                  alt="AK-NIET Classroom"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-bold text-sm">🖊️ {t.classroomLabel}</span>
              </div>
            </div>

            {/* Hallway photo */}
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-gray-150 dark:border-white/10 group">
              <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-800">
                <ImageWithFallback
                  src={hallwayImg}
                  alt="AK-NIET Hallway"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-bold text-sm">👗 {t.hallwayLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom divider */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{height:'64px'}}>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#FDFBF7" className="fill-[#FDFBF7] dark:fill-[#0a1628]" />
        </svg>
      </div>
    </section>
  );
}
