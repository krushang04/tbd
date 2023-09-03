import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import classes from "./Contact.module.css";

const url = "http://tbdengineering.in/sent-query";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [query, setQuery] = useState("");
  const [isError, setIsError] = useState(true);

  const handleResetForm = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setCountryCode("");
    setMobileNumber("");
    setCompanyName("");
    setQuery("");
  };

  useEffect(() => {
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      countryCode.length === 0 ||
      mobileNumber.length === 0 ||
      companyName.length === 0 ||
      query.length === 0
    ) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [
    firstName,
    lastName,
    email,
    countryCode,
    mobileNumber,
    companyName,
    query,
  ]);

  async function sendEmail(data) {
    try {
      toast("Email Sending.....");
      const response = await axios.post(url, data);
      if (response.data.status_code === 200) {
        toast.success("Email Sent Successfully");
      } else {
        toast.error("Try Again After Some Time");
      }
    } catch (error) {
      toast.error("Something Wrong Happened");
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (isError) {
      toast.error("Please Fill All The Information");
    } else {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        countryCode: countryCode,
        mobileNumber: mobileNumber,
        companyName: companyName,
        query: query,
      };

      sendEmail(data);
    }
  };

  return (
    <>
      <form className={classes.contactForm}>
        <div className={classes.formHeading}>Get Quote</div>
        <div className={classes.fields}>
          <label htmlFor="fname" className={classes.labelClass}>
            First Name:{" "}
          </label>
          <input
            type="text"
            placeholder="Enter Your First Name"
            className={classes.field}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div className={classes.fields}>
          <label htmlFor="lname" className={classes.labelClass}>
            Last Name:{" "}
          </label>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            className={classes.field}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div className={classes.fields}>
          <label htmlFor="email" className={classes.labelClass}>
            Email:{" "}
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className={classes.field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className={classes.fields}>
          <label htmlFor="number" className={classes.labelClass}>
            Mobile No:{" "}
          </label>
          <input
            placeholder="Country Code"
            type="text"
            className={classes.countryCode}
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          />
          <input
            placeholder="Enter Your Mobile Number"
            type="text"
            className={classes.mobileNumber}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          ></input>
        </div>
        <div className={classes.fields}>
          <label htmlFor="number" className={classes.labelClass}>
            Company Name:{" "}
          </label>
          <input
            placeholder="Enter Your Company Name"
            type="text"
            className={classes.field}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          ></input>
        </div>
        <div className={classes.fields}>
          <label htmlFor="name" className={classes.labelClass}>
            Details:{" "}
          </label>
          <textarea
            className={classes.textField}
            rows={4}
            cols={50}
            placeholder="Enter Your Details"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button
            type="reset"
            className={classes.action}
            onClick={handleResetForm}
          >
            Cancel
          </button>
          {isError ? (
            <button
              type="submit"
              className={classes.actionDisabled}
              onClick={handleSubmitForm}
              // disabled={isError}
            >
              Send
            </button>
          ) : (
            <button
              type="submit"
              className={classes.action}
              onClick={handleSubmitForm}
              // disabled={isError}
            >
              Send
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Contact;
