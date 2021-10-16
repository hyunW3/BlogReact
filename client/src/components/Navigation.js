import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const newArr = [];
    fetch("./categories")
      .then((res) => res.json())
      .then((res) => res.forEach((data) => newArr.push([data._id, data.name])))
      .then(() => {
        setCategories(newArr);
      });
  }, []);

  return (
    <div className="black-nav">
      <h2 className="nav-title"> 개발 Blog </h2>
      <nav className="category">
        {categories.map(([id, name]) => (
          <Link to={name} key={id}>
            <li className="Category-item">{name} </li>
            <li>|</li>
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default Navigation;
