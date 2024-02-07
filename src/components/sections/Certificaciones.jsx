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
        <section id='certificates' className='px-8 mt-8'>
            <div className='mb-5'>
                <h1 className="text-center text-4xl separator-line">
                    Certifications and Completion Badges
                </h1>
                <h2 className='text-center text-2xl font-light'>
                    Certifications and Badges I have obtained so far.
                </h2>
            </div>
            <div className='mb-8'>
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
        
            <div className='flex flex-row sm:flex-col items-center object-center justify-center'>
                <div className='sm:w-1/6'>
                    <img className='w-full h-full p-2 rounded-md object-contain' src={certificacion.image} />
                </div>
                <div className='text-center'>
                    {certificacion.name} - Link to <a className='bg-complementary w-fit p-1 rounded-md shadow-md hover:shadow-2xl cursor-pointer ' href={certificacion.url} target='_blank' >prove</a>
                </div>
            </div>
        
    )
}

export default Certificaciones