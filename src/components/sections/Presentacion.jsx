import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

function Presentacion() {
    const words = ["Backend Developer", "Django", 'Python', 'GameDev', 'Ingeniero en Datos'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');
    const [letterIndex, setLetterIndex] = useState(0);
    const [showingWord, setShowingWord] = useState(true);

    useEffect(() => {
        setCurrentWord(words[currentIndex]);
        setLetterIndex(0);
        setShowingWord(true);
    }, [currentIndex]);

    useEffect(() => {
        let interval;

        if (showingWord) {
            if (letterIndex < currentWord.length) {
                interval = setInterval(() => {
                    setLetterIndex((prevIndex) => prevIndex + 1);
                }, 100); // Ajusta el tiempo de intervalo según la velocidad deseada de escritura
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setShowingWord(false);
                }, 2000); // Tiempo de espera para mostrar la palabra completa (2 segundos en este caso)
            }
        } else {
            if (letterIndex > 0) {
                interval = setInterval(() => {
                    setLetterIndex((prevIndex) => prevIndex - 1);
                }, 100); // Ajusta el tiempo de intervalo según la velocidad deseada de borrado
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
                }, 1000); // Tiempo de espera para pasar a la siguiente palabra (1 segundo en este caso)
            }
        }

        return () => clearInterval(interval);
    }, [letterIndex, currentWord, showingWord, words, currentIndex]);




    return (
        <>
            <div className='flex flex-col sm:flex-row w-screen h-screen bg-cover bg-center relative' style={{ backgroundImage: "url('assets/images/overlay-bg.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="flex w-full sm:w-4/6 justify-center items-center">
                    <div className='p-3 sm:p-0 text-center'>
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 1 }}
                            className=''
                        >
                            <span className='text-8xl' >¡HOLA! SOY NOE </span>
                            <p className='text-5xl'>
                                {currentWord.slice(0, letterIndex)}
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="sm:w-2/6 flex items-center">
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 1 }}
                        className=''
                    >
                        <img className='w-full h-full p-2 object-contain' src='assets/images/profile.png' />
                    </motion.div>
                </div>
            </div>

        </>
    )
}

export default Presentacion