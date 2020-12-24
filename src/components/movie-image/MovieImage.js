import React, { useContext } from "react";
import { ConfigContext } from "../../App";

function MovieImage({ type, imagePath, sizeIndex, imageAlt, styles }) {
	const appConfig = useContext(ConfigContext).appConfig;
	let imageSize = "";
	if (type === "poster" || type === "") {
		imageSize = appConfig?.images?.poster_sizes[sizeIndex];
	} else if (type === "backdrop") {
		imageSize = appConfig?.images?.backdrop_sizes[sizeIndex];
	}
	const imageUrl = appConfig?.images?.secure_base_url + imageSize + imagePath;
	return (
		<img
			src={imageUrl}
			alt={imageAlt ? "Movie" : ""}
			className={type}
			style={styles}
		/>
	);
}

export default MovieImage;
