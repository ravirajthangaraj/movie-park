import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop({ children }) {
	const { pathname } = useLocation();
	useEffect(() => {
		console.log("scroll");
		window.scrollTo(0, 0);
	}, [pathname]);
	return children;
}

export default ScrollToTop;
