import React from "react";
import { Link } from "react-router-dom";
import "../css/Contents.css";

const ContentTitle = () => {
  const buttonStyle = {
    color: "black",
    textAlign: "right",
    border: "2px solid black",
  };
  const titleStyle = { paddingRight: "350px" };

  return (
    <div>
      <div className="contents_title">
        <div>
          <h1 style={titleStyle}>Contents</h1>
        </div>
        <div>
          <Link to="/write">
            <button style={buttonStyle} type="button">
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
