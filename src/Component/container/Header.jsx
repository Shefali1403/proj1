import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return(<>

    <div id="navbar">
        <div className="logo">
            <h1>Supro</h1>
        </div>
        <div className="nav">
            <ul className="menu">
                <li>
                    <Link to = "/home">Home</Link>
                </li>
                <li>
                    <Link to = "/shop">shop</Link>
                </li>
                <li>
                    <Link to = "/blog">blog</Link>
                </li>
                <li>
                    <Link to = "/contact">contact</Link>
                </li>
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder='Search' />
        </div>
        <div className="icons">
            <i className="fa-regular fa-user"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-grip-lines"></i>
        </div>
    </div>

    <div className="cont">
        <div id="mainhead">
        <p>Next Arrival</p>
        <h1>Light Nylon</h1>
        <h1>OuterWear</h1>
        <ul className="list"><li>Casual line</li>
        <li>Nylon mix</li>
        <li>Buffered Collar</li></ul>
        </div>
    </div>
</>);
};
export default Header;