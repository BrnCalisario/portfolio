import { Nav, NavItem, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../../contexts/ThemeContext';
import ThemeToggle from '../ThemeToggle';

import './style.scss';

function Header() {
	const { theme } = useThemeContext();

	return (
		<Navbar expand='lg' className='bg-body-tertiary' id='header'>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='me-auto'>
					{/* <NavItem>
						<NavLink className='nav-link' to={''}>
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='nav-link' to={''}>
							Sobre mim
						</NavLink>
					</NavItem> */}
				</Nav>
				{/* <Nav>
					<ThemeToggle />
				</Nav> */}
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
