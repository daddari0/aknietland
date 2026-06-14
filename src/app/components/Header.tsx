import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Sun, Moon } from 'lucide-react';
import logoImg from '../../assets/logo.png';

interface HeaderProps {
  language: 'kz' | 'ru';
  onLanguageChange: (lang: 'kz' | 'ru') => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export function Header({ language, onLanguageChange, theme, onThemeToggle }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const translations = {
    kz: {
      about: 'Біз туралы',
      programs: 'Бағдарламалар',
      admission: 'Қабылдау',
      gallery: 'Галерея',
      faq: 'Сұрақтар',
      contact: 'Байланыс',
      contactUs: 'Қоңырау',
    },
    ru: {
      about: 'О нас',
      programs: 'Программы',
      admission: 'Поступление',
      gallery: 'Галерея',
      faq: 'Вопросы',
      contact: 'Контакты',
      contactUs: 'Позвонить',
    },
  };

  const t = translations[language];

  const menuItems = [
    { label: t.about,     href: '#about' },
    { label: t.programs,  href: '#programs' },
    { label: t.admission, href: '#admission' },
    { label: t.gallery,   href: '#gallery' },
    { label: t.faq,       href: '#faq' },
    { label: t.contact,   href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#152238]/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-gray-100/60 dark:border-gray-800/60'
          : 'bg-white/70 dark:bg-[#152238]/70 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── LOGO ── */}
          <a href="#" className="flex-shrink-0 flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="AK-NIET Logo"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            />
          </a>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-[#1CA6D0] dark:hover:text-[#1CA6D0] font-semibold text-[15px] rounded-xl hover:bg-[#1CA6D0]/8 dark:hover:bg-[#1CA6D0]/10 transition-all duration-200 group/link"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#1CA6D0] rounded-full group-hover/link:w-4/5 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-3">

            {/* Language Toggle */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 border border-gray-200/60 dark:border-gray-800/60">
              {(['kz', 'ru'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                    language === lang
                      ? 'bg-white dark:bg-gray-700 shadow text-[#1CA6D0] scale-105'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer border border-gray-200/60 dark:border-gray-700/50"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Call CTA — Desktop */}
            <a
              href="tel:+77773626742"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#1CA6D0] to-[#158ab0] text-white font-bold px-5 py-2.5 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm"
            >
              <Phone size={16} />
              {t.contactUs}
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white/97 dark:bg-[#152238]/97 backdrop-blur-xl animate-slide-down shadow-2xl absolute top-20 left-0 w-full p-6 space-y-5">
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-[#1CA6D0] px-4 py-3 rounded-2xl hover:bg-[#EFF8FB] dark:hover:bg-[#1CA6D0]/10 transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1CA6D0]" />
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
            <a
              href="tel:+77773626742"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1CA6D0] to-[#158ab0] text-white py-3.5 rounded-2xl font-bold shadow-md"
            >
              <Phone size={18} />
              {language === 'kz' ? 'Қоңырау шалу: +7 (777) 362-67-42' : 'Позвонить: +7 (777) 362-67-42'}
            </a>
            <a
              href="https://wa.me/77773626742"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#3BB85E] to-[#2fa34f] text-white py-3.5 rounded-2xl font-bold shadow-md"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
