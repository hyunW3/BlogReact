import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./route/MainRouter";
import Navigation from "./components/Navigation";
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <MainRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
