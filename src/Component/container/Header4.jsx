import React from "react";
import Mainnav from "../Mainnav";
const Header4 = () => {
  return (
    <>
      <Mainnav />
      <div className="contact">
        <div className="box1">
          <img
            src="https://i1.adis.ws/i/canon/pro-first-time-fashion-photography-shoot-5_f4e036bc0c884219a4e81141e89e656a?$media-collection-half-dt-jpg$"
            alt="notfound"
          />
        </div>
        <div className="box2">
          <h1>Contact Us</h1>
          <div className="boxes">
            <div className="part1">
              <form onSubmit={() => {}}>
                <p>Full Name</p>
                <br />
                <input type="text" />
                <br />
                <p>Email:</p>
                <br />
                <input type="text" />
                <br />
                <p>Message:</p>
                <br />
                <input type="textarea" />
                <br />
                <button>Contact us</button>
              </form>
            </div>
            <div className="part2">
              <div className="contactcont">

              <h1>Contact in</h1>
              <p>suprofashion@gmail.com</p>
              <div className="icons">
                <i class="fa-brands fa-square-facebook ico"></i>
                <i class="fa-brands fa-instagram ico"></i>
                <i class="fa-brands fa-linkedin ico"></i>
              </div>
            </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header4;
