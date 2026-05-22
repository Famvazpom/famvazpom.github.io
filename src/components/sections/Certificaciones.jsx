import React, { useContext } from 'react'
import { certifications } from '../../constants'
import { LanguageContext } from '../../context/LanguageContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Certificaciones() {
    const { t } = useContext(LanguageContext);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section id='certificates' className='section-shell bg-primary'>
            <div className='mb-10'>
                <p className='section-kicker'>{t('certifications.kicker')}</p>
                <h1 className="section-title">
                    {t('certifications.title')}
                </h1>
                <h2 className='text-center text-xl font-light text-muted'>
                    {t('certifications.subtitle')}
                </h2>
            </div>
            <div className='mx-auto mb-8 max-w-5xl glass-card p-6 sm:p-10'>
                <Slider {...settings}>

                    {
                        certifications.map((certificacion, index) => <CertificationItem key={`certification-${index}`} certificacion={certificacion} />)
                    }
                </Slider>

            </div>
        </section>
    )
}

function CertificationItem({ certificacion }) {
    const { t } = useContext(LanguageContext);
    return (
        
            <div className='flex flex-col items-center justify-center gap-6 px-4 py-8 text-center'>
                <div className='w-44 rounded-3xl border border-cyber/20 bg-white p-4'>
                    <img className='h-full w-full rounded-2xl object-contain' src={certificacion.image} alt={certificacion.name} />
                </div>
                <div className='max-w-2xl text-lg font-bold text-neutral'>
                    {certificacion.name}
                    <div className='mt-5'>
                        <a className='inline-flex items-center justify-center rounded-2xl border border-emerald-400/50 bg-emerald-500/10 px-5 py-3 font-bold text-emerald-300 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-white' href={certificacion.url} target='_blank' rel='noreferrer'>{t('certifications.credential')}</a>
                    </div>
                </div>
            </div>
        
    )
}

export default Certificaciones
