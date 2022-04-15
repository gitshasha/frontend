import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./Components/Createpost";
import Allposts from "./Components/Allposts";
import { Login } from "./Components/Login";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Landing from "./Components/Landing";
import { UserProvider } from "./LoginContext";
import Navbar from "./Components/Navbar";
import { PostsProvider } from "./AllpostsContext";
import Setting from "./Components/Setting";
function App() {
  // const [alert, setAlert] = useState("");
  // const [user, setUser] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <UserProvider>
          <PostsProvider>
            <Routes>
              <Route path="/home" element={<Home />} exact />

              <Route path="/allposts" element={<Allposts />} exact />
              <Route path="/login" element={<Login />} exact />
              <Route path="/createpost" element={<CreatePost exact />} />
              <Route path="/profile" element={<Profile />} exact />
              <Route path="/setting" element={<Setting />} exact />
              <Route path="/signup" element={<Signup />} exact />
              <Route path="/" element={<Landing />} exact />
              {/* <Route
                path="/signup"
                element={<Signup setAlert={setAlert} setUser={setUser} exact />}
              /> */}
            </Routes>
          </PostsProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
