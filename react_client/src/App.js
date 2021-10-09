import React from "react";
import MainRouter from "./route/MainRouter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="black-nav">
        <h2> 개발 Blog </h2>
      </div>
      <MainRouter />
    </div>
  );
};

export default App;
