import React from 'react'
import List from '../FAQ/List';
import Listcard from '../FAQ/Listcard';
const Footer=()=>{
return(
    <>
    <div className="footmain">
        <div className="heading">
         <h4>Discover More</h4>
        </div>
        <div className="content">
           { Listcard.map(val=>{
                return(
                    <List  key= {val.code}
                    className={val.className}
                           title={val.title}
                           first={val.first}
                           second={val.second}
                           third={val.third}
                           four={val.four}/>

                );
            })}
       
        </div>
        <div className="copy">
            <p>&copy; 2023 All Rights are reserved</p>
        </div>
    </div>
    </>
)
};
export default Footer;