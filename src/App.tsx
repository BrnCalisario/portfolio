import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import { useThemeContext } from './contexts/ThemeContext';
import { Container } from 'react-bootstrap';

function App() {

	const { theme } = useThemeContext();

	return (
		<div className="App">
			<Header />
			<Container>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
