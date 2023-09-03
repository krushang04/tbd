import React, { useState } from "react";
import classes from "./Inspection.module.css";
import inspection from "../store/inspection.jpg";

const Inspection = () => {
  const [isShow, setIsShow] = useState(false);
  const [showName, setShowName] = useState("Read More");
  const handleShowContent = () => {
    setIsShow((state) => !state);
    setShowName(isShow ? "Read More" : "Read Less");
  };
  return (
    <div className={classes.inspections}>
      <div className={classes.cover}>
        <div className={classes.img_div}>
          <img src={inspection} className={classes.img_self} alt="inspection" />
        </div>
        <div className={classes.content_div}>
          <div className={classes.content_heading}>
            <b>Third-Party Inspection & Second-Party Inspection Services:</b>
          </div>
          When it comes to ensuring the quality and safety of products and
          services, it's essential to have an objective and independent
          evaluation. This is where third-party inspection and second-party
          inspection services come in. These services provide an unbiased
          evaluation of a product or service by a party that is not directly
          involved in its production or use.
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
              <b>What is Third-Party Inspection?</b>
            </div>
            <div className={classes.eachContent}>
              <ul>
                <li>
                  Third-party inspection is a quality control process where an
                  independent inspection agency is hired to inspect and evaluate
                  products, materials, or services on behalf of the buyer or
                  client. The third-party inspector performs inspections and
                  tests to ensure that the product or service meets the
                  specified requirements, standards, and regulations.
                </li>
                <br />
                <li>
                  Third-party inspection can be applied to a wide range of
                  industries such as construction, manufacturing, oil and gas,
                  and food processing. The inspection agency is responsible for
                  providing detailed reports that identify any issues, defects,
                  or deviations from the required specifications. The reports
                  are used by the buyer or client to make informed decisions
                  about the quality and safety of the product or service.
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.eachContents}>
            <div className={classes.contentHeading}>
              <b>What is Second-Party Inspection?</b>
            </div>
            <div className={classes.eachContent}>
              <ul>
                <li>
                  Second-party inspection is similar to third-party inspection,
                  but instead of an independent inspection agency, a
                  representative from the buyer or client performs the
                  inspection. In other words, the second-party inspector is
                  appointed by the buyer or client to assess the product or
                  service's quality, safety, and compliance.
                </li>
                <br />
                <li>
                  Second-party inspection is often used in situations where the
                  buyer or client wants to ensure that the supplier or
                  contractor is meeting their requirements and specifications.
                  It provides an additional layer of quality control and can
                  help build trust and accountability between the buyer and
                  supplier.
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.eachContents}>
            <div className={classes.contentHeading}>
              <b>
                Why are Third-Party Inspection and Second-Party Inspection
                Important?
              </b>
            </div>
            <div className={classes.eachContent}>
              <ul>
                <li>
                  Third-party inspection and second-party inspection services
                  are crucial for several reasons. First, they provide an
                  independent and objective evaluation of products and services,
                  ensuring that they meet the required standards and
                  regulations. Second, they help prevent product recalls, legal
                  disputes, and reputational damage caused by faulty or unsafe
                  products or services. Third, they provide a cost-effective way
                  to manage quality control and ensure compliance without the
                  need for expensive in-house resources.
                </li>
                <br />
                <li>
                  Benefits of Third-Party Inspection and Second-Party Inspection
                  Services Some of the benefits of third-party inspection and
                  second-party inspection services include:
                </li>{" "}
                <br />
                <li>
                  Objectivity: The inspection is conducted by an independent
                  party, ensuring an unbiased evaluation of the product or
                  service.
                </li>
                <br />
                <li>
                  Compliance: The inspection ensures that the product or service
                  meets the required standards, regulations, and specifications.
                  Risk Mitigation: Inspection services help identify and
                  mitigate risks associated with product quality, safety, and
                  compliance.
                </li>
                <br />
                <li>
                  {" "}
                  Quality Control: Inspection services help maintain consistent
                  quality and improve the overall quality control process.
                  Accountability: Inspection services help establish
                  accountability between the buyer and supplier, improving trust
                  and transparency in the business relationship.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inspection;
