import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  const [collectionList, setCollectionList] = useState([]);
  useEffect(() => {
    const newArr = [];
    fetch("./collectionList")
      .then((res) => res.json())
      .then((res) => res.forEach((data) => newArr.push([data._id, data.name])))
      .then(() => {
        setCollectionList(newArr);
      });
  }, []);

  return (
    <div className="black-nav">
      <h2 className="nav-title"> 개발 Blog </h2>
      <nav className="Category">
        {collectionList.map(([_id, name]) => (
          <>
            <Link to={name}>
              <li className="Category-item" key={_id}>
                {name}{" "}
              </li>
            </Link>
            <li>|</li>
          </>
        ))}
      </nav>
    </div>
  );
};
export default Navigation;
