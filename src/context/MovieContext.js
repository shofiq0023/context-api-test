import { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
	const [movies, setMovies] = useState([
		{
			name: 'Harry Potter',
			price: 10,
			id: 456812,
		},
		{
			name: 'Game of thrones',
			price: 40,
			id: 865482,
		},
		{
			name: 'Life of pi',
			price: 20,
			id: 458634,
		},
	]);

	return (
		<MovieContext.Provider value={[movies, setMovies]}>
			{props.children}
		</MovieContext.Provider>
	);
};
