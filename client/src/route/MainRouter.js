import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import DisqusComment from './components/Disqus'; // because of ADs
import ViewPortfoilo from "./ViewPortfolio";
import ViewPage from "./ViewPage";
import ViewContentDetail from "../components/ViewContentDetail";
import WriteContent from "../components/WriteContent";
import NotFound from "../components/NotFound";

const MainRouter = () => {
  const MainPage = () => {
    return <ViewPage path="/contents" />;
  };
  return (
    <Switch>
      <Route exact path="/">
        {MainPage}
      </Route>

      <Route path="/Hyunwoong">
        <ViewPortfoilo person="Hyunwoong" />
      </Route>
      <Route exact path="/Seungjun">
        <ViewPortfoilo person="Seungjun" />
      </Route>

      <Route exact path="/contents">
        <ViewPage />
      </Route>
      <Route path="/contents/write" component={WriteContent} />
      <Route path="/contents/view/:id" component={ViewContentDetail} />

      <Route component={NotFound} />
    </Switch>
  );
};
export default MainRouter;
