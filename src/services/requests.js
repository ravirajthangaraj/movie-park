import { TMDB_API_KEY } from "../Config";

const requests = {
	fetchConfiguration: `configuration?api_key=${TMDB_API_KEY}`,
	fetchTrendingMovies: `trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
	fetchTopRated: `movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
	fetchActionMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
	fetchComedyMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
	fetchHorrorMovies: `discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
	fetchMovie: `movie/__MOVIEID__?api_key=${TMDB_API_KEY}&append_to_response=credits`,
	fetchRelated: `movie/__MOVIEID__/similar?api_key=${TMDB_API_KEY}`,
};

export default requests;
