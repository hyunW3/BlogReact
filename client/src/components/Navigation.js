import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
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
      <Link to="/">
        <h2 className="nav-title"> 개발 Blog </h2>
      </Link>
      <nav className="category">
        <li id="line-wrapper" onClick={toggleMenu} onKeyPress={() => {}}>
          <div id="line"> </div>
          <div id="line"> </div>
          <div id="line"> </div>
        </li>
        <li>|</li>
        {showMenu &&
          categories.map(([id, name]) => (
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
