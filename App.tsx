import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Partners from './components/Partners';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-text selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Timeline />
        <Partners />
        <Contact />
      </main>
      
      {/* Floating Action Button for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <a 
          href="https://t.me/H688888" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-brand-red text-white rounded-full shadow-lg shadow-red-900/50 hover:scale-110 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </a>
      </div>
    </div>
  );
};

export default App;
