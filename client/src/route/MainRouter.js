import React from "react";
import { Route, Switch } from "react-router-dom";
// import DisqusComment from './components/Disqus'; // because of ADs
import WriteContent from "../components/WriteContent";
import ViewContent from "../components/ViewContent";
import NotFound from "../components/NotFound";

import ViewPage from "./ViewPage";
import ViewPortfoilo from "./ViewPortfolio";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ViewPage />
      </Route>
      <Route path="/write">
        <WriteContent />
      </Route>
      <Route path="/view/:id">
        <ViewContent />
      </Route>

      <Route path="/Hyunwoong">
        <ViewPortfoilo person="Hyunwoong" />
      </Route>
      <Route path="/Seungjun">
        <ViewPortfoilo person="Seungjun" />
      </Route>
      <Route exact path="/contents">
        <ViewPage />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
};
export default MainRouter;
