import React, { useEffect, useState } from "react";

import { LoginContext } from "../LoginContext";
import { useContext } from "react";
import { SignOut } from "./Login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const { user, auth, userdata, error } = useContext(LoginContext);
  const [loginuser] = user;
  const loginauth = auth;
  const [usedata, setusedata] = userdata;
  const navigate = useNavigate();
  const [useerror, setusererror] = error;
  useEffect(() => {}, []);
  return (
    <div>
      {usedata.post &&
        usedata.post.map((data, index) => (
          <div key={index}>
            <h1>{data.title}</h1>
            <img src={data.mainImage.asset.url} alt="" />
          </div>
        ))}
      <SignOut />
    </div>
  );
}

export default Home;
