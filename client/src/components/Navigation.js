import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  const [collectionList, setCollectionList] = useState([]);
  useEffect(() => {
    const newArr = [];
    fetch("./collectionList")
      .then((res) => res.json())
      .then((res) => res.forEach((data) => newArr.push(data.name)))
      .then(() => {
        setCollectionList(newArr);
      });
  }, []);

  return (
    <div className="black-nav">
      <h2 className="nav-title"> 개발 Blog </h2>
      <nav className="Category">
        {collectionList.map((data) => (
          <Link to={data}>
            <li className="Category-item" key={data}>
              {data}{" "}
            </li>
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default Navigation;
