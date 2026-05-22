import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';

function Presentacion() {
    const { t, language } = useContext(LanguageContext);
    const words = t('hero.words');
    const [displayedText, setDisplayedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [isClearing, setIsClearing] = useState(false);

    const displayString = (text)=> {
        if(text.length == 0) {
            return ' '.repeat(text.length);
        }
        return text
    }

    useEffect(() => {
        setDisplayedText('');
        setCurrentWordIndex(0);
        setIsTyping(true);
        setIsClearing(false);
    }, [language]);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        let timeoutId;
        if (isTyping) {
          // Typing effect
          let index = 0;
          timeoutId = setInterval(() => {
            setDisplayedText(displayString(currentWord.substring(0, index + 1)));
            index += 1;
            if (index >= currentWord.length) {
              clearInterval(timeoutId);
              setIsTyping(false);
            }
          }, 150); // Adjust typing speed here
        } else if (isClearing) {
          // Clearing effect
          let index = currentWord.length;
          timeoutId = setInterval(() => {
            setDisplayedText(displayString(currentWord.substring(0, index - 1)));
            index -= 1;
            if (index <= 0) {
              clearInterval(timeoutId);
              setIsClearing(false);
              setIsTyping(true);
              // Move to the next word
              setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
          }, 100); // Adjust clearing speed here
        }else {
            setTimeout(() => {
                setIsClearing(true);
              }, 2000);
        }
    
        return () => clearInterval(timeoutId); // Clean up interval on component unmount
      }, [isTyping, isClearing, currentWordIndex, words]);




    return (
        <section className='relative min-h-screen overflow-hidden bg-primary'>
            <div className='absolute inset-0 bg-cover bg-center opacity-30' style={{ backgroundImage: "url('assets/images/overlay-bg.jpg')"}} />
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className='relative flex min-h-screen w-screen flex-col items-center justify-center gap-10 px-8 py-24 sm:flex-row lg:px-20'>
                <div className="flex w-full justify-center sm:w-7/12 sm:justify-start">
                    <div className='max-w-4xl text-center sm:text-left'>
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 1 }}
                            className='glass-card p-6 sm:p-10'
                        >
                            <p className='mb-4 text-sm font-bold uppercase tracking-[0.45em] text-cyber'>Software Engineer/ AI Engineer / Tech Lead</p>
                            <h1 className='text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl'>
                                {t('hero.greeting')} <span className='text-secondary'>NOE</span>
                            </h1>
                            <p className='mt-5 min-h-[3.5rem] text-3xl font-bold text-neutral sm:text-5xl'>
                                {displayedText}
                            </p>
                            <p className='mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg'>
                                {t('hero.description')}
                            </p>
                            <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:justify-start'>
                                <HashLink smooth to='#projects' className='danger-button'>{t('hero.projects')}</HashLink>
                                <HashLink smooth to='#contact' className='inline-flex items-center justify-center rounded-2xl border border-emerald-400/50 bg-emerald-500/10 px-5 py-3 font-bold text-emerald-300 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-white'>{t('hero.contact')}</HashLink>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center sm:w-5/12">
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 1 }}
                        className='relative'
                    >
                        <div className='relative rounded-full border border-cyber/40 bg-white/10 p-3 backdrop-blur-xl'>
                            <img className='h-72 w-72 rounded-full object-cover sm:h-96 sm:w-96' src='assets/images/profile.png' alt='Noe Vazquez profile' />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-cyber/30 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyber backdrop-blur md:block'>
                {t('hero.scroll')}
            </div>
        </section>
    )
}

export default Presentacion
