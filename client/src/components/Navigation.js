import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import CategoryItem from "./CategoryItem";
import FetchCategory from "../api/FetchCategory";
import "../css/Navigation.css";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    console.log("toggleMenu");
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
        <li
          className="line-wrapper"
          onClick={toggleMenu}
          onKeyPress={() => {
            console.log("onKeyPress");
          }}
        >
          <HamburgerButton />
        </li>
        <li>|</li>
        {showMenu &&
          categories.map(([id, name]) => {
            const path = `/${name}`;
            return (
              <Link to={path} key={id}>
                <CategoryItem id={id} name={name} />
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
