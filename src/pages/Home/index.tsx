import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './index.scss';
import { Nav } from 'react-bootstrap';
import About from '../About';
import FloatingNavbar from '../../components/FloatingNavbar';
import ProjectsPage from '../Projects';

function Home() {
	return (
		<>
			<div id='home'>
				<FloatingNavbar />
				<div id='sidenav'>
					<h4 className='selected'>Home</h4>
					<h4>Sobre mim</h4>
					<h4>Projetos</h4>
					<h4>Contato</h4>
				</div>

				<div id='brand'>
					<div className='wrap-links'>
						<h1>BrnCalisario</h1>
						<div className='links d-flex gap-4'>
							<Nav.Link
								href='https://github.com/BrnCalisario'
								target='_blank'
							>
								<FaGithub />
							</Nav.Link>
							<Nav.Link
								href='https://www.linkedin.com/in/bruno-calisario/'
								target='_blank'
							>
								<FaLinkedin />
							</Nav.Link>
						</div>
					</div>
					<p>Software Developer</p>
				</div>
			</div>
			<About />
			<ProjectsPage />
		</>
	);
}

export default Home;
