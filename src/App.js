import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import axios from "./services/axios";
import requests from "./services/requests";

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
						<Header />
						<Switch>
							<Route exact component={Home} path="/"></Route>
						</Switch>
					</Router>
				</div>
			</ThemeProvider>
		</ConfigContext.Provider>
	);
}

export default App;
