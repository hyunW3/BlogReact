import React, { useState, useEffect } from "react";
import "../css/ShowPersonInfo.css";

const ShowPersonInfo = (person) => {
  const [name, setName] = useState("");
  const [githubUrl, setGithubUrl] = useState(null);
  const [blogUrl, setBlogUrl] = useState(null);
  const HyunwoongInfo = [
    "https://github.com/hyunW3",
    "https://noosphere.tistory.com/",
  ];
  const SeungjunInfo = ["https://github.com/sjuuun"];
  useEffect(() => {
    const tmpName = person.person;
    setName(tmpName);
    if (tmpName === "Seungjun") {
      setGithubUrl(SeungjunInfo[0]);
      setBlogUrl(null);
    } else {
      setGithubUrl(HyunwoongInfo[0]);
      setBlogUrl(HyunwoongInfo[1]);
    }
  }, [person]);

  return (
    <div>
      <h3> {name}</h3>
      <div className="link-list">
        <a href={githubUrl}>Github</a>
        {blogUrl != null && <a href={blogUrl}>Blog</a>}
      </div>
    </div>
  );
};

export default ShowPersonInfo;
