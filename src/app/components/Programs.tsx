interface ProgramsProps {
  language: 'kz' | 'ru';
}

export function Programs({ language }: ProgramsProps) {
  const translations = {
    kz: {
      badge: '🎯 Бізің бағдарламалар',
      title: 'Балаңыздың',
      titleAccent: 'жан-жақты дамуы',
      subtitle: 'Кәсіби педагогтар жетекшілігімен нәтижелі бағдарламалар',
      programs: [
        {
          emoji: '🥋',
          name: 'Каратэ',
          tag: 'Спорт',
          desc: 'Физикалық дайындық, өзін-өзі қорғау және темірдей тәртіп. Баланың бойындағы күш-жігер мен сенімділікті шыңдайды.',
          color: '#E62445',
          bg: 'from-[#E62445]/10 to-[#E62445]/5',
          border: 'border-[#E62445]/20',
        },
        {
          emoji: '🤸',
          name: 'Гимнастика',
          tag: 'Дене тәрбиесі',
          desc: 'Баланың сымбатын, икемділігін және үйлесімді қозғалысын дамыту. Денені ерте жастан дұрыс қалыптастыруға көмектеседі.',
          color: '#FAC315',
          bg: 'from-[#FAC315]/10 to-[#FAC315]/5',
          border: 'border-[#FAC315]/20',
        },
        {
          emoji: '🗣️',
          name: 'Ағылшын тілі',
          tag: 'Тіл үйрену',
          desc: 'Ойын арқылы ерте жастан тіл үйрену. Сөздік қорды арттыру, дұрыс дыбыстау және тілдесу дағдыларын қалыптастыру.',
          color: '#1CA6D0',
          bg: 'from-[#1CA6D0]/10 to-[#1CA6D0]/5',
          border: 'border-[#1CA6D0]/20',
        },
        {
          emoji: '📚',
          name: 'Даярлық тобы',
          tag: 'Мектепке дайындық',
          desc: 'Мектеп бағдарламасына сапалы дайындық. Жазу, оқу, санау, логикалық ойлау және мектеп ортасына толық адаптация.',
          color: '#3BB85E',
          bg: 'from-[#3BB85E]/10 to-[#3BB85E]/5',
          border: 'border-[#3BB85E]/20',
        },
      ],
    },
    ru: {
      badge: '🎯 Наши программы',
      title: 'Всестороннее',
      titleAccent: 'развитие ребёнка',
      subtitle: 'Результативные программы под руководством профессиональных педагогов',
      programs: [
        {
          emoji: '🥋',
          name: 'Каратэ',
          tag: 'Спорт',
          desc: 'Физическая закалка, самооборона и дисциплина. Помогает ребенку развить уверенность в себе и силу воли.',
          color: '#E62445',
          bg: 'from-[#E62445]/10 to-[#E62445]/5',
          border: 'border-[#E62445]/20',
        },
        {
          emoji: '🤸',
          name: 'Гимнастика',
          tag: 'Физразвитие',
          desc: 'Развитие гибкости, правильной осанки и координации. Способствует гармоничному физическому развитию.',
          color: '#FAC315',
          bg: 'from-[#FAC315]/10 to-[#FAC315]/5',
          border: 'border-[#FAC315]/20',
        },
        {
          emoji: '🗣️',
          name: 'Английский язык',
          tag: 'Языки',
          desc: 'Изучение языка в игровой интерактивной форме. Расширение словарного запаса и развитие разговорных навыков.',
          color: '#1CA6D0',
          bg: 'from-[#1CA6D0]/10 to-[#1CA6D0]/5',
          border: 'border-[#1CA6D0]/20',
        },
        {
          emoji: '📚',
          name: 'Даярлық тобы',
          tag: 'К школе',
          desc: 'Качественная подготовка к начальной школе. Обучение чтению, письму, основам математики и логики.',
          color: '#3BB85E',
          bg: 'from-[#3BB85E]/10 to-[#3BB85E]/5',
          border: 'border-[#3BB85E]/20',
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section id="programs" className="py-20 lg:py-28 bg-white dark:bg-[#1c2e4a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#EFF8FB]/60 dark:bg-[#EFF8FB]/5 blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#EFFDF2]/60 dark:bg-[#EFFDF2]/5 blur-3xl -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1CA6D0]/8 text-[#1CA6D0] dark:bg-[#1CA6D0]/15 dark:text-[#1CA6D0] text-sm font-bold px-5 py-2 rounded-full mb-5 border border-[#1CA6D0]/20 dark:border-[#1CA6D0]/30">
            {t.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
            {t.title}{' '}
            <span className="gradient-text">{t.titleAccent}</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Programs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {t.programs.map((prog, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-br ${prog.bg} border ${prog.border} dark:border-white/10 rounded-[32px] p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col overflow-hidden`}
            >
              {/* Large emoji background */}
              <span className="absolute -top-2 -right-2 text-8xl opacity-[0.07] select-none group-hover:opacity-[0.12] transition-opacity">
                {prog.emoji}
              </span>

              {/* Emoji icon */}
              <div
                className="w-18 h-18 rounded-3xl flex items-center justify-center mb-6 text-4xl shadow-md group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${prog.color}18`, width: '72px', height: '72px' }}
              >
                {prog.emoji}
              </div>

              {/* Tag badge */}
              <span
                className="inline-block text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3 w-fit"
                style={{ backgroundColor: `${prog.color}18`, color: prog.color }}
              >
                {prog.tag}
              </span>

              {/* Name */}
              <h3
                className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:transition-colors"
                style={{ color: 'inherit' }}
              >
                {prog.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">{prog.desc}</p>

              {/* Bottom color stripe */}
              <div
                className="mt-6 h-1 rounded-full w-12 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: prog.color }}
              />
            </div>
          ))}
        </div>

        {/* All included note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#3BB85E]/8 border border-[#3BB85E]/20 text-[#3BB85E] dark:bg-[#3BB85E]/15 dark:border-[#3BB85E]/30 font-bold text-sm px-6 py-3 rounded-2xl">
            <span className="text-lg">✅</span>
            {language === 'kz'
              ? 'Барлық бағдарламалар оқу құнына кіреді — қосымша төлем жоқ!'
              : 'Все программы включены в стоимость обучения — без доплат!'}
          </div>
        </div>
      </div>
    </section>
  );
}
