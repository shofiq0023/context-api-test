import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Movie = () => {
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<div>
			{movies ? (
				movies.map((movie) => (
					<div key={movie.id}>
						<h3>{movie.name}</h3>
						<p>${movie.price}</p>
					</div>
				))
			) : (
				<h3>No Movies</h3>
			)}
		</div>
	);
};

export default Movie;
