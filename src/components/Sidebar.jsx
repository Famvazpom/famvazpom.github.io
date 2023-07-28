import React, {useState,useEffect} from 'react'
import {GiCharacter,GiBlackBook,GiSkills,GiConcreteBag,GiComputing,GiMailbox} from 'react-icons/gi'
import {AiOutlineArrowLeft} from 'react-icons/ai'

function Sidebar() {
  const [isSidebarActive,setSidebar] = useState(false);
  return (
    <div className='fixed p-2 top-0 left-0 h-screen w-16 flex flex-col bg-secondary text-white shadow-lg'>
      <Crumbs />
      <SidebarIcon icon={<GiCharacter size="32" />} reference='#about-me' text='Acerca de mi'/>
      <SidebarIcon icon={<GiBlackBook size="32" />} reference='#work-experience' text='Experiencia Laboral'/>
      <SidebarIcon icon={<GiSkills size="32" />} reference='#certificates' text='Certificaciones'/>
      <SidebarIcon icon={<GiConcreteBag size="32" />} reference='#projects' text='Proyectos'/>
      <SidebarIcon icon={<GiComputing size="32" />} reference='#programming' text='Lenguajes y Frameworks'/>
      <SidebarIcon icon={<GiMailbox size="32" />} reference='#contact' text='Contacto'/>
      </div>
  )
}

function Crumbs()
{
  return (
  <div className='crumbs-active'>
    <AiOutlineArrowLeft size='25'/>
  </div >
  )
}


function SidebarIcon({ icon, reference, text }) {
  return (
    <div className='sidebar-icon group' href={reference}>
      {icon}
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
    </div>
  )
}

export default Sidebar