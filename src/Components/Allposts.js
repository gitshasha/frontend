import React, { useContext } from "react";
import { AllpostsContext } from ".././AllpostsContext";
import "../Styles/allposts.css";
function Allposts() {
  const { getallposts } = useContext(AllpostsContext);
  const [allpost, setallpost] = getallposts;
  console.log(allpost);
  return (
    <div>
      {allpost.data &&
        allpost.data.map((data, index) => (
          <div className="eachproject" key={index}>
            <div className="projectimage">
              <img src={data.mainImage.asset.url} alt="" />
            </div>
            <div className="projectcontent">
              {" "}
              <div className="projecttitle">
                <h1>{data.title}</h1>
                <p>{data.body}</p>
              </div>
              <div className="projectinfo">{data.info}</div>
            </div>
            <div className="projectlink">
              <p>Git</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Allposts;
