import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import entranceImg from '../../assets/entrance.jpg';
import classroomImg from '../../assets/classroom.jpg';
import hallwayImg from '../../assets/hallway.jpg';

interface GalleryProps {
  language: 'kz' | 'ru';
}

export function Gallery({ language }: GalleryProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const translations = {
    kz: {
      badge: '📸 Фотогалерея',
      title: 'Балабақшамызды',
      titleAccent: 'өз көзіңізбен көріңіз',
      subtitle: 'Балаңыздың жайлылығы мен қауіпсіздігі үшін жасалған жағдайлар',
      close: 'Жабу',
      viewPhoto: 'Фотоны үлкейту',
    },
    ru: {
      badge: '📸 Фотогалерея',
      title: 'Посмотрите на нас',
      titleAccent: 'своими глазами',
      subtitle: 'Условия, созданные для уюта, развития и безопасности вашего ребёнка',
      close: 'Закрыть',
      viewPhoto: 'Увеличить фото',
    },
  };

  const photoData = [
    {
      src: entranceImg,
      title: language === 'kz' ? 'Балабақша кіре берісі' : 'Входная группа',
      desc: language === 'kz' ? 'Қауіпсіз кіреберіс және жарқын маңдайша' : 'Безопасный вход и яркая вывеска AK-NIET',
      tag: language === 'kz' ? '🏫 Сыртқы көрініс' : '🏫 Фасад',
    },
    {
      src: classroomImg,
      title: language === 'kz' ? 'Оқу-ойын бөлмесі' : 'Учебно-игровая комната',
      desc: language === 'kz' ? 'Ойын мен дамуға арналған жайлы бөлме' : 'Удобные столы и развивающие материалы',
      tag: language === 'kz' ? '🖊️ Сынып бөлмесі' : '🖊️ Классная комната',
    },
    {
      src: hallwayImg,
      title: language === 'kz' ? 'Киім ауыстыратын бөлме' : 'Раздевальная комната',
      desc: language === 'kz' ? 'Әр балаға арналған жеке шкафтар' : 'Индивидуальные шкафчики для каждого ребёнка',
      tag: language === 'kz' ? '👗 Дәліз' : '👗 Раздевалка',
    },
  ];

  const t = translations[language];

  useEffect(() => {
    document.body.style.overflow = activePhotoIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activePhotoIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowLeft') setActivePhotoIndex(p => p !== null ? (p === 0 ? photoData.length - 1 : p - 1) : null);
      if (e.key === 'ArrowRight') setActivePhotoIndex(p => p !== null ? (p === photoData.length - 1 ? 0 : p + 1) : null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activePhotoIndex]);

  const prev = () => setActivePhotoIndex(p => p !== null ? (p === 0 ? photoData.length - 1 : p - 1) : null);
  const next = () => setActivePhotoIndex(p => p !== null ? (p === photoData.length - 1 ? 0 : p + 1) : null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white dark:bg-[#1c2e4a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FAC315]/8 dark:bg-[#FAC315]/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#1CA6D0]/8 dark:bg-[#1CA6D0]/4 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FAC315]/10 border border-[#FAC315]/25 text-[#b88a00] dark:bg-[#FAC315]/20 dark:text-[#FAC315] text-sm font-bold px-5 py-2 rounded-full mb-5">
            {t.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
            {t.title}{' '}
            <span className="gradient-text-warm">{t.titleAccent}</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Gallery grid — Masonry-style */}
        <div className="grid md:grid-cols-3 gap-6">
          {photoData.map((photo, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-[28px] shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 dark:border dark:border-white/5 ${
                index === 0 ? 'md:row-span-1' : ''
              }`}
              onClick={() => setActivePhotoIndex(index)}
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
                  loading="lazy"
                />
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Tag badge */}
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 text-xs font-black px-3 py-1.5 rounded-full shadow-md translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {photo.tag}
              </div>

              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 dark:bg-black/35 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ZoomIn size={18} className="text-white" />
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-black text-base leading-tight mb-1">{photo.title}</h3>
                <p className="text-white/70 text-xs">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setActivePhotoIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10 border border-white/20"
            onClick={() => setActivePhotoIndex(null)}
            aria-label={t.close}
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer border border-white/20 transition-all hover:scale-110"
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={26} />
          </button>

          {/* Photo + caption */}
          <div
            className="max-w-4xl w-full flex flex-col items-center gap-5"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-black flex items-center justify-center max-h-[72vh]">
              <img
                src={photoData[activePhotoIndex].src}
                alt={photoData[activePhotoIndex].title}
                className="max-w-full max-h-[72vh] object-contain"
              />
            </div>
            <div className="text-center text-white">
              <div className="text-xs bg-white/10 text-white/70 inline-block px-4 py-1.5 rounded-full mb-3 font-bold">
                {photoData[activePhotoIndex].tag}
              </div>
              <h3 className="text-xl lg:text-2xl font-black mb-2">{photoData[activePhotoIndex].title}</h3>
              <p className="text-white/60 text-sm">{photoData[activePhotoIndex].desc}</p>
              <p className="text-white/30 text-xs mt-3">{activePhotoIndex + 1} / {photoData.length}</p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer border border-white/20 transition-all hover:scale-110"
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </section>
  );
}
