import React from "react";
import Boxarr from "./Boxarr";
import Newarrdata from "./Newarrdata";
const Newarr = () => {
  return (
    <div className="newarr">
      {Newarrdata.map((value) => {
        return (
          <Boxarr
            key={value.id}
            className={value.className}
            title={value.title}
          />
        );
      })}
      ;
    </div>
  );
};
export default Newarr;
