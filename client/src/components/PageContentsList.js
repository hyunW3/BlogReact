import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FetchContent from "../api/FetchContent";
import ContentInList from "./ContentInList";
import initiateData from "../api/InitiateDataRedux";
import { ThumbsUpContent } from "../redux/BlogContent";
import "../css/Contents.css";

const PageContentsList = () => {
  const { contents } = useSelector((state) => {
    return state.BlogContent;
  });
  const dispatch = useDispatch();

  const Update = async (targetId) => {
    let targetContent = contents.find((x) => x.id === targetId);
    targetContent = [
      { _id: targetContent.id, thumbs: targetContent.thumbs + 1 },
    ];
    // thumbs : not sync with redux
    // path : /contents/updateThumbs
    await fetch("/update", {
      method: "PATCH",
      body: JSON.stringify(targetContent),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  useEffect(() => {
    if (contents.length === 0) initiateData();
  }, []);

  const thumbsUp = async (event) => {
    const {
      target: { value },
    } = event; // event.target.value
    const targetId = value;
    dispatch(ThumbsUpContent(targetId));
    Update(targetId);
  };

  return (
    <div className="contents">
      <div className="contentsList">
        {contents &&
          contents.map((content) => (
            <ContentInList
              key={content.id}
              content={content}
              thumbsUp={thumbsUp}
            />
          ))}
      </div>
    </div>
  );
};
export default PageContentsList;
