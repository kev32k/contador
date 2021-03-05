//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

import "src/js/component/counter.css";
//import "bootstrap/dist/css/bootstrap.css";
import SecondsCounter from "src/js/component/SecondsCounter.js";

let counter = 0;

setInterval(function() {
	ReactDOM.render(
		<SecondsCounter seconds={counter} />,
		document.getElementById("root")
	);
	counter += 1;
}, 1000);
