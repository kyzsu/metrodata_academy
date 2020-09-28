import React, { useState } from "react";

const [values, setValues] = useState({
  firstName: "",
  lastName: "",
  email: "",
});
const [submitted, setSubmitted] = useState(false);

const handleFirstNameInputChange = (event) => {
  event.persist();
  setValues((values) => ({
    ...values,
    firstName: event.target.value,
  }));
};

const handleLastNameInputChange = (event) => {
  event.persist();
  setValues((values) => ({
    ...values,
    lastName: event.target.value,
  }));
};

const handleEmailInputChange = (event) => {
  event.persist();
  setValues((values) => ({
    ...values,
    email: event.target.value,
  }));
};

export default function Latihan() {
  return (
    <div className="form-container">
      <form className="register-form">
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="last Name"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        <input
          id="email"
          className="form-field"
          type="email"
          placeholder="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
      </form>
      {/* {showSuccess && <div className="success-message">Success!</div>} */}
    </div>
  );
}
