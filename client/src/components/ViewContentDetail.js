import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { UpdateContent } from "../redux/BlogContent";
import FetchContent from "../api/FetchContent";
import initiateData from "../api/InitiateDataRedux";
import "../css/ViewContentDetail.css";

const ViewContentDetail = ({ match, location }) => {
  const targetId = match?.params.id;
  let postData = useSelector((state) => {
    return state.BlogContent.contents.find((x) => x.id === targetId);
  });
  const dispatch = useDispatch();

  const [editable, setEditable] = useState(false);
  const setContent = (value) => {
    const newData = {
      id: postData.id,
      title: postData.title,
      content: value,
      thumbs: postData.thumbs,
      date: postData.date,
      modified: true,
    };
    dispatch(UpdateContent(postData.id, newData));
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
    dispatch(UpdateContent(postData.id, newData));
  };
  const toggleEditable = () => {
    setEditable((prev) => !prev);
  };
  const Update = async () => {
    toggleEditable();
    if (postData.modified === true) {
      const updateArr = [
        {
          id: postData.id,
          title: postData.title,
          content: postData.content,
          date: new Date(Date.now()),
        },
      ];
      // console.log("update!",updateArr);

      await fetch("/contents/update", {
        method: "PATCH",
        body: JSON.stringify(updateArr),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };
  if (postData === undefined) {
    postData = window.localStorage.getItem("state");
    initiateData();
  } else {
    window.localStorage.setItem("state", postData);
  }

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
            type="contentDetail"
            value={postData.content}
            onChange={({ target: { value } }) => setContent(value)}
          />
        ) : (
          <h3>{postData.content} </h3>
        )}
      </div>
      <div>
        {editable ? (
          <>
            <button onClick={Update}> Save </button>
            <button onClick={toggleEditable}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={toggleEditable}> Edit</button>
            <Link to="../">
              <button> Back </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewContentDetail;
