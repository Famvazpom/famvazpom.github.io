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
        <h2 className='text-center text-2xl font-light'>
        Here you will find information about me, what I do, and the technologies I know.
        </h2>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='sm:w-1/2 p-5 leading-loose text-justify'>
          <p className='mb-2'>With three years of experience, I am skilled in Typescript, C#, Python and Django as a <span className='font-bold'> Fullstack Developer. </span></p>
          <p className='mb-2'>
            My skillset includes <strong>self-education, critical thinking</strong>, and the ability to lead small teams.
          </p>
          <p className='mb-2'>
            I've primarily worked with the Django framework, React and NestJs, along with Django Rest Framework, HTML, CSS, etc.
          </p>

          <p>
            In my free time, I usually focus on learning about video game development.
          </p>
          <p>
          I am open to job opportunities where I can contribute, learn, and improve.
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
              <Link to="/Noe Vazquez.pdf" target="_blank" download className='hover:text-neutral m-2' >
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