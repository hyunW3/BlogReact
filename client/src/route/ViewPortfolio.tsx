import React from "react";
import ShowPersonInfo from "../components/ShowPersonInfo";

type PersonInfo = {
	person : string;
};

const ViewPortfoilo = ({person} : PersonInfo) => {
  return (
    <div>
      <ShowPersonInfo person={person} />
    </div>
  );
};
export default ViewPortfoilo;
