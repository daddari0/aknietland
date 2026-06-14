import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickFacts } from './components/QuickFacts';
import { Programs } from './components/Programs';
import { Environment } from './components/Environment';
import { AdmissionSteps } from './components/AdmissionSteps';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { Testimonials } from './components/Testimonials';

export default function App() {
  const [language, setLanguage] = useState<'kz' | 'ru'>('ru');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#152238] antialiased text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Header 
        language={language} 
        onLanguageChange={setLanguage} 
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <Hero language={language} />
      <QuickFacts language={language} />
      <Programs language={language} />
      <Environment language={language} />
      <AdmissionSteps language={language} />
      <Gallery language={language} />
      <Testimonials language={language} />
      <FAQ language={language} />
      <ContactForm language={language} />
      <Footer language={language} />
      <FloatingCTA language={language} />
    </div>
  );
}

