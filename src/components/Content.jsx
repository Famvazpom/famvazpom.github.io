import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import Presentacion from './sections/Presentacion'
import Descripcion from './sections/Descripcion'
import Contacto from './sections/Contacto'
import Experiencia from './sections/Experiencia'
import Proyectos from './sections/Proyectos'
import Certificaciones from './sections/Certificaciones'


function Content() {
    const { isSidebarActive } = useContext(SidebarContext)

    return (
        <div className='flex flex-col w-screen '>
            <Presentacion />
            <Descripcion/>
            <Experiencia/>
            <Certificaciones/>
            <Proyectos/>
            <Contacto/>
        </div>
    )
}

export default Content