import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

interface FAQProps {
  language: 'kz' | 'ru';
}

export function FAQ({ language }: FAQProps) {
  const translations = {
    kz: {
      badge: '❓ Жиі сұрақтар',
      title: 'Ата-аналар',
      titleAccent: 'жиі сұрайды',
      subtitle: 'Балабақшамыз туралы ең маңызды сұрақтарға жауаптар',
      questions: [
        {
          q: 'Қабылдау үшін қандай құжаттар қажет?',
          a: 'Қабылдау үшін: баланың туу туралы куәлігінің көшірмесі, ата-анасының жеке куәлігінің көшірмесі, 026/у нысанындағы медициналық карта және денсаулық паспорты.',
          emoji: '📄',
        },
        {
          q: 'Балабақшаның жұмыс режимі қандай?',
          a: 'Дүйсенбі мен жұма аралығында сағат 08:00-ден 19:00-ге дейін. Сенбі, жексенбі және мемлекеттік мерекелер — демалыс күндері.',
          emoji: '🕗',
        },
        {
          q: 'Топтарда қанша бала бар?',
          a: '2-ден 6 жасқа дейінгі 3 жас ерекшелік тобы. Әр топта 15–20 бала болады — бұл әр балаға жеке және сапалы көңіл бөлуге мүмкіндік береді.',
          emoji: '👨‍👩‍👧‍👦',
        },
        {
          q: 'Каратэ, гимнастика, ағылшын тілі үйірмелері құнға кіре ме?',
          a: 'Иә! Барлық үйірмелер (каратэ, гимнастика, ағылшын тілі, даярлық тобы) оқу бағдарламасына толықтай кіреді — қосымша төлем жоқ.',
          emoji: '✅',
        },
        {
          q: 'Балаларға қандай тамақ беріледі?',
          a: 'Кәсіби аспаздар күнделікті жаңа өнімдерден дайындайтын 5 мезгілдік сбалансталған тамақтану. Балалардың мәзірі барлық нормаларға сай.',
          emoji: '🍱',
        },
        {
          q: 'Балалардың қауіпсіздігі қалай қамтамасыз етілген?',
          a: 'Балабақша іші мен сырты тәулік бойы бейнебақылау және күзет жүйесімен бақыланады. Барлық жиһаздар мен бөлмелер балалар үшін мүлдем қауіпсіз.',
          emoji: '🔒',
        },
      ],
    },
    ru: {
      badge: '❓ Частые вопросы',
      title: 'Родители',
      titleAccent: 'часто спрашивают',
      subtitle: 'Ответы на самые популярные вопросы о нашем детском саде',
      questions: [
        {
          q: 'Какие документы нужны для поступления?',
          a: 'Копия свидетельства о рождении ребёнка, копия удостоверения личности родителя, медицинская карта формы 026/у и паспорт здоровья ребёнка.',
          emoji: '📄',
        },
        {
          q: 'Каков режим работы детского сада?',
          a: 'Мы открыты с понедельника по пятницу с 08:00 до 19:00. Выходные — суббота, воскресенье и официальные государственные праздники.',
          emoji: '🕗',
        },
        {
          q: 'Сколько детей в группах?',
          a: '3 возрастные группы для детей от 2 до 6 лет. В каждой группе от 15 до 20 детей — это позволяет педагогам уделить максимум внимания каждому ребёнку.',
          emoji: '👨‍👩‍👧‍👦',
        },
        {
          q: 'Входят ли кружки в стоимость?',
          a: 'Да! Все кружки (каратэ, гимнастика, английский язык, подготовительная группа) включены в базовую стоимость обучения без скрытых доплат.',
          emoji: '✅',
        },
        {
          q: 'Какое питание предоставляется детям?',
          a: 'Полноценное сбалансированное 5-разовое питание, составленное сертифицированным диетологом. Блюда готовятся ежедневно из свежих продуктов.',
          emoji: '🍱',
        },
        {
          q: 'Обеспечена ли безопасность детей?',
          a: 'Да! Круглосуточное видеонаблюдение внутри и снаружи, система контроля доступа. Все пространства спроектированы с максимальной заботой о детской безопасности.',
          emoji: '🔒',
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#1CA6D0]/6 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#3BB85E]/6 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1CA6D0]/8 border border-[#1CA6D0]/20 text-[#1CA6D0] text-sm font-bold px-5 py-2 rounded-full mb-5">
            {t.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
            {t.title}{' '}
            <span className="gradient-text">{t.titleAccent}</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.questions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-100 rounded-[20px] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline cursor-pointer group">
                  <span className="flex items-center gap-4 text-gray-800 font-bold text-base group-hover:text-[#1CA6D0] transition-colors">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-[#1CA6D0]/8 flex items-center justify-center text-xl">
                      {item.emoji}
                    </span>
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <div className="pl-14 text-gray-600 text-sm lg:text-base leading-relaxed border-l-2 border-[#1CA6D0]/20 ml-5">
                    {item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-[#1CA6D0]/8 to-[#3BB85E]/8 border border-[#1CA6D0]/15 rounded-[28px] p-8">
            <p className="text-2xl font-black text-gray-900 mb-2">
              {language === 'kz' ? 'Сұрағыңыз қалды ма? 🤔' : 'Остались вопросы? 🤔'}
            </p>
            <p className="text-gray-500 mb-6">
              {language === 'kz'
                ? 'Бізге тікелей жазыңыз — жауап беруге қуанышпыз!'
                : 'Напишите нам напрямую — мы с радостью ответим!'}
            </p>
            <a
              href="https://wa.me/77773626742"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#3BB85E] hover:bg-[#2fa34f] text-white font-black px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <span className="text-xl">💬</span>
              {language === 'kz' ? 'WhatsApp-қа жазу' : 'Написать в WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
