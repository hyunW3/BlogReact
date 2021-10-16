import React from "react";
import ShowPersonInfo from "../components/ShowPersonInfo";

const ViewPortfoilo = (person) => {
  return (
    <div>
      <ShowPersonInfo person={person.person} />
    </div>
  );
};
export default ViewPortfoilo;
