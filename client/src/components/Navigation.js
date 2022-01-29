import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import CategoryItem from "./CategoryItem";
import FetchCategoryDB from "../api/FetchCategoryDB";
import "../css/Navigation.css";

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(async () => {
    const newArr = await FetchCategoryDB();
    setCategories(newArr);
  }, []);

  return (
    <div className="black-nav">
      <Link to="/">
        <h2 className="nav-title"> 개발 Blog </h2>
      </Link>
      <nav className="category">
        <li className="line-wrapper" onClick={toggleMenu} onKeyPress={() => {}}>
          <HamburgerButton />
        </li>
        <li>|</li>
        {showMenu &&
          categories.map(([id, name]) => {
            return <CategoryItem key={id} name={name} />;
          })}
      </nav>
    </div>
  );
};
export default Navigation;
