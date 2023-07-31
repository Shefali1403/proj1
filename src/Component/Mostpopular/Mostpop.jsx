import React from "react";
import Mostpopcomp from "./Mostpopcomp";
import Mostpopdata from "./Mostpopdata";
const Mostpop = () => {
  return (
    <h1>
      <div className="mostpop">
        <div className="box1">
          <p>Clothing</p>
          <h4>
            Dress & coat
            <br />
            Collection
          </h4>
        </div>
        <div className="box2">
          <div className="mostpopcont">
            {Mostpopdata.map((item) => {
            return (
              <Mostpopcomp
              key={item.id}
              className={item.className}
              content={item.content}
              title={item.title}
              />
              );
            })}
            </div>
        </div>
      </div>
    </h1>
  );
};
export default Mostpop;
