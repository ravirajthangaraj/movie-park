import { TMDB_API_KEY } from "../Config";

const requests = {
	fetchConfiguration: `configuration?api_key=${TMDB_API_KEY}`,
	fetchTrendingMovies: `trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
	fetchTopRated: `movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
	fetchActionMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
	fetchComedyMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
	fetchHorrorMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
};

export default requests;
