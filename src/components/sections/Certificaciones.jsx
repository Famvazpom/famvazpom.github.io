import React from 'react'
import { certifications } from '../../constants'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Certificaciones() {
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
                <p className='section-kicker'>Unlocked badges</p>
                <h1 className="section-title">
                    Certifications and Completion Badges
                </h1>
                <h2 className='text-center text-xl font-light text-muted'>
                    Certifications and Badges I have obtained so far.
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
    return (
        
            <div className='flex flex-col items-center justify-center gap-6 px-4 py-8 text-center'>
                <div className='w-44 rounded-3xl border border-cyber/20 bg-white p-4 shadow-glow'>
                    <img className='h-full w-full rounded-2xl object-contain' src={certificacion.image} alt={certificacion.name} />
                </div>
                <div className='max-w-2xl text-lg font-bold text-neutral'>
                    {certificacion.name}
                    <div className='mt-5'>
                        <a className='glow-button' href={certificacion.url} target='_blank' rel='noreferrer'>View credential</a>
                    </div>
                </div>
            </div>
        
    )
}

export default Certificaciones
