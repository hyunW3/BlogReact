import React from "react";
import { useParams } from "react-router-dom";
import PageContentsList from "../components/PageContentsList";
import PageTitle from "../components/PageTitle";
import NotFound from "../components/NotFound";

const ViewPage = () => {
  return (
    <div>
      <PageTitle />
      <PageContentsList />
    </div>
  );
};

export default ViewPage;
