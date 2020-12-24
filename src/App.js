import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import MovieDetail from "./components/movie-detail/MovieDetail";

import axios from "./services/axios";
import requests from "./services/requests";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

export const ConfigContext = React.createContext({});

function App() {
	const [appConfig, setAppConfig] = useState({});
	const theme = createMuiTheme({
		palette: {
			primary: { main: "#252525" },
		},
	});

	useEffect(() => {
		async function getConfiguration(fetchUrl) {
			const axiosResponse = await axios.get(fetchUrl);
			setAppConfig(axiosResponse.data);
			return axiosResponse;
		}
		getConfiguration(requests.fetchConfiguration);
	}, []);
	return (
		<ConfigContext.Provider
			value={{ appConfig: appConfig, setAppConfig: setAppConfig }}
		>
			<ThemeProvider theme={theme}>
				<div className="app">
					<Router>
						<ScrollToTop>
							<Header />
							<Switch>
								<Route exact component={Home} path="/"></Route>
								<Route
									exact
									component={MovieDetail}
									path="/movie/:movieTitle"
								></Route>
							</Switch>
							<Footer />
						</ScrollToTop>
					</Router>
				</div>
			</ThemeProvider>
		</ConfigContext.Provider>
	);
}

export default App;
