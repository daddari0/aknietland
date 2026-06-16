import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

interface FloatingCTAProps {
  language: 'kz' | 'ru';
}

export function FloatingCTA({ language }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show tooltip bubble 2s after CTA appears
  useEffect(() => {
    if (visible && !bubbleDismissed) {
      const timer = setTimeout(() => setBubbleVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [visible, bubbleDismissed]);

  const waUrl =
    language === 'kz'
      ? 'https://wa.me/77773626742?text=%D0%A1%D3%99%D0%BB%D0%B5%D0%BC%D0%B5%D1%82%D1%81%D1%96%D0%B7%20%D0%B1%D0%B5!%20AK-NIET%20%D0%B1%D0%B0%D0%BB%D0%B0%D0%B1%D0%B0%D2%B7%D1%88%D0%B0%D1%81%D1%8B%20%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8B%20%D0%B1%D1%96%D0%BB%D0%B3%D1%96%D0%BC%20%D0%BA%D0%B5%D0%BB%D0%B5%D0%B4%D1%96.'
      : 'https://wa.me/77773626742?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%BC%20%D1%81%D0%B0%D0%B4%D0%B5%20AK-NIET.';

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 animate-cta-enter">
      {/* Tooltip bubble */}
      {bubbleVisible && !bubbleDismissed && (
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 px-4 py-3 max-w-[210px] animate-fade-in-up">
          <button
            onClick={() => { setBubbleDismissed(true); setBubbleVisible(false); }}
            className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            aria-label="Закрыть"
          >
            <X size={11} />
          </button>
          <p className="text-xs font-bold text-gray-800 dark:text-white pr-5 leading-snug">
            {language === 'kz'
              ? 'Сұрақтарыңыз бар ма? Жазыңыз!'
              : 'Есть вопросы? Напишите нам!'}
          </p>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">
            {language === 'kz' ? '5 минутта жауап береміз' : 'Ответим за 5 минут'}
          </p>
          {/* Small arrow */}
          <div
            className="absolute -bottom-2 right-7 w-4 h-4 bg-white dark:bg-gray-900 border-r border-b border-gray-100 dark:border-gray-700 rotate-45"
            style={{ marginBottom: '-1px' }}
          />
        </div>
      )}

      {/* Buttons row */}
      <div className="flex items-center gap-2.5">
        {/* Phone call button */}
        <a
          href="tel:+77773626742"
          id="floating-call-btn"
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 border-2 border-[#1CA6D0]/30 bg-white dark:bg-[#1c2e4a]"
          aria-label={language === 'kz' ? 'Қоңырау шалу' : 'Позвонить'}
        >
          <Phone size={20} className="text-[#1CA6D0]" />
        </a>

        {/* WhatsApp button with ping ring */}
        <div className="relative">
          {/* Outer ping ring */}
          <span
            className="absolute inset-0 rounded-full animate-cta-ping"
            style={{ background: 'rgba(37,211,102,0.35)' }}
          />
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-btn"
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce-subtle"
            style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
            aria-label="WhatsApp"
          >
            <MessageCircle size={26} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
