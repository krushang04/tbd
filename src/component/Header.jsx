import React from "react";
import classes from "./Header.module.css";
import logo from "../store/llp_logo1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.cover}>
      <div className={classes.logo_cover}>
        <img className={classes.image_logo} src={logo} alt="logo"></img>
        <div className={classes.name_logo}>
          <b>TBD ENGINEERING LLP</b>
        </div>
      </div>
      <div className={classes.items}>
        <Link to="/" className={classes.item}>
          Home
        </Link>

        <Link to="/about" className={classes.item}>
          AboutUs
        </Link>
        <div className={classes.dropdown}>
          <button className={classes.dropbtn}>Services</button>
          <div className={classes.dropdown_content}>
            <Link to="/inspection" className={classes.item}>
              Inspection Service
            </Link>
            <Link to="/shipment" className={classes.item}>
              Pre-Shipment Service
            </Link>
            <Link to="/expediting" className={classes.item}>
              Expediting Service
            </Link>
          </div>
        </div>
        <Link to="/contact" className={classes.item}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
