import { useEffect, useState } from "react"
import ThemeContext from "../contexts/ThemeContext"
import ThemeData, { Theme } from "../models/ThemeData"
import ProviderProps from "../models/ProviderProps"

const ThemeProvider = ({ children } : ProviderProps) => {
    const [theme, setTheme] = useState<Theme>('light')

    const isDark = (parameterTheme? : Theme) =>  {
        let t = parameterTheme ? parameterTheme : theme
        return t === 'dark'
    }

    useEffect(() => {
        const prevTheme = sessionStorage.getItem('theme') as Theme
        
        if(!prevTheme)
            return
        
        setTheme(prevTheme)
        
    }, [])

    const toggleTheme = () => {
        
        let tm = isDark(theme) ? 'light' : 'dark'
    
        sessionStorage.setItem('theme', tm)
        setTheme(tm as Theme)
    }

    const value : ThemeData = {
        theme, 
        toggleTheme,
        isDark
    }

    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider