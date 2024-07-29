import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { socials,words } from '../../constants';

function Presentacion() {
    const [displayedText, setDisplayedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [isClearing, setIsClearing] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        let timeoutId;
        console.log({isTyping,isClearing,currentWordIndex});
        if (isTyping) {
          // Typing effect
          let index = 0;
          timeoutId = setInterval(() => {
            setDisplayedText(currentWord.substring(0, index + 1));
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
            setDisplayedText(currentWord.substring(0, index - 1));
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
      }, [isTyping, isClearing, currentWordIndex]);




    return (
        <section>
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
                            <p className='text-8xl' >HI! I'M NOE </p>
                            <p className='text-5xl'>
                                {displayedText}
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
                        <img className='w-full h-full p-2 rounded-full' src='assets/images/profile.png' />
                    </motion.div>
                </div>
            </div>
            <div className='hidden md:flex md:flex-col absolute right-0 top-[30%] bg-secondary rounded-l-xl'>
                {
                    socials.map((social,index) => <SocialButtons key={`social-${index}`} social={social}/>)
                }
            </div>

        </section>
    )
}

function SocialButtons({social})
{
    return (
        <a className='flex bg-secondary group' href={social.url} target='_blank'>
            {<social.icon size={50} />}
            <span className='social-tooltip group-hover:scale-100'>
                {social.text}
            </span>
        </a>

    );
}

export default Presentacion