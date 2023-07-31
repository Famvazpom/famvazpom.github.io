import { createContext } from "react"
import { useState } from "react";
export const SidebarContext = createContext()

export function SidebarContextProvider(props){
    const [isSidebarActive,setSidebar] = useState(true);

    return (
        <SidebarContext.Provider value={{
            isSidebarActive,
            setSidebar
        }}> 
            {props.children}
        </SidebarContext.Provider>
    )
}
