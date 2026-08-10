import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <span>NEWS</span> TECH
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#technology">Technology</a>
          <a href="#business">Business</a>
          <a href="#sports">Sports</a>
          <a href="#education">Education</a>
        </div>

        <button className="search-button">
          Search
        </button>
      </nav>

      <div className="breaking-bar">
        <div className="breaking-label">BREAKING</div>

        <div className="breaking-text">
          Latest technology, business and digital world updates
        </div>
      </div>
    </>
  );
}

export default Navbar;