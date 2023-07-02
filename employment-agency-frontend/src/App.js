import './App.css';

import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import RegisterCandidate from './pages/RegisterCandidate/RegisterCandidate';
import Search from './pages/Search/Search';
import Statistics from './pages/Statistics/Statistics';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={ <Homepage /> } />
				<Route path='/register' element={ <RegisterCandidate /> } />
				<Route path='/statistics' element={ <Statistics /> } />
				<Route path='/search' element={ <Search /> } />
			</Routes>
		</div>
	);
}

export default App;
