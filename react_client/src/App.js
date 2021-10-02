import React from "react";
import { Route, Switch } from "react-router-dom";

// import DisqusComment from './components/Disqus'; // because of ADs
import ContentsList from "./components/ContentsList";
import ContentTitle from "./components/ContentTitle";
import NotFound from "./components/NotFound";
import WriteContent from "./components/WriteContent";
import ViewContent from "./components/ViewContent";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="black-nav">
        <h2> 개발 Blog </h2>
      </div>
      <Switch>
        <Route exact path="/">
          <ContentTitle />
          <ContentsList />
        </Route>
        <Route path="/write">
          <WriteContent />
        </Route>
        <Route path="/view/:id">
          <ViewContent />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
