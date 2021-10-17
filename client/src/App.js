import React from "react";
import MainRouter from "./route/MainRouter";
import Navigation from "./components/Navigation";
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <MainRouter />
    </div>
  );
};

export default App;
