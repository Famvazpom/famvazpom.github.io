import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function LanguageToggle() {
    const { language, toggleLanguage } = useContext(LanguageContext);
    const nextLanguage = language === 'en' ? 'ES' : 'EN';

    return (
        <button
            type='button'
            onClick={toggleLanguage}
            className='fixed right-4 top-4 z-[60] rounded-full border border-cyber/50 bg-primary/80 px-4 py-2 text-sm font-black uppercase tracking-widest text-cyber backdrop-blur-xl transition-all duration-300 hover:border-cyber hover:bg-cyber hover:text-white'
            aria-label={`Switch language to ${nextLanguage}`}
        >
            {nextLanguage}
        </button>
    );
}

export default LanguageToggle;
