import React from 'react'
import { projects } from '../../constants'
import { CompanyTech } from './Experiencia'
import { motion } from 'framer-motion';


function Proyectos() {
  return (
    <div id="projects" className='flex flex-col pattern'>
      <div className='mb-5'>
        <h1 className="text-center text-4xl separator-line">
          Project
        </h1>
        <h2 className='text-center text-2xl font-light'>
          Some of my projects.
        </h2>
      </div>
      <div className='flex flex-col p-8'>
        {
          projects.map((project, index) => <ProjectCard key={`project-${index}`} project={project} id={index} />)
        }
      </div>
    </div>
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
      <div className='flex flex-col md:flex-row bg-gradient-to-t from-transparent to-par rounded-xl'>

        <div className='md:w-5/12'>
          <img className='w-full h-full p-2 m-2 object-contain rounded-3xl' src={project.image} />
        </div>
        <div className='flex flex-col md:flex-row md:w-7/12'>
          <div className='flex flex-col w-11/12 p-4 justify-between'>
            <h1 className='text-2xl text-left separator-line-project' >{project.name}</h1>
            <div className='flex-grow'></div>
            <div className='bottom-0 flex flex-wrap'>
              <ProjectSpecs project={project} /> 
            </div>
            <div className='bottom-0 flex flex-wrap'>
              {
                project.techs.map((tech, index) => <CompanyTech key={`project-tech-${index}`} tech={tech} />)
              }
            </div>
          </div>
          <div className='flex flex-row md:flex-col md:p-1 w-1/12 justify-between md:justify-around'>
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
    <a href={link.link} target='_blank' className='p-2 mt-2'>
      {<link.icon size='40' />}
      <span className='text-xs text-center'>{link.name}</span>
    </a >
  )
}
function ProjectSpecs({ project }) {
  if(project.specs)
    return (
   <div className='p-2'>
        {project.rol} <br/>
        {project.descripcion}
        <ul className='list-disc ml-5 space-y-2'>
          {
            project.specs.map((spec, index) => <ProjectSpec key={`project-spec-${index}`} spec={spec} />)
          }
        </ul>
    </div>
    )
  return (
    <div className='p-2'>
        {project.rol} <br/>
        {project.descripcion}
    </div>
  )
}

function ProjectSpec({spec})
{
  return(
    <li className='text-white-100 text-justify pl-1 tracking-wider'>
      {spec}
    </li>
  )
}

export default Proyectos