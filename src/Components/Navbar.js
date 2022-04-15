import React from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <Link to="/home">
            <h3 className="title">Mimic</h3>
          </Link>
          <ul className="navlink">
            <li className="lin">
              <Link to="/allposts">All posts</Link>
            </li>
            <li className="lin">
              <Link to="/createpost">Create post</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
