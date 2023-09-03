import React, { useState } from "react";
import classes from "./Shipment.module.css";
import shipment from "../store/Preshipment.jpg";

const Shipment = () => {
  const [isShow, setIsShow] = useState(false);
  const [showName, setShowName] = useState("Read More");
  const handleShowContent = () => {
    setIsShow((state) => !state);
    setShowName(isShow ? "Read More" : "Read Less");
  };
  return (
    <div className={classes.shipments}>
      <div className={classes.cover}>
        <div className={classes.img_div}>
          <img src={shipment} className={classes.img_self} alt="shipment" />
        </div>
        <div className={classes.content_div}>
          <div className={classes.content_heading}>
            <b>Pre-Shipment Inspection Services:</b>
          </div>
          Pre-shipment inspection is an essential part of ensuring that products
          meet the required quality standards and are safe for use. It is a type
          of inspection service that is conducted before the shipment of goods
          to ensure that they comply with the buyer's specifications, industry
          standards, and regulations. In this article, we will discuss what
          pre-shipment inspection entails and why it is essential for
          businesses.
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
              <b>What is Pre-shipment Inspection?</b>
            </div>
            <div className={classes.eachContent}>
              <ul>
                <li>
                  Pre-shipment inspection is a type of quality control
                  inspection that takes place after the production of goods and
                  before they are shipped to the buyer. The purpose of this
                  inspection is to ensure that the products meet the buyer's
                  specifications and requirements, as well as industry standards
                  and regulations. Pre-shipment inspection involves checking the
                  product's quality, quantity, and packaging, as well as
                  verifying compliance with the relevant regulations.
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.eachContents}>
            <div className={classes.contentHeading}>
              <b>What Does Pre-shipment Inspection Include?</b>
            </div>
            <div className={classes.eachContent}>
              <ul>
                <li>
                  <b>
                    Pre-shipment inspection typically includes the following
                    activities:
                  </b>
                </li>

                <br />
                <li>
                  Quantity check: The inspector will verify that the quantity of
                  goods matches the order quantity.
                </li>
                <br />
                <li>
                  Visual inspection: The inspector will visually inspect the
                  product to ensure that it meets the required quality
                  standards, as well as checking for any defects, damages, or
                  inconsistencies.
                </li>
                <br />
                <li>
                  Functionality check: The inspector will test the product's
                  functionality to ensure that it works correctly.
                </li>
                <br />
                <li>
                  Packaging check: The inspector will check that the product is
                  correctly packaged and labeled according to the buyer's
                  specifications, as well as checking for any damages to the
                  packaging.
                </li>
                <br />
                <li>
                  Compliance check: The inspector will verify that the product
                  complies with the relevant regulations and standards, such as
                  safety standards, environmental regulations, and import/export
                  regulations.
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.eachContents}>
            <div className={classes.contentHeading}>
              <b>Why is Pre-shipment Inspection Essential for Businesses?</b>
            </div>
            <div className={classes.eachContent}>
              <ul>
                <li>
                  <b>
                    Pre-shipment inspection is essential for businesses for
                    several reasons:
                  </b>
                </li>
                <br />
                <li>
                  Quality control: Pre-shipment inspection helps to ensure that
                  the products meet the required quality standards, reducing the
                  risk of product recalls, customer complaints, and associated
                  costs.
                </li>
                <br />
                <li>
                  Risk management: Pre-shipment inspection helps to identify any
                  defects, damages, or inconsistencies before the products are
                  shipped, reducing the risk of liability and associated costs.
                </li>
                <br />
                <li>
                  Compliance: Pre-shipment inspection helps to ensure that the
                  products comply with the relevant regulations and standards,
                  reducing the risk of non-compliance and associated penalties.
                </li>
                <br />
                <li>
                  Customer satisfaction: Pre-shipment inspection helps to ensure
                  that the products meet the buyer's specifications and
                  requirements, improving customer satisfaction and reducing the
                  risk of returns and associated costs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shipment;
