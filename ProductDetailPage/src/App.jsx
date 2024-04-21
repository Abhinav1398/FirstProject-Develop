import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { Footer } from "Home/Footer";
import getProductById from "Home/api/products";
import {SafeComponent} from "./SafeComponent";
import { PDPContent } from "./PDPContent";
// const Header = React.lazy(()=>import('Home/Header'));
import { Header } from "Home/Header";

import "./index.scss";

const App = () => (
  <div className="container">
    {/* <Suspense fallback={<div>Loadinggg...</div>}> */}
    <SafeComponent>
    <Header app='PRODUCT DETAIL PAGE'/>
    <PDPContent />
    </SafeComponent>
    {/* </Suspense> */}
    <Footer /> 
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
