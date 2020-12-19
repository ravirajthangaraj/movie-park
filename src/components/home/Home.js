import React from "react";
import GenreRow from "../genre-row/GenreRow";
import requests from "../../services/requests";
import "./Home.css";

function Home() {
	return (
		<div className="home__page">
			<GenreRow
				title="Trending Now"
				fetchUrl={requests.fetchTrendingMovies}
			/>
			<GenreRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<GenreRow
				title="Action Movies"
				fetchUrl={requests.fetchActionMovies}
			/>
			<GenreRow
				title="Comedy Movies"
				fetchUrl={requests.fetchComedyMovies}
			/>
			<GenreRow
				title="Horror Movies"
				fetchUrl={requests.fetchHorrorMovies}
			/>
		</div>
	);
}

export default Home;
