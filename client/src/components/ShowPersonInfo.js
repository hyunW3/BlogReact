import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import "../css/ShowPersonInfo.css";
// import 'react-notion-x/src/styles.css'
import { NotionRenderer } from "react-notion-x";

const ShowPersonInfo = ({ person }) => {
  const [name, setName] = useState("");
  const [githubUrl, setGithubUrl] = useState(null);
  const [blogUrl, setBlogUrl] = useState(null);
  const [notionPage, setNotionPage] = useState({});
  const HyunwoongInfo = [
    "https://github.com/hyunW3",
    "https://noosphere.tistory.com/",
    "fe413b24394340d9b3f15ca875ed0ec6",
  ];
  const SeungjunInfo = ["https://github.com/sjuuun"];
  useEffect(() => {
    const tmpName = person;
    setName(tmpName);
    if (tmpName === "Seungjun") {
      setGithubUrl(SeungjunInfo[0]);
      setBlogUrl(null);
    } else {
      setGithubUrl(HyunwoongInfo[0]);
      setBlogUrl(HyunwoongInfo[1]);
      const NOTION_PAGE_ID = HyunwoongInfo[2];
      fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
        .then((res) => res.json())
        .then((resJson) => setNotionPage(resJson))
        .catch((e) => console.log("error occur", e));
    }
  }, [person]);

  return (
    <div>
      <h3> {name}</h3>
      <div className="link-list">
        <a href={githubUrl}>Github</a>
        {blogUrl != null && <a href={blogUrl}>Blog</a>}
      </div>
      {name === "Hyunwoong" && (
        <div>
          <NotionRenderer recordMap={notionPage} fullPage />
        </div>
      )}
    </div>
  );
};

ShowPersonInfo.propTypes = {
  person: propTypes.string.isRequired,
};

export default ShowPersonInfo;
