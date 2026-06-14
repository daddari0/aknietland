import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Sparkles, Phone, User, Check, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactFormProps {
  language: 'kz' | 'ru';
}

export function ContactForm({ language }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const translations = {
    kz: {
      badge: '🎓 Орын брондау',
      title: 'Жеке экскурсияға жазылыңыз',
      subtitle: 'Балабақшамызды өз көзіңізбен көріп, тәрбиешілермен тікелей танысыңыз',
      nameLabel: 'Ата-ананың аты-жөні',
      namePlaceholder: 'Толық атыңызды жазыңыз',
      phoneLabel: 'Телефон нөмірі',
      phonePlaceholder: '+7 (777) 362-67-42',
      submit: '📝 Жазылуға өтінім беру',
      successTitle: 'Өтінішіңіз сәтті қабылданды! 🎉',
      successDesc: 'Рақмет! Біз жақын арада сізге хабарласып, ыңғайлы уақытты белгілейміз.',
      orWrite: 'немесе тікелей жазыңыз',
      openSlots: 'Орын бар',
    },
    ru: {
      badge: '🎓 Забронировать место',
      title: 'Запишитесь на экскурсию',
      subtitle: 'Посмотрите сад своими глазами и познакомьтесь с воспитателями',
      nameLabel: 'Имя родителя',
      namePlaceholder: 'Как к вам обращаться?',
      phoneLabel: 'Номер телефона',
      phonePlaceholder: '+7 (777) 362-67-42',
      submit: '📝 Записаться на экскурсию',
      successTitle: 'Заявка успешно отправлена! 🎉',
      successDesc: 'Спасибо! Мы свяжемся с вами в течение 15 минут для подтверждения времени.',
      orWrite: 'или напишите напрямую',
      openSlots: 'Есть свободные места',
    },
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.55 },
      colors: ['#1CA6D0', '#E62445', '#FAC315', '#3BB85E', '#ffffff'],
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#FDFBF7] via-[#EFF8FB] to-[#FDFBF7] dark:from-[#0a1628] dark:via-[#0d2040] dark:to-[#0e2a4f]">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#1CA6D0]/8 dark:bg-[#1CA6D0]/10 blur-[90px]" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#3BB85E]/6 dark:bg-[#3BB85E]/10 blur-[90px]" />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ transform: 'rotate(180deg)' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: '60px', display: 'block', width: '100%' }}>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#FDFBF7" className="fill-[#FDFBF7] dark:fill-[#0a1628]" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Info column */}
          <div className="text-gray-900 dark:text-white space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#3BB85E]/8 border border-[#3BB85E]/20 text-[#2fa34f] dark:bg-white/10 dark:border-white/20 dark:text-white/80 text-sm font-bold px-5 py-2 rounded-full mb-5">
                {t.badge}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
                {t.title}
              </h2>
              <p className="text-gray-650 dark:text-white/60 text-lg leading-relaxed">{t.subtitle}</p>
            </div>

            {/* Key benefits */}
            {[
              language === 'kz' ? '✅ Тегін экскурсия' : '✅ Бесплатная экскурсия',
              language === 'kz' ? '⚡ 15 минутта жауап' : '⚡ Ответим за 15 минут',
              language === 'kz' ? '🎁 Орын брондауға кепілдік' : '🎁 Гарантия бронирования места',
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-white/80 font-semibold text-sm">
                <span>{benefit}</span>
              </div>
            ))}

            {/* Open slots badge */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex items-center gap-2 bg-[#3BB85E]/20 border border-[#3BB85E]/30 text-[#3BB85E] px-4 py-2 rounded-full text-sm font-black">
                <span className="w-2 h-2 rounded-full bg-[#3BB85E] animate-pulse" />
                {t.openSlots}
              </div>
            </div>

            {/* Direct contacts */}
            <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-white/10">
              <a href="tel:+77773626742" className="flex items-center gap-3 text-gray-600 dark:text-white/70 hover:text-[#1CA6D0] dark:hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-2xl bg-[#1CA6D0]/8 dark:bg-white/10 flex items-center justify-center group-hover:bg-[#1CA6D0]/15 transition-colors">
                  <Phone size={18} className="text-[#1CA6D0]" />
                </div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">+7 (777) 362-67-42</span>
              </a>
              <a href="tel:+77071819707" className="flex items-center gap-3 text-gray-600 dark:text-white/70 hover:text-[#1CA6D0] dark:hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-2xl bg-[#1CA6D0]/8 dark:bg-white/10 flex items-center justify-center group-hover:bg-[#1CA6D0]/15 transition-colors">
                  <Phone size={18} className="text-[#1CA6D0]" />
                </div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">+7 (707) 181-97-07</span>
              </a>
              <div className="pt-1">
                <p className="text-gray-450 dark:text-white/40 text-xs mb-2 font-semibold uppercase tracking-wider">{t.orWrite}</p>
                <a
                  href="https://wa.me/77773626742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#3BB85E] hover:bg-[#2fa34f] text-white font-bold px-5 py-2.5 rounded-2xl shadow-lg hover:scale-105 transition-all text-sm cursor-pointer"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form card */}
          <div className="glass-card rounded-[32px] p-8 lg:p-10 shadow-2xl dark:border-white/5">
            {submitted ? (
              /* ── Success state ── */
              <div className="text-center space-y-5 py-8 animate-scale-pop">
                <div className="w-20 h-20 rounded-full bg-[#3BB85E] flex items-center justify-center mx-auto shadow-xl animate-pulse-ring">
                  <Check size={40} className="text-white" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">{t.successTitle}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t.successDesc}</p>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAC315]/15 flex items-center justify-center">
                    <Sparkles size={18} className="text-[#b88a00] dark:text-[#FAC315]" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#b88a00] dark:text-[#FAC315] uppercase tracking-wider">
                      {language === 'kz' ? 'Қабылдау ашық' : 'Открыт набор'}
                    </p>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {language === 'kz' ? 'Орын саны шектеулі' : 'Мест ограниченное количество'}
                    </p>
                  </div>
                </div>

                {/* Name field */}
                <div className="space-y-2">
                  <Label htmlFor="parent-name" className="text-gray-700 dark:text-gray-300 font-bold text-sm pl-1">
                    {t.nameLabel}
                  </Label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 pointer-events-none">
                      <User size={17} />
                    </span>
                    <Input
                      id="parent-name"
                      type="text"
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14 w-full rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus-visible:ring-[#1CA6D0] focus-visible:border-[#1CA6D0] bg-gray-50 dark:bg-gray-800 pl-11 pr-4 shadow-sm text-base text-gray-800 dark:text-white transition-all hover:border-gray-300 dark:hover:border-gray-600"
                    />
                  </div>
                </div>

                {/* Phone field */}
                <div className="space-y-2">
                  <Label htmlFor="parent-phone" className="text-gray-700 dark:text-gray-300 font-bold text-sm pl-1">
                    {t.phoneLabel}
                  </Label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 pointer-events-none">
                      <Phone size={17} />
                    </span>
                    <Input
                      id="parent-phone"
                      type="tel"
                      placeholder={t.phonePlaceholder}
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-14 w-full rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus-visible:ring-[#1CA6D0] focus-visible:border-[#1CA6D0] bg-gray-50 dark:bg-gray-800 pl-11 pr-4 shadow-sm text-base text-gray-800 dark:text-white transition-all hover:border-gray-300 dark:hover:border-gray-600"
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 rounded-2xl text-white font-black text-base shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #E62445, #c41e3a)' }}
                >
                  {t.submit}
                </Button>

                <p className="text-center text-gray-400 dark:text-gray-500 text-xs">
                  {language === 'kz'
                    ? 'Деректеріңіз қорғалған және үшінші тарапқа берілмейді'
                    : 'Ваши данные защищены и не передаются третьим лицам'}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: '64px' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F8FAFC" className="fill-[#F8FAFC] dark:fill-[#050e1e]" />
        </svg>
      </div>
    </section>
  );
}
