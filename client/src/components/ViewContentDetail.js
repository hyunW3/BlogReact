import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/ViewContent.css";

const ViewContent = () => {
  const datum = useLocation()?.datum;
  const [postData, setPostData] = useState({
    id: "",
    title: "",
    content: "",
    thumbs: "",
    date: "",
  });

  useEffect(() => {
    setPostData({
      id: datum.id,
      title: datum.title,
      content: datum.content,
      thumbs: datum.thumbs,
      date: datum.date,
    });
  }, []);
  return (
    <div key={postData.id}>
      <div>
        <div className="view-content">
          <h2 className="view-style">
            {postData.title} &nbsp; 👍 : {postData.thumbs}{" "}
          </h2>
        </div>
        <h4 className="data-style">Date : {postData.date} </h4>
        <hr />
        <h3>{postData.content} </h3>
      </div>
    </div>
  );
};

export default ViewContent;
