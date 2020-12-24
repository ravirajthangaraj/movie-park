import { Grid } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import tmdb_logo from "../../assets/svgs/tmdb.svg";

function Footer() {
	return (
		<div className="app__footer">
			<Grid container>
				<Grid item xs={12}>
					<img
						src={tmdb_logo}
						className="footer__tmdb__logo"
						alt="TMDB"
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default Footer;
