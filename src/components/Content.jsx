import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import Presentacion from './sections/Presentacion'
import Descripcion from './sections/Descripcion'
import Contacto from './sections/Contacto'
import Placeholder from './sections/Placeholder'
import Experiencia from './sections/Experiencia'


function Content() {
    const { isSidebarActive } = useContext(SidebarContext)

    return (
        <div className='flex flex-col w-screen '>
            <Presentacion />
            <Descripcion/>
            <Experiencia/>
            <Placeholder/>
            <Placeholder/>
            <Placeholder/>
        </div>
    )
}

export default Content