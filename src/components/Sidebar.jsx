import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import { GiCharacter, GiBlackBook, GiSkills, GiConcreteBag, GiComputing, GiMailbox } from 'react-icons/gi'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'




function Sidebar() {
  const { setSidebar, isSidebarActive } = useContext(SidebarContext)
  return (
    <div className={`fixed p-2 top-0 h-screen w-16 flex flex-col z-50 bg-secondary text-white shadow-lg ${isSidebarActive ? 'sidebar-inactive' : 'sidebar-active'} `}
    >
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "url('assets/images/pattern.avif')", opacity: 0.1 }} />
      <Crumbs />
      <SidebarIcon icon={<GiCharacter size="32" />} reference='#about-me' text='Acerca de mi' />
      <SidebarIcon icon={<GiBlackBook size="32" />} reference='#work-experience' text='Experiencia Laboral' />
      <SidebarIcon icon={<GiSkills size="32" />} reference='#certificates' text='Certificaciones' />
      <SidebarIcon icon={<GiConcreteBag size="32" />} reference='#projects' text='Proyectos' />
      <SidebarIcon icon={<GiComputing size="32" />} reference='#programming' text='Lenguajes y Frameworks' />
      <SidebarIcon icon={<GiMailbox size="32" />} reference='#contact' text='Contacto' />
    </div>
  )
}

function Crumbs() {
  const { setSidebar, isSidebarActive } = useContext(SidebarContext)

  return (
    <div className={isSidebarActive ? 'crumbs' : 'crumbs-active'} onClick={() => { setSidebar(!isSidebarActive); console.log(isSidebarActive) }}>
      {isSidebarActive ? (<AiOutlineArrowRight size='25' />) : (<AiOutlineArrowLeft size='25' />)}
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