import { useState } from 'react';
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

export default function App() {
  const [language, setLanguage] = useState<'kz' | 'ru'>('ru');

  return (
    <div className="min-h-screen bg-[#FDFBF7] antialiased text-gray-800">
      <Header language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <QuickFacts language={language} />
      <Programs language={language} />
      <Environment language={language} />
      <AdmissionSteps language={language} />
      <Gallery language={language} />
      <FAQ language={language} />
      <ContactForm language={language} />
      <Footer language={language} />
    </div>
  );
}

