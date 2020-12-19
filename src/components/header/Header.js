import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/movie-park-logo.svg";
import "./Header.css";

function Header() {
	return (
		<div className="navbar">
			<AppBar color="primary" position="static">
				<Toolbar>
					<Link to="/">
						<img
							src={logo}
							alt="Movie Park"
							className="brand__logo"
						/>
					</Link>
					<div className="menu__items"></div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
