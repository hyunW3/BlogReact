import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = (info) => {
  const path = `/${info.name}`;
  return (
    <Link to={path}>
      <li className="category-item">{info.name} </li>
      <li>|</li>
    </Link>
  );
};
export default CategoryItem;
