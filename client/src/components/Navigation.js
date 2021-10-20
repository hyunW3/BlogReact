import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";
import FetchCategory from "../api/FetchCategory";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(async () => {
    const newArr = await FetchCategory();
    setCategories(newArr);
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
          categories.map(([id, name]) => {
            const path = `/${name}`;
            return (
              <Link to={path} key={id}>
                <li className="category-item">{name} </li>
                <li>|</li>
              </Link>
            );
          })}
      </nav>
    </div>
  );
};
export default Navigation;
