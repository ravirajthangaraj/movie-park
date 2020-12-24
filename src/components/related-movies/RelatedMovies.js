import React from "react";
import requests from "../../services/requests";
import GenreRow from "../genre-row/GenreRow";

function RelatedMovies({ movieId }) {
	const fetchUrl = requests.fetchRelated.replace("__MOVIEID__", movieId);

	return (
		<div>
			<GenreRow title="Related Movies" fetchUrl={fetchUrl} />
		</div>
	);
}

export default RelatedMovies;
