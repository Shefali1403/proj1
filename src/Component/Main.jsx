import React from 'react';
import Menu from './Menu';
import { Routes, Route} from 'react-router-dom';
import Bestseller from './Bestsel/Bestseller';
import Newarr from './Newarrival/Newarr';
import Mostpop from './Mostpopular/Mostpop';
const Main=()=>{

    return(
        <>
        <div id="main">

           <Menu/>
           <Routes>
            <Route path='/' Component={Bestseller}/>
            <Route path='/newarrival' Component={Newarr}/>
            <Route path='/mostpop' Component={Mostpop}/>
           </Routes>
        </div>
        </>
    )

}
export default Main;