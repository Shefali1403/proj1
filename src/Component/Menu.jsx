import React from "react";
import { Link, NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <div className="navig">
        <ul>
          <li>
            <NavLink  activeClassName="active_class" to="/">Best Seller</NavLink>
          </li>
          <li>
            <NavLink  activeClassName="active_class" to="/newarrival">New Arrivals</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active_class" to="/mostpop">Most Popular</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
