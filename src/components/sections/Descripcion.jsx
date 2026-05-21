import React from 'react'
import { techs } from '../../constants'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';



function Descripcion() {
  return (
    <section id='about-me' className='section-shell bg-primary'>
      <div className='mb-12'>
        <p className='section-kicker'>Player profile</p>
        <h1 className="section-title">
          About Me
        </h1>
      </div>
      <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='glass-card p-6 leading-loose text-muted sm:p-8'>
          <p className='mb-5 text-lg text-neutral'>
            I’m a Software Engineer and Tech Lead with solid experience in software architecture, microservices, AI/LLM integration, and full-stack development. Over the years, I’ve worked on designing and building scalable, cloud-based solutions that are reliable, maintainable, and aligned with real business needs.
          </p>

          <p className='mb-5'>
            I enjoy working across the entire stack, from backend services and system architecture to frontend applications and integrations. I’m especially motivated by optimizing end-to-end systems, improving performance, and turning complex technical challenges into clean, well-structured solutions that teams can easily evolve over time.
          </p>

          <p className='mb-5'>
            Beyond my professional work, I’m deeply passionate about game development and continuous learning. I’m always exploring new technologies, tools, and ideas, driven by curiosity and the desire to keep improving both my technical skills and the quality of the products I build.
          </p>
          <p>
          If you have an offer that aligns with my skills and experience, please do not hesitate to <span className='font-bold'>
              <HashLink smooth to="#contact" className='text-cyber hover:text-neutral' >
                Get in touch. 
              </HashLink>
            </span>
          </p>
          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <div>
              <HashLink smooth to="#contact" className='danger-button' >
                Contact
              </HashLink>
            </div>
            <div>
              <Link to="https://drive.google.com/file/d/1D0GfzlTJxpNX0ksoFJZwpYyRptDBQkbz/view?usp=sharing" target="_blank" download className='glow-button' >
                Download resume
              </Link>
            </div>
          </div>
        </div>
        <div className='glass-card flex flex-col p-6 sm:p-8'>
          <h2 className='text-2xl font-black text-neutral' >
            Known Tech Stack
          </h2>
          <p className='mt-2 text-muted'>Tools and languages I use to ship production systems.</p>
          <div className='mt-6 flex flex-wrap gap-3'>
            {techs.map((tech, index) => <TechBullet key={`tech-${index}`} tech={tech} />)}
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
        className={`tech-pill ${tech.bgcolor}`}
      >
        {<tech.icon className='mr-1' />}
        {tech.name}
      </div>
    </div>
  )
}

export default Descripcion
