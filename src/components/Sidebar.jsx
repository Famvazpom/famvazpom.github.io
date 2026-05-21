import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import { LanguageContext } from '../context/LanguageContext'
import { GiCharacter, GiBlackBook, GiSkills, GiConcreteBag, GiMailbox } from 'react-icons/gi'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { HashLink } from 'react-router-hash-link';



function Sidebar() {
  const { setSidebar, isSidebarActive } = useContext(SidebarContext)
  const { t } = useContext(LanguageContext)
  return (
    <div className={`fixed p-2 top-0 h-screen w-16 flex flex-col z-50 border-r border-cyber/20 bg-primary/70 text-white shadow-glow backdrop-blur-xl transition-all duration-300 ${isSidebarActive ? 'sidebar-inactive' : 'sidebar-active'} `}
    >
      <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-30" />
      <div className="relative mb-4 mt-2 h-10 rounded-2xl border border-cyber/30 bg-cyber/10 shadow-glow" />
      <Crumbs />
      <SidebarIcon icon={<GiCharacter size="32" />} reference='#about-me' text={t('sidebar.about')} />
      <SidebarIcon icon={<GiBlackBook size="32" />} reference='#work-experience' text={t('sidebar.experience')} />
      <SidebarIcon icon={<GiSkills size="32" />} reference='#certificates' text={t('sidebar.certificates')} />
      <SidebarIcon icon={<GiConcreteBag size="32" />} reference='#projects' text={t('sidebar.projects')} />
      <SidebarIcon icon={<GiMailbox size="32" />} reference='#contact' text={t('sidebar.contact')} />
    </div>
  )
}

function Crumbs() {
  const { setSidebar, isSidebarActive } = useContext(SidebarContext)

  return (
    <div className={isSidebarActive ? 'crumbs' : 'crumbs-active'} onClick={() => { setSidebar(!isSidebarActive) }}>
      {isSidebarActive ? (<AiOutlineArrowRight size='25' />) : (<AiOutlineArrowLeft size='25' />)}
    </div >
  )
}


function SidebarIcon({ icon, reference, text }) {
  return (
    <HashLink smooth to={reference}>
      <div className='sidebar-icon group' href={reference}>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
          {text}
        </span>
      </div>
    </HashLink>
  )
}

export default Sidebar
