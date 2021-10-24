import React from "react";
import { Link } from "react-router-dom";
import "../css/PageTitle.css";

const ContentTitle = () => {
  return (
    <div>
      <div className="page-title">
        <div>
          <h1 className="title-style">Contents</h1>
        </div>
        <div>
          <Link to="/contents/write">
            <button className="button-style" type="button">
              {" "}
              POST{" "}
            </button>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default ContentTitle;
