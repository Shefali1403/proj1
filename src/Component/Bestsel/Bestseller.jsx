import React from 'react'
import Cards from './Cards'
import Catcard from './Catcard';
const Bestseller=()=>{
    return(
        <>
  <div className="categ">
                {Catcard.map(val=>{
                 return(
                <Cards className={val.className}
                       key={val.id}
                       imgsrc={val.imgsrc}
                       heading={val.heading}
                       Price={val.Price}
                       />
                 );
                })};

            </div>
        </>
    )
}
export default Bestseller;