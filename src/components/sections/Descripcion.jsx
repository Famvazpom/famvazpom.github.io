import React from 'react'
import { techs } from '../../constants'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';



function Descripcion() {
  return (
    <section id='about-me' className='px-8 mt-8'>
      <div className='mb-5'>
        <h1 className="text-center text-4xl separator-line">
          About Me
        </h1>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='sm:w-1/2 p-5 leading-loose text-justify'>
          <p className='mb-2'></p><p>
            I’m a Software Engineer and Tech Lead with solid experience in software architecture, microservices, AI/LLM integration, and full-stack development. Over the years, I’ve worked on designing and building scalable, cloud-based solutions that are reliable, maintainable, and aligned with real business needs.
          </p>

          <p>
            I enjoy working across the entire stack, from backend services and system architecture to frontend applications and integrations. I’m especially motivated by optimizing end-to-end systems, improving performance, and turning complex technical challenges into clean, well-structured solutions that teams can easily evolve over time.
          </p>

          <p>
            Beyond my professional work, I’m deeply passionate about game development and continuous learning. I’m always exploring new technologies, tools, and ideas, driven by curiosity and the desire to keep improving both my technical skills and the quality of the products I build.
          </p>
          <p>
          If you have an offer that aligns with my skills and experience, please do not hesitate to <span className='font-bold'>
              <HashLink smooth to="#contact" className='hover:text-neutral' >
                Get in touch. 
              </HashLink>
            </span>
          </p>
          <div className='flex flex-row'>
            <div className='bg-complementary text-2xl w-fit p-2 mt-2 mx-2 rounded-md shadow-md hover:shadow-2xl cursor-pointer '>
              <HashLink smooth to="#contact" className='hover:text-neutral' >
                Contact
              </HashLink>
            </div>
            <div className='bg-complementary text-2xl w-fit p-2 mt-2 mx-2 rounded-md shadow-md hover:shadow-2xl cursor-pointer '>
              <Link to="https://drive.google.com/file/d/1D0GfzlTJxpNX0ksoFJZwpYyRptDBQkbz/view?usp=sharing" target="_blank" download className='hover:text-neutral m-2' >
                Download my resume.
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap flex-col w-full sm:w-1/2 p-2'>
          <h1 className='text-xl text-center' >
            Known techs.
          </h1>
          <div className='flex flex-wrap'>
            {techs.map((tech, index) => <TechBullet key={`tech-${index}`} tech={tech} />)}
          </div>
          <div className='flex flex-col mt-3 text-justify'>
            <p>
              <span className='font-bold'>E-mail: </span> famvazpom@gmail.com
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