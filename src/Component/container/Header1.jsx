import React from 'react';
import Mainnav from '../Mainnav';
const Header1 = () => {
    return(<>
    <Mainnav/>
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
export default Header1;