import React from "react";
import classes from "./Facilities.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Facilities = () => {
  return (
    <div className={classes.cover}>
      <div className={classes.action}>
        <div className={classes.centerIcon}>
          <AccessTimeIcon className={classes.iconValue} />
        </div>
        <div className={classes.labelValue}>Quick Response</div>
        <div className={classes.description}>
          For regulatory approval and fast market access
        </div>
      </div>
      <div className={classes.action}>
        <div className={classes.centerIcon}>
          <PublicIcon className={classes.iconValue} />
        </div>
        <div className={classes.labelValue}>Global Coverage</div>
        <div className={classes.description}>
          Global network of highly-trained technical experts in 45+ country
        </div>
      </div>
      <div className={classes.action}>
        <div className={classes.centerIcon}>
          <EventAvailableIcon className={classes.iconValue} />
        </div>
        <div className={classes.labelValue}>Customised Services</div>
        <div className={classes.description}>
          Fast and customisable quality assurance
        </div>
      </div>
    </div>
  );
};

export default Facilities;
