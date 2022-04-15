import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { LoginContext } from "../../LoginContext";
import Eachpost from "./Eachpost";
function Myposts() {
  const { user, auth, firestore } = useContext(LoginContext);
  const [loginuser] = user;
  const loginauth = auth;
  const [userdata, setuserdata] = useState({});
  useEffect(() => {
    if (loginuser) {
      console.log("SDd");
      axios
        .get(`http://localhost:8000/getuserposts/${loginuser.email}`)
        .then((data) => {
          setuserdata(data);
          console.log(userdata);
        });
    }
  }, []);
  return (
    <div>
      {/* {userdata &&
        userdata.data.posts.map((data, index) => {
          <Eachpost key={index} />;
        })} */}
    </div>
  );
}

export default Myposts;
