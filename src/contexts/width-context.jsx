import { createContext, useState} from "react";


export const WidthContext = createContext();

export const WidthProvider = ({children}) => {





    const windowWidth=window.innerWidth;
    const [width, setWidth] = useState(windowWidth)
    return (
        <WidthContext.Provider value={{width, setWidth}}>
        {children}
        </WidthContext.Provider>
    )
}