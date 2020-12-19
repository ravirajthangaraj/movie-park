import React, { useState, useEffect } from "react";
import axios from "../../services/axios";
import "./GenreRow.css";
import MoviePoster from "../movie-poster/MoviePoster";

function GenreRow({ title, fetchUrl }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchMovies(fetchUrl) {
			const axiosResponse = await axios.get(fetchUrl);
			setMovies(axiosResponse.data.results);
			return axiosResponse;
		}
		fetchMovies(fetchUrl);
	}, [fetchUrl]);
	return (
		<div className="genre__row">
			<h3 className="genre__title">{title}</h3>
			<div className="movies__row">
				{movies?.map((movie, index) => {
					return <MoviePoster key={index} movie={movie} />;
				})}
			</div>
		</div>
	);
}

export default GenreRow;
