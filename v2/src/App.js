import { useEffect } from "react";

import "./themes/style.css";
import applyTheme from "./util/applyTheme";

function App() {
	useEffect(() => {
		const themeSelected = localStorage.getItem("selected-theme");
		applyTheme(themeSelected);
	}, []);

	return <div className="App"></div>;
}

export default App;
