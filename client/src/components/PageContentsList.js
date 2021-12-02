import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import FetchContent from "../api/FetchContent";
import BlogContent, {
  InitContent,
  ADDContent,
  ThumbsUpContent,
} from "../redux/BlogContent";
import "../css/Contents.css";

const PageContentsList = () => {
  const { contents } = useSelector((state) => {
    return state.BlogContent;
  });
  const dispatch = useDispatch();
  const initiateData = async () => {
    const newArr = await FetchContent();
    dispatch(InitContent(newArr));
  };

  const Update = async (targetId) => {
    let targetContent = contents.find((x) => x.id === targetId);
    targetContent = [
      { _id: targetContent.id, thumbs: targetContent.thumbs + 1 },
    ];
    // thumbs : not sync with redux

    await fetch("/contents/updateThumbs", {
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
            <div key={content.id}>
              <h3>
                <Link
                  to={{
                    pathname: `/contents/view/${content.id}`,
                    datum: content,
                  }}
                >
                  {content.title}
                </Link>

                <button type="button" value={content.id} onClick={thumbsUp}>
                  👍{content.thumbs}
                </button>
              </h3>
              {content.date}에 작성
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};
export default PageContentsList;
