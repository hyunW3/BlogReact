import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./route/MainRouter";
import Navigation from "./components/Navigation.js";
import "./css/App.css";

const App = (): React.ReactElement => {
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
