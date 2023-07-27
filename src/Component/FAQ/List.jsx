import React from "react";
const List = (props) => {
  return (
    <>
      <div className={props.className}>
        <h3>{props.title}</h3>
        <ul className="menu">
          <li>{props.first}</li>
          <li>{props.second}</li>
          <li>{props.third}</li>
          <li>{props.four}</li>
        </ul>
      </div>
    </>
  );
};
export default List;
