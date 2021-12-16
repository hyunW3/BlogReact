import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentInList from "./ContentInList";
import initiateContentData from "../api/InitiateDataRedux";
import UpdateContentDB from "../api/UpdateContentDB";
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
    UpdateContentDB(targetContent);
  };
  useEffect(() => {
    if (contents.length === 0) initiateContentData(dispatch);
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
