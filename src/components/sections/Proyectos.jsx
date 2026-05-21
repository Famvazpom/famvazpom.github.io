import React from 'react'
import { projects } from '../../constants'
import { CompanyTech } from './Experiencia'
import { motion } from 'framer-motion';


function Proyectos() {
  return (
    <section id="projects" className='section-shell flex flex-col pattern'>
      <div className='mb-10'>
        <p className='section-kicker'>Build archive</p>
        <h1 className="section-title">
          Projects
        </h1>
        <h2 className='text-center text-xl font-light text-muted'>
          Some of my projects.
        </h2>
      </div>
      <div className='mx-auto flex max-w-7xl flex-col gap-10'>
        {
          projects.map((project, index) => <ProjectCard key={`project-${index}`} project={project} id={index} />)
        }
      </div>
    </section>
  )
}

function ProjectCard({ project,id }) {
  return (

    <motion.div
      initial={{ x: id%2 == 0? "100%" : "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
      className=''
    >
      <div className='glass-card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyber/40 hover:shadow-glow md:flex-row'>

        <div className='relative min-h-[240px] overflow-hidden bg-primary md:w-5/12'>
          <div className='absolute inset-0 bg-gradient-to-br from-cyber/20 via-transparent to-secondary/20 opacity-80' />
          <img className='relative h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105' src={project.image} alt={project.name} />
        </div>
        <div className='flex flex-col md:w-7/12 md:flex-row'>
          <div className='flex h-full flex-col p-6 md:w-11/12 lg:p-8'>
            <h2 className='text-left text-3xl font-black text-neutral separator-line-project' >{project.name}</h2>
            <div className='flex-grow overflow-y-auto text-muted'>
              <ProjectSpecs project={project} />
            </div>
            <div className='mt-6 flex flex-wrap gap-2'>
              {
                project.techs.map((tech, index) => <CompanyTech key={`project-tech-${index}`} tech={tech} />)
              }
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-3 border-t border-white/10 p-4 md:w-32 md:flex-col md:flex-nowrap md:border-l md:border-t-0 lg:w-40'>
            {
              project.links.map((link, index) => <ProjectLinks key={`project-link-${index}`} link={link} />)
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectLinks({ link }) {
  return (
    <a href={link.link} target='_blank' rel='noreferrer' className='flex min-w-24 flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-cyber transition-all duration-300 hover:border-cyber/60 hover:bg-cyber hover:text-primary hover:shadow-glow md:w-full'>
      {<link.icon size='32' />}
      <span className='mt-2 whitespace-nowrap text-center text-[10px] font-bold uppercase tracking-widest'>{link.name}</span>
    </a >
  )
}
function ProjectSpecs({ project }) {
  if(project.specs)
    return (
    <div className='p-2 leading-8'>
        <span className='font-bold text-cyber'>{project.rol}</span> <br/>
        {project.descripcion}
        <ul className='ml-5 mt-4 list-disc space-y-2'>
          {
            project.specs.map((spec, index) => <ProjectSpec key={`project-spec-${index}`} spec={spec} />)
          }
        </ul>
    </div>
    )
  return (
    <div className='p-2 leading-8'>
        <span className='font-bold text-cyber'>{project.rol}</span> <br/>
        {project.descripcion}
    </div>
  )
}

function ProjectSpec({spec})
{
  return(
    <li className='pl-1 text-justify tracking-wider text-muted'>
      {spec}
    </li>
  )
}

export default Proyectos
