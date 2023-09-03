import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className={classes.cover}>
      <div className={classes.cover__box}>
        <div className={classes.footer_name}>
          <b>Footer Menu</b>
          <div className={classes.items}>
            <Link to="/" className={classes.item}>
              Home
            </Link>
            <div className={classes.item}>
              <Link to="/about" className={classes.item}>
                About Us
              </Link>
            </div>
          </div>
          <div className={classes.items}>
            <div className={classes.item}>
              <Link to="/contact" className={classes.item}>
                Contact
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/facilities" className={classes.item}>
                Known For
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.get_in_touch}>
          Get In Touch
          <div className={classes.get_info}>Mobile No: +91 9979772117</div>
          <div className={classes.get_info}>Mobile No: +91 9904772117</div>
          <div className={classes.get_info}>Email: admin@tbdengineering.in</div>
        </div>
      </div>
      <div className={classes.copy_right_sections}>
        <div className={classes.copy_right}>
          All rights reserved. | Powered by <b> TBD ENGINEERING LLP</b>
        </div>
        <div className={classes.socials}>
          <div className={classes.get_social}>Get Social</div>
          <div className={classes.iconDiv}>
            <a
              href="https://www.linkedin.com/company/tbd-engineering-llp/"
              target="_blank"
            >
              <LinkedInIcon className={classes.linkedIn} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
