import React, { createContext, useEffect, useMemo, useState } from 'react';
import translations from '../constants/translations';

const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGES = ['en', 'es'];

const LanguageContext = createContext({
    language: DEFAULT_LANGUAGE,
    toggleLanguage: () => {},
    t: (key) => key,
});

function getInitialLanguage() {
    const storedLanguage = localStorage.getItem('portfolio-language');
    return SUPPORTED_LANGUAGES.includes(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
}

function getTranslation(language, key) {
    return key.split('.').reduce((value, segment) => value?.[segment], translations[language]) ?? key;
}

function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState(getInitialLanguage);

    useEffect(() => {
        localStorage.setItem('portfolio-language', language);
        document.documentElement.lang = language;
    }, [language]);

    const value = useMemo(() => ({
        language,
        setLanguage,
        toggleLanguage: () => setLanguage((currentLanguage) => currentLanguage === 'en' ? 'es' : 'en'),
        t: (key) => getTranslation(language, key),
    }), [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export { LanguageContext, LanguageContextProvider };
