import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ThemeProvider from './providers/ThemeContextProvider';

function App() {
	return (
		<ThemeProvider>
			<div className="App">
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
