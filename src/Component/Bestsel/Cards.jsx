import React from "react";
const Cards = (props) => {
  return (
    <>
      <div className="card">
        <div className={props.className}>
          <img src={props.imgsrc} alt="notfound" />
        </div>
        <div className="content">
          <h4>{props.heading}</h4>
          <p>{props.Price}</p>
        </div>
      </div>
    </>
  );
};
export default Cards;
