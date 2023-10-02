import { Nav, NavItem, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" id="header">
            <Navbar.Brand>BrnCalisario</Navbar.Brand>
            <Nav>                
                <NavItem>
                    <NavLink className="nav-link" to={""}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to={""}>Sobre mim</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header