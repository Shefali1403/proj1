import React from "react";
const Boxarr = (props) => {
  return (
    <>
      <div className={props.className}>
        <h1>{props.title}</h1>
        <button>Shop Now</button>
      </div>
    </>
  );
};
export default Boxarr;
