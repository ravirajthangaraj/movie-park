import React, { useContext } from "react";
import { ConfigContext } from "../../App";
import "./MoviePoster.css";

function MoviePoster({ movie }) {
	const appConfig = useContext(ConfigContext).appConfig;

	const imageUrl =
		appConfig?.images?.secure_base_url + appConfig?.images?.poster_sizes[2];

	return (
		<div className="movie__poster__card">
			<div className="movie__poster__info">
				<img src={imageUrl + movie?.poster_path} alt={movie?.title} />
			</div>
		</div>
	);
}

export default MoviePoster;
