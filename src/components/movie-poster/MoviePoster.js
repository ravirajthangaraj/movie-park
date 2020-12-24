import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ConfigContext } from "../../App";
import noPoster from "../../assets/poster_not_available.png";
import "./MoviePoster.css";

function MoviePoster({ movie }) {
	const appConfig = useContext(ConfigContext).appConfig;
	const imageUrl =
		appConfig?.images?.secure_base_url + appConfig?.images?.poster_sizes[2];

	console.log(movie);

	return (
		<div className="movie__poster__card" data-id={movie?.title}>
			<Link
				to={{
					pathname:
						movie?.title !== undefined
							? "/movie/" + movie.title
							: "/movie/" + movie?.id,
					state: { movieId: movie?.id },
				}}
			>
				<div className="movie__poster__info">
					<img
						src={imageUrl + movie?.poster_path}
						alt={
							movie?.title !== undefined
								? movie?.title
								: movie?.name
						}
						onError={(e) => {
							e.target.src = `${noPoster}`;
						}}
						title={
							movie?.title !== undefined
								? movie?.title
								: movie?.name
						}
					/>
					{movie?.poster_path === null ? (
						<div className="poster__not__available__meta">
							{movie?.title !== undefined
								? movie?.title
								: movie?.name}
						</div>
					) : (
						""
					)}
				</div>
			</Link>
		</div>
	);
}

export default MoviePoster;
