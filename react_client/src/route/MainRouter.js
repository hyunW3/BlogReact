import React from "react";
import { Route, Switch } from "react-router-dom";
// import DisqusComment from './components/Disqus'; // because of ADs
import WriteContent from "../components/WriteContent";
import ViewContent from "../components/ViewContent";
import NotFound from "../components/NotFound";
import ContentsView from "./ContentsView";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ContentsView />
      </Route>
      <Route path="/write">
        <WriteContent />
      </Route>
      <Route path="/view/:id">
        <ViewContent />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
};
export default MainRouter;
