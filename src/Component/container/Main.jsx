import React from 'react';
import Menu from '../Menu';
const Main=({Child})=>{
    return(
        <>
        <div id="main">
            <Menu/>
            {Child}
        </div>
        </>
    )

}
export default Main;