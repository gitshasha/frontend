import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../LoginContext";
function Createpost() {
  const [caption, setcaption] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const [description, setdescription] = useState("");
  const { user, auth, userdata } = useContext(LoginContext);

  const [usedata, setusedata] = userdata;
  // useEffect(() => {
  //   if (!user) {
  //     setAlert({
  //       variant: "danger",
  //       message: "Please sign in to make a post!",
  //     });
  //     navigate("/login");
  //   }
  // }, [user]);

  function uploadFile(e) {
    setFile(e.target.files[0]);
  }

  function makePost(e) {
    const formData = new FormData();
    formData.append("user", usedata.name);
    formData.append("caption", caption);
    formData.append("desc", description);
    formData.append("file", file);
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch("http://localhost:8000/createpost", requestOptions)
      .then((_res) => {
        alert("done");
        // setAlert({ variant: "success", message: "Post created!" });
        navigate("/home");
      })
      .catch((err) => console.log(err));
  }
  return (
    <form>
      <img
        src={file ? URL.createObjectURL(file) : null}
        className="post-image"
      />
      <input type="file" accept="image/*" onChange={uploadFile} />
      <input
        type="text"
        value={caption}
        placeholder="Enter the title"
        onChange={(e) => {
          setcaption(e.target.value);
        }}
      />{" "}
      <input
        type="text"
        value={description}
        placeholder="Enter description"
        onChange={(e) => {
          setdescription(e.target.value);
        }}
      />
      <button onClick={makePost}>Post</button>
    </form>
  );
}

export default Createpost;
