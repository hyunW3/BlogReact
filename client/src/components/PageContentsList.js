import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FetchContent from "../api/FetchContent";
import "../css/Contents.css";

const PageContentsList = () => {
  const [contents, setContents] = useState([]);
  const latestContents = useRef(contents);
  const fetchData = async () => {
    const newArr = await FetchContent();
    setContents(newArr);
  };
  // TODO2 - thumbsUp DB update part - request to Backend
  const Update = () => {
    // useRef 써라
    // console.log(latestContents.current);

    const updateList = [];
    latestContents.current.forEach((data) => {
      if (data.modified === true) {
        updateList.push(data);
      }
    });

    // setstate async problem -> Mobx?
    // https://techblog.woowahan.com/2599/
    console.log("unmount!", updateList);
    /*
	fetch('/contents:update', {
		method: 'POST',
		body: JSON.stringify(updateList),
		headers: {
			'Content-Type':'application/json'
		},
	})
	 */
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
