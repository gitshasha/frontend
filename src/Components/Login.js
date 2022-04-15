import React, { useContext, useEffect } from "react";
import { LoginContext } from "../LoginContext";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function Login() {
  const { user, auth, firestore } = useContext(LoginContext);
  const [loginuser] = user;
  const loginauth = auth;
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginuser != null) {
      navigate("/home");
    }
  }, [loginuser]);
  return (
    <div className="App">
      <section>
        <SignIn />
      </section>
    </div>
  );
}
function SignIn() {
  const { user, auth, firestore } = useContext(LoginContext);

  const loginauth = auth;

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    loginauth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}
function SignOut() {
  const { user, auth } = useContext(LoginContext);
  const [loginuser] = user;
  const loginauth = auth;
  const navigate = useNavigate();
  return (
    loginauth.currentUser && (
      <button
        className="sign-out"
        onClick={() => {
          loginauth.signOut();
          navigate("/");
        }}
      >
        Sign Out
      </button>
    )
  );
}
export { Login, SignOut };
