import React, { useState } from "react";
import "./Form.css";

function Form() {
  let [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
  });

  function getValue(event) {
    let key = event.target.name;

    setData({
      ...data,
      [key]: event.target.value,
    });
  }

  return (
    <div className="form-section">
      <div className="form-container">
        <form action="">
          <input
            type="username"
            name="username"
            onChange={getValue}
            placeholder="username"
          />
          <input
            type="email"
            name="email"
            onChange={getValue}
            placeholder="email"
          />
          <input
            type="mobile"
            name="mobile"
            onChange={getValue}
            placeholder="phone"
          />

          <button type="submit" name="sumit" className="sub-button">
            Log in
          </button>
          <button type="submit" name="sumit" className="sign-button">
            Sign up
          </button>


        </form>

        {/* <div className="text">
          <h1>username : {data.username}</h1>
          <h1>email : {data.email}</h1>
          <h1>mobile : {data.mobile}</h1>
        </div> */}
      </div>
      
    </div>
  );
}

export default Form;
