import { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const AddMovies = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [movies, setMovies] = useContext(MovieContext);

	const addMovies = (e) => {
		e.preventDefault();
		const newId = Math.floor(Math.random() * 10000) + 1;
		setMovies((prevMovies) => [
			...movies,
			{ name: name, price: price, id: newId },
		]);

		setName('');
		setPrice('');
	};

	return (
		<form onSubmit={addMovies}>
			<input
				type='text'
				placeholder='movie name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type='number'
				placeholder='movie price'
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>
			<button type='submit'>Add</button>
		</form>
	);
};

export default AddMovies;
