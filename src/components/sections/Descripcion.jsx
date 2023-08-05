import React from 'react'
import { techs } from '../../constants'
import { HashLink } from 'react-router-hash-link';


function Descripcion() {
  return (
    <section id='about-me' className='px-8 mt-8'>
      <div className='mb-5'>
        <h1 className="text-center text-4xl separator-line">
          Acerca de mi
        </h1>
        <h2 className='text-center text-2xl font-light'>
          Aqui encontraras información acerca de mí, a que me dedico y las tecnologias que conozco.
        </h2>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='sm:w-1/2 p-5 leading-loose text-justify'>
          <p className='mb-2'>Me llamo Noe Vazquez, soy <span className='font-bold'> Desarrolador Backend. </span></p>
          <p className='mb-2'>
            Tengo experiencia en el desarrollo de aplicaciones web,
            he trabajado principalmente con el framework Django, con librerias como Django Rest Framework, HTML, CSS y un JavaScript.
          </p>

          <p>
            En mis tiempos libres suelo estar aprendiendo sobre el desarrollo de videojuegos.
          </p>
          <p>
            Estoy abierto a ofertas laborales en las que pueda contribuir, aprender y mejorar.
          </p>
          <p>
            Si tiene una oferta en que conicida con mis habilidades y experiencia, no dude en <span className='font-bold'> contactarme. </span>
          </p>

          <div className='bg-complementary text-2xl w-fit p-2 mt-2 rounded-md shadow-md hover:shadow-2xl cursor-pointer '>
            <HashLink smooth to="#contact" className='hover:text-neutral' >
              Contacto
            </HashLink>
          </div>
        </div>
        <div className='flex flex-wrap flex-col w-full sm:w-1/2 p-2'>
          <h1 className='text-xl text-center' >
            Tecnologias que conozco.
          </h1>
          <div className='flex flex-wrap'>
            {techs.map((tech, index) => <TechBullet key={`tech-${index}`} tech={tech} />)}
          </div>
          <div className='flex flex-col mt-3'>
            <p>
              <span className='font-bold'>Mi correo: </span> famvazpom@gmail.com
            </p>
            <p>
              <span className='font-bold'>Mi telefono: </span> +52 984 280 0369
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

function TechBullet({ tech }) {
  return (
    <div>
      <div
        className={`flex flex-row h-fit  ${tech.bgcolor} rounded-lg m-2 px-2 items-center hover:shadow-xl cursor-pointer`}
      >
        {<tech.icon className='mr-1' />}
        {tech.name}
      </div>
    </div>
  )
}

export default Descripcion