import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AllpostsContext = createContext();

export const PostsProvider = (props) => {
  const [getallposts, setgetallposts] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/getallposts").then((data) => {
      setgetallposts(data);
    });
  }, []);

  return (
    <AllpostsContext.Provider
      value={{
        getallposts: [getallposts, setgetallposts],
      }}
    >
      {props.children}
    </AllpostsContext.Provider>
  );
};
