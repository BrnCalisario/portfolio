import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './index.scss';

function Home() {
	return (
		<div id='home'>
			<div id='brand'>
				<div className='wrap-links'>
					<h1>BrnCalisario</h1>
					<div className='links d-flex gap-4'>
						<FaGithub />
						<FaLinkedin />
					</div>
				</div>
				<p>Software Developer</p>
			</div>
		</div>
	);
}

export default Home;
