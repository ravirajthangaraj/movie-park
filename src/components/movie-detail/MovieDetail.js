import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "../../services/axios";
import requests from "../../services/requests";
import MovieImage from "../movie-image/MovieImage";
import RelatedMovies from "../related-movies/RelatedMovies";
import "./MovieDetail.css";

function MovieDetail(props) {
	const [movie, setMovie] = useState({});
	let movieId = props.location.state.movieId;
	const requestUrl = requests.fetchMovie.replace("__MOVIEID__", movieId);
	useEffect(() => {
		async function fetchMovie() {
			const axiosResponse = await axios.get(requestUrl);
			setMovie(axiosResponse.data);
			console.log(axiosResponse);
			return axiosResponse;
		}
		fetchMovie();
	}, [requestUrl]);
	return (
		<div className="movie__details">
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4} md={3}>
					<MovieImage
						type="poster"
						imagePath={movie?.poster_path}
						imageAlt={movie?.title}
						sizeIndex={4}
						styles={{ width: 100 + "%" }}
					/>
				</Grid>
				<Grid item xs={12} sm={8} md={9}>
					<div className="movie__info">
						<h4 className="movie__title">{movie?.title}</h4>
						<p className="genres">
							<span className="bold">Genres : </span>
							<span>
								{movie?.genres
									?.map((genre, index) => genre.name)
									.join(", ")}
							</span>
						</p>
						<p>
							<span className="bold">Languages : </span>
							<span>
								{movie?.spoken_languages
									?.map((language, index) => {
										return language.name;
									})
									.join(", ")}
							</span>
						</p>
						<p>
							<span className="bold">Cast : </span>
							<span>
								{movie?.credits?.cast
									.map((cast, index) => {
										return cast.name;
									})
									.join(", ")}
							</span>
						</p>
					</div>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					{movie?.id ? (
						<RelatedMovies movieId={movie?.id}></RelatedMovies>
					) : (
						""
					)}
				</Grid>
			</Grid>
		</div>
	);
}

export default MovieDetail;
