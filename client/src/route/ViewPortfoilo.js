import React from "react";
import ShowPersonInfo from "../components/ShowPersonInfo";

const ViewPortfoilo = (info) => {
  const { person } = info;
  return (
    <div>
      <ShowPersonInfo person={person} />
    </div>
  );
};
export default ViewPortfoilo;
