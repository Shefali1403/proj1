import React from "react";
import { Link, NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <div className="navig">
        <ul>
          <li>
            <NavLink  className = {({isActive, isPending}) => {
              return isActive ? "active_class" : ""
            }} to="/home/bestsell">Best Seller</NavLink>
          </li>
          <li>
            <NavLink  className = {({isActive, isPending}) => {
              return isActive ? "active_class" : ""
            }} to="/home/newarrival">New Arrivals</NavLink>
          </li>
          <li>
            <NavLink className = {({isActive, isPending}) => {
              return isActive ? "active_class" : ""
            }} to="/home/mostpop">Most Popular</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
