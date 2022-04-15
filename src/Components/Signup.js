import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LoginContext } from "../LoginContext";
import axios from "axios";
function Signup({ setAlert, setUser }) {
  const [username, setUsername] = useState("");
  const [useremail, setuseremail] = useState("");
  const navigate = useNavigate();
  const { user, auth } = useContext(LoginContext);
  const [loginuser] = user;
  const loginauth = auth;
  function createAccount(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/createuser", {
        name: username,
        email: useremail,
      })
      .then((res) => {
        console.log(res.data);
        loginauth.signOut();
        navigate("/");
      });
  }
  function updateUsername(e) {
    setUsername(e.target.value);
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="ENTER FIRSTNAME"
          value={username}
          onChange={updateUsername}
        />
        <input
          type="text"
          placeholder="ENTER Email"
          value={useremail}
          onChange={(e) => {
            setuseremail(e.target.value);
          }}
        />
        <button onClick={createAccount}>Submit </button>
      </form>
    </>
  );
}

export default Signup;
