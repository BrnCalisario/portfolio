import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './index.scss';
import { Nav } from 'react-bootstrap';

function Home() {
	return (
		<div id='home'>
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
	);
}

export default Home;
