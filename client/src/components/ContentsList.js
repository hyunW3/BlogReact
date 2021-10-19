import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Contents.css";

const ContentsList = () => {
  const [contents, setContents] = useState([]);
  const fetchData = async () => {
    const newArr = [];
    await fetch("/contents")
      .then((res) => res.json())
      .then((res) => {
        res.forEach((data) => {
          newArr.push({
            id: data._id,
            title: data.title,
            date: data.date,
            thumbs: data.thumbs,
            modified: false,
          });
        });
      });
    await setContents(newArr);
  };

  // TODO2 - thumbsUp DB update part - request to Backend
  const Update = () => {
    const updateList = [];
    contents.forEach((data) => {
      if (data.modified === true) {
        console.log(data);
        updateList.push(data);
      }
    });
    console.log("update list : ", updateList);
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
    return Update();
  }, []);

  const thumbsUp = (event) => {
    const {
      target: { value },
    } = event; // event.target.value
    const targetId = value;
    const newArr = [];
    contents.forEach((data) => {
      if (data.id === targetId) {
        const { id, title, date, thumbs } = data;
        const newThumbs = thumbs + 1;
        newArr.push({ id, title, date, thumbs: newThumbs, modified: true });
      } else newArr.push(data);
    });

    setContents(newArr);
  };

  return (
    <div className="contents">
      <div className="contentsList">
        {contents.map((content) => (
          <div key={content.id}>
            <h3>
              <Link to={`/view/${content.id}`}>{content.title}</Link>

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
export default ContentsList;
