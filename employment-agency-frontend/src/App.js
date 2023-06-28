import './App.css';

import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import RegisterCandidate from './pages/RegisterCandidate/RegisterCandidate';
import Candidates from './pages/Candidates/Candidates';
import Search from './pages/Search/Search';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={ <Homepage /> } />
				<Route path='/register' element={ <RegisterCandidate /> } />
				<Route path='/candidates' element={ <Candidates /> } />
				<Route path='/search' element={ <Search /> } />
			</Routes>
		</div>
	);
}

export default App;
