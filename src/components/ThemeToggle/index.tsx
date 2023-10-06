import "./style.scss"

import { Button } from 'react-bootstrap'

import { FaSun, FaRegMoon } from "react-icons/fa";
import { useThemeContext } from '../../contexts/ThemeContext';

function ThemeToggle() {
    
    const  { theme, toggleTheme, isDark } = useThemeContext()

    return (
        <button id="btn" className={ isDark ? 'light' : 'dark' } onClick={toggleTheme}>
            { isDark ? <FaSun /> : <FaRegMoon /> } 
        </button>
    )
}

export default ThemeToggle