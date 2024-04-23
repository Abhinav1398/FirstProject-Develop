import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from "Home/Footer";
import { PDPContent } from "./PDPContent";
import { Header } from "Home/Header"; // Replace with lazy if needed
import "./index.scss";

const App = () => (
  <Router>
    <div className="container">
      {/* If you want to use Suspense and lazy */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Header app='PRODUCT DETAIL PAGE'/>
        <Routes>
          <Route path="/product/:id" element={<PDPContent />} />
        </Routes>
        <Footer />
      {/* </Suspense> */}
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
