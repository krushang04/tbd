import React, { useState } from "react";
import classes from "./Expediting.module.css";
import expediting from "../store/Expediting.jpg";

const Expediting = () => {
  const [isShow, setIsShow] = useState(false);
  const [showName, setShowName] = useState("Read More");
  const handleShowContent = () => {
    setIsShow((state) => !state);
    setShowName(isShow ? "Read More" : "Read Less");
  };
  return (
    <div className={classes.expeditings}>
      <div className={classes.cover}>
        <div className={classes.img_div}>
          <img src={expediting} className={classes.img_self} alt="expediting" />
        </div>
        <div className={classes.content_div}>
          <div className={classes.content_heading}>
            <b>Expediting Services</b>
          </div>
          In the world of business, time is money. Delays in the supply chain
          can have a significant impact on a company's bottom line. This is
          where expediting services come in. Expediting services help companies
          ensure that their products are delivered on time and to the required
          specifications. In this article, we will discuss what expediting
          services entail and why they are essential for businesses.
          <div>
            <button className={classes.read_more} onClick={handleShowContent}>
              {showName}
            </button>
          </div>
        </div>
      </div>
      {isShow && (
        <div className={classes.showContent}>
          <div className={classes.eachContents}>
            <div className={classes.contentHeading}>
              <b>What are Expediting Services?</b>
            </div>
            <div className={classes.eachContent}>
              <ul>
                <li>
                  Expediting services are designed to help businesses ensure
                  that their products are delivered on time and to the required
                  specifications. These services involve expeditors who work
                  with suppliers and logistics providers to ensure that
                  production schedules are met and shipments are delivered on
                  time.
                </li>
                <br />
                <li>
                  Expeditors monitor the supply chain and take proactive steps
                  to identify potential delays and issues that could affect
                  delivery times.
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.eachContents}>
            <div className={classes.contentHeading}>
              <b>What Does Expediting Include?</b>
            </div>
            <div className={classes.eachContent}>
              <ul>
                <li>
                  <b>
                    Expediting services typically include the following
                    activities:
                  </b>
                </li>

                <br />
                <li>
                  Production Monitoring: Expeditors monitor production schedules
                  to ensure that production is on track and that products are
                  being produced to the required specifications.
                </li>
                <br />
                <li>
                  Shipment Monitoring: Expeditors monitor shipments to ensure
                  that they are on schedule and that there are no delays or
                  issues that could affect delivery times.
                </li>
                <br />
                <li>
                  Problem Resolution: Expeditors work to identify potential
                  issues and take proactive steps to resolve them before they
                  become problems that could delay the shipment.
                </li>
                <br />
                <li>
                  Communication: Expeditors communicate with suppliers,
                  logistics providers, and customers to ensure that everyone is
                  aware of the shipment's status and any potential issues. Why
                  are Expediting Services Essential for Businesses?
                </li>
                <br />
                <li>
                  <b>
                    Expediting services are essential for businesses for several
                    reasons:
                  </b>
                </li>
                <br />
                <li>
                  Time Management: Expediting services help businesses to manage
                  their time more effectively by ensuring that products are
                  delivered on time and to the required specifications.
                </li>
                <br />
                <li>
                  Cost Management: Delays in the supply chain can be costly.
                  Expediting services help businesses to avoid delays and
                  associated costs, such as late delivery penalties and rush
                  order fees.
                </li>
                <br />
                <li>
                  Risk Management: Expediting services help businesses to
                  identify potential issues in the supply chain and take
                  proactive steps to resolve them before they become problems
                  that could delay the shipment.
                </li>
                <br />
                <li>
                  Customer Satisfaction: Delivering products on time and to the
                  required specifications is essential for customer
                  satisfaction. Expediting services help businesses to ensure
                  that their customers receive their products when they need
                  them.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expediting;
