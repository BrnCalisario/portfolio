import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header';
import ThemeProvider from './providers/ThemeContextProvider';

function App() {
	return (
		<ThemeProvider>
			<div className="App">
				<Header />
			</div>
		</ThemeProvider>
	);
}

export default App;
