import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../css/ViewContentDetail.css";

const ViewContentDetail = () => {
  const datum = useLocation()?.datum;
  const [editable, setEditable] = useState(false);
  const [postData, setPostData] = useState({
    id: datum.id,
    title: datum.title,
    content: datum.content,
    thumbs: datum.thumbs,
    date: datum.date,
    modified: false,
  });
  const latestData = useRef(postData);
  const setContent = (value) => {
    const newData = {
      id: postData.id,
      title: postData.title,
      content: value,
      thumbs: postData.thumbs,
      date: postData.date,
      modified: true,
    };
    setPostData(newData);
    latestData.current = newData;
  };
  const setTitle = (value) => {
    const newData = {
      id: postData.id,
      title: value,
      content: postData.content,
      thumbs: postData.thumbs,
      date: postData.date,
      modified: true,
    };
    setPostData(newData);
    latestData.current = newData;
  };
  const Update = async () => {
    if (latestData.current.modified === true) {
      const updateArr = [
        {
          id: latestData.current.id,
          title: latestData.current.title,
          content: latestData.current.content,
          date: new Date(Date.now()),
        },
      ];
      console.log(updateArr);
      await fetch("/contents/update", {
        method: "PATCH",
        body: JSON.stringify(updateArr),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };
  useEffect(() => {
    return Update;
  }, []);
  return (
    <div key={postData.id}>
      <div>
        <div className="view-content">
          {editable ? (
            <h2 className="view-style">
              <input
                value={postData.title}
                onChange={({ target: { value } }) => setTitle(value)}
              />
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
          {editable ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default ViewContentDetail;
