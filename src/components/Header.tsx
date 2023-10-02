import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header>
            <ul>
                <li><NavLink to={""}>Home</NavLink></li>
                <li><NavLink to={""}>Sobre mim</NavLink></li>
                <li><NavLink to={""}>Contato</NavLink></li>
                
            </ul>
        </header>
    )
}

export default Header