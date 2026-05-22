import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";


function Contacto() {
  const { t } = useContext(LanguageContext);

  return (

    <section id="contact" className="section-shell pattern" >
      <div className='mb-8'>
        <p className='section-kicker'>{t('contact.kicker')}</p>
        <h1 className="section-title">
          {t('contact.title')}
        </h1>
      </div>
      <div className='mx-auto max-w-3xl'>
        <div className='glass-card p-8 text-center'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyber'>{t('contact.available')}</p>
          <h2 className='mt-4 text-3xl font-black'>{t('contact.mission')}</h2>
          <p className='mt-5 leading-8 text-muted'>
            {t('contact.description')}
          </p>
          <a
            href='mailto:famvazpom@gmail.com'
            className='danger-button mx-auto mt-8 w-fit'
          >
            {t('contact.emailButton')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacto
