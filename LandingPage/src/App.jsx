import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { Header } from "./Header";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: LandingPage</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
