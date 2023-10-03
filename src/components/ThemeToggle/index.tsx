import { Button } from 'react-bootstrap'

import { FaSun, FaRegMoon } from "react-icons/fa";
import { useThemeContext } from '../../contexts/ThemeContext';

function ThemeToggle() {
    
    const  { theme, toggleTheme, isDark } = useThemeContext()

    return (
        <Button variant={ isDark() ? 'light' : 'dark' } onClick={toggleTheme}>
            { isDark() ? <FaSun /> : <FaRegMoon /> } 
        </Button>
    )
}

export default ThemeToggle