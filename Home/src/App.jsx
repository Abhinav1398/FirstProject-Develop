import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./Footer";
import { HomeContent } from "./HomePageComponent";
import { Header } from "./Header";

import "./index.scss";

const App = () => (
  <div className="container">
    <Header app='HOME HEADER APPP ' />
    <HomeContent />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
