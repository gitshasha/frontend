import { createContext, useEffect, useState } from "react";
import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export const LoginContext = createContext();

firebase.initializeApp({
  apiKey: "AIzaSyBVJA1bSXJYSdin8Qr9nkGvffSEKV_1yj0",
  authDomain: "socialdev-2165b.firebaseapp.com",
  projectId: "socialdev-2165b",
  storageBucket: "socialdev-2165b.appspot.com",
  messagingSenderId: "948983541977",
  appId: "1:948983541977:web:1d8ecdce4747590fd08ec8",
  measurementId: "G-L3E9Y810V1",
});

const auth = firebase.auth();

const firestore = firebase.firestore();
export const UserProvider = (props) => {
  const [user] = useAuthState(auth);
  const [userdata, setuserdata] = useState({});

  const [error, seterror] = useState({});
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:8000/getuser/${user.email}`)
        .then((data) => {
          setuserdata(data.data[0]);
        })
        .catch((err) => {
          seterror(err);
        });
    }
  }, [user]);
  return (
    <LoginContext.Provider
      value={{
        user: [user],
        auth: auth,
        firestore: firestore,
        userdata: [userdata, setuserdata],
        error: [error, seterror],
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
