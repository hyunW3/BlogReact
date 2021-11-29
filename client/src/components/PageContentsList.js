import React, { useState, useEffect, useRef } from "react";
import FetchContent from "../api/FetchContent";
import ContentInList from "./ContentInList";
import "../css/Contents.css";

const PageContentsList = () => {
  const [contents, setContents] = useState([]);
  const latestContents = useRef();
  const fetchData = async () => {
    const newArr = await FetchContent();
    setContents(newArr);
  };

  const Update = async () => {
    const updateList = [];
    if (latestContents.current === undefined) return; // nothing to update
    latestContents.current.forEach((data) => {
      if (data.modified === true) {
        updateList.push({ id: data.id, thumbs: data.thumbs });
      }
    });

    if (updateList.length > 0) {
      await fetch("/contents/update", {
        method: "PATCH",
        body: JSON.stringify(updateList),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };
  useEffect(() => {
    fetchData();
    return Update;
  }, []);

  const thumbsUp = (event) => {
    const {
      target: { value },
    } = event; // event.target.value
    const targetId = value;
    const newArr = contents.map((data) => {
      if (data.id === targetId) {
        const { id, title, content, date, thumbs } = data;
        return {
          id,
          title,
          content,
          date,
          thumbs: thumbs + 1,
          modified: true,
        };
      } // else
      return data;
    });
    latestContents.current = newArr;
    setContents(newArr);
  };

  return (
    <div className="contents">
      <div className="contentsList">
        {contents &&
          contents.map((content) => (
            <ContentInList content={content} thumbsUp={thumbsUp} />
          ))}
      </div>
    </div>
  );
};
export default PageContentsList;
