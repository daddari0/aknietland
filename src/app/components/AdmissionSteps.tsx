interface AdmissionStepsProps {
  language: 'kz' | 'ru';
}

export function AdmissionSteps({ language }: AdmissionStepsProps) {
  const translations = {
    kz: {
      badge: '🚀 Қабылдау процесі',
      title: 'Балаңызды жазуды',
      titleAccent: 'бастаңыз',
      subtitle: '4 қарапайым қадаммен балаңызды AK-NIET-ке орналастырыңыз',
      steps: [
        {
          num: '01',
          emoji: '📝',
          title: 'Өтінім қалдыру',
          desc: 'Сайттағы форманы толтырыңыз немесе бізге WhatsApp арқылы жазыңыз.',
          color: '#1CA6D0',
          bg: 'from-[#1CA6D0]/15 to-[#1CA6D0]/5',
        },
        {
          num: '02',
          emoji: '🏫',
          title: 'Экскурсия',
          desc: 'Балабақшамызды өз көзіңізбен көріп, тәрбиешілермен тікелей танысыңыз.',
          color: '#FAC315',
          bg: 'from-[#FAC315]/15 to-[#FAC315]/5',
        },
        {
          num: '03',
          emoji: '📋',
          title: 'Құжаттар',
          desc: 'Баланың медициналық картасы мен қажетті құжаттар көшірмелерін жинаңыз.',
          color: '#3BB85E',
          bg: 'from-[#3BB85E]/15 to-[#3BB85E]/5',
        },
        {
          num: '04',
          emoji: '🎉',
          title: 'Қош келдіңіз!',
          desc: 'Келісімшартқа отырып, балаңызды жылы топта қарсы аламыз!',
          color: '#E62445',
          bg: 'from-[#E62445]/15 to-[#E62445]/5',
        },
      ],
    },
    ru: {
      badge: '🚀 Процесс зачисления',
      title: 'Начните запись',
      titleAccent: 'прямо сейчас',
      subtitle: '4 простых шага для зачисления вашего ребёнка в AK-NIET',
      steps: [
        {
          num: '01',
          emoji: '📝',
          title: 'Подача заявки',
          desc: 'Заполните форму на сайте или напишите нам в WhatsApp напрямую.',
          color: '#1CA6D0',
          bg: 'from-[#1CA6D0]/15 to-[#1CA6D0]/5',
        },
        {
          num: '02',
          emoji: '🏫',
          title: 'Экскурсия',
          desc: 'Приходите к нам и посмотрите на группы и познакомьтесь с педагогами.',
          color: '#FAC315',
          bg: 'from-[#FAC315]/15 to-[#FAC315]/5',
        },
        {
          num: '03',
          emoji: '📋',
          title: 'Документы',
          desc: 'Подготовьте медицинскую карту и копии базовых личных документов.',
          color: '#3BB85E',
          bg: 'from-[#3BB85E]/15 to-[#3BB85E]/5',
        },
        {
          num: '04',
          emoji: '🎉',
          title: 'Добро пожаловать!',
          desc: 'Подписываем договор — и с радостью ждём вашего малыша в группе!',
          color: '#E62445',
          bg: 'from-[#E62445]/15 to-[#E62445]/5',
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section id="admission" className="py-20 lg:py-28 bg-[#FAF9F6] dark:bg-[#152238] relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.01]"
        style={{ backgroundImage: 'radial-gradient(circle, #1CA6D0 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#3BB85E]/8 border border-[#3BB85E]/20 text-[#3BB85E] dark:bg-white/10 dark:border-white/20 dark:text-white/80 text-sm font-bold px-5 py-2 rounded-full mb-5">
            {t.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
            {t.title}{' '}
            <span className="gradient-text">{t.titleAccent}</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting dashed line on desktop */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-gray-200 dark:border-gray-800 hidden lg:block z-0" />

          {t.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group relative z-10">
              {/* Circle with emoji */}
              <div className="relative mb-6">
                {/* Outer ring */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br"
                  style={{
                    background: `radial-gradient(circle, ${step.color}22 0%, ${step.color}10 100%)`,
                    border: `2px solid ${step.color}30`,
                  }}
                >
                  {step.emoji}
                </div>

                {/* Step number badge */}
                <span
                  className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black shadow-md"
                  style={{ backgroundColor: step.color }}
                >
                  {step.num}
                </span>
              </div>

              {/* Card */}
              <div
                className={`bg-gradient-to-b ${step.bg} border rounded-[24px] p-6 w-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                style={{ borderColor: `${step.color}25` }}
              >
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after steps */}
        <div className="mt-14 text-center">
          <a href="#contact">
            <button className="inline-flex items-center gap-3 text-white font-black text-base px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #1CA6D0, #3BB85E)' }}>
              {language === 'kz' ? '📝 Өтінім қалдыру' : '📝 Подать заявку'}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
