import React from "react";
import Mainnav from "../Mainnav";
import Box1comp from "../Shopcomp/Box1comp";
import Box1compdata from "../Shopcomp/Box1compdata";
import Box2comp from "../Shopcomp/Box2comp";
import Box2data from "../Shopcomp/Box2data";
import Box3comp from "../Shopcomp/Box3comp";
import Box3data from "../Shopcomp/Box3data";
const Header2 = () => {
  return (
    <>
      <Mainnav />
      <div className="shop">
        <div className="box1">
          <div className="part1 util ">
            <h3>Best Seller</h3>
          </div>
          <div className="part2">
            {Box1compdata.map((item) => {
              return (
                <Box1comp
                  key={item.id}
                  className={item.className}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
        <div className="box2">
          {Box2data.map((item) => {
            return (
              <Box2comp
                key={item.id}
                className={item.className}
                title={item.title}
              />
            );
          })}
        </div>
        <div className="box3">
          {Box3data.map((item) => {
            return (
              <Box3comp
                key={item.id}
                className={item.className}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Header2;
