import MovieList from './components/MovieList';
import AddMovies from './components/AddMovies';
import { MovieProvider } from './context/MovieContext';

function App() {
	return (
		<MovieProvider>
			<div>
				<AddMovies />
				<MovieList />
			</div>
		</MovieProvider>
	);
}

export default App;
