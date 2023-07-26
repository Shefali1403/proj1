import React from 'react';
const Header=()=>{
    return(
    <>
       <div id="navbar">
    <div className="logo">
   <h1>Supro</h1>
    </div>
  <div className="nav">
     <ul className="menu">
        <li>
      Home
            </li>
        <li>
   Shop
            </li>
        <li>
   Blog
            </li>
        <li>
            Contact
            </li>
     </ul>
    </div>
    <div className="search">
        <input type="text" placeholder='Search' />
        </div>
    <div className="icons">
    <i class="fa-regular fa-user"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-cart-shopping"></i>
    <i class="fa-solid fa-grip-lines"></i>
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
    </>
    );
};
export default Header;