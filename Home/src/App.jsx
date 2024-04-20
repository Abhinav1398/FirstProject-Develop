import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

import "./index.scss";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: Hommme</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
