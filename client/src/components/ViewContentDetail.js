import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/ViewContentDetail.css";

const ViewContent = () => {
  const datum = useLocation()?.datum;
  const [editable, setEditable] = useState(false);
  const [postData, setPostData] = useState({
    id: "",
    title: "",
    content: "",
    thumbs: "",
    date: "",
  });
  const setContent = (value) => {
    const newData = {
      id: postData.id,
      title: postData.title,
      content: value,
      thumbs: postData.thumbs,
      date: postData.date,
    };
    setPostData(newData);
  };
  const setTitle = (value) => {
    const newData = {
      id: postData.id,
      title: value,
      content: postData.content,
      thumbs: postData.thumbs,
      date: postData.date,
    };
    setPostData(newData);
  };
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
          {editable ? (
            <h2 className="view-style">
              <input value={postData.title} />
              &nbsp; 👍 : {postData.thumbs}{" "}
            </h2>
          ) : (
            <h2 className="view-style">
              {postData.title} &nbsp; 👍 : {postData.thumbs}{" "}
            </h2>
          )}
        </div>
        <p className="date-style">Date : {postData.date} </p>
        <hr />
        {editable ? (
          <input
            type="content"
            value={postData.content}
            onChange={({ target: { value } }) => setContent(value)}
          />
        ) : (
          <h3>{postData.content} </h3>
        )}
      </div>
      <div>
        <button onClick={() => setEditable((prev) => !prev)}>
          {editable ? "Cancel" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default ViewContent;
