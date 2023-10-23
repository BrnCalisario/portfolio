import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import './App.scss';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

import { Container } from 'react-bootstrap';

function App() {
	return (
		<div className='App'>
			{/* <Header /> */}
			<Container id='content'>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
