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
					<div className="nav-wrapper">
						<Link to="/">
							<img
								src={logo}
								alt="Movie Park"
								className="brand__logo"
							/>
						</Link>
						<div className="menu__items">
							<Link to="/">Home</Link>
							<Link to="/">Movies</Link>
							<Link to="/">TV Shows</Link>
							{/* <Link to="/">
								<AccountCircle fontSize="small"></AccountCircle>
							</Link> */}
						</div>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
