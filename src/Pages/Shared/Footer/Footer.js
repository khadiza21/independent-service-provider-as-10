import React from "react";
import "./Footer.css";
import { Slide } from "react-reveal";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <div className="footer mt-5 py-5">
        <div className="socialIcon">
          <i class="fa-brands fa-facebook-square"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram-square"></i>
        </div>
        <div>
          <Slide top>
            <h5>Terms Info Privacy</h5>
          </Slide>
          <Slide bottom>
            <h5>Support Contact Policy</h5>
          </Slide>

          <p className="">
            <Slide top>
              <small>
                copyright @ {year} All Rights Reserved. Design By bkhadiza40
              </small>
            </Slide>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
