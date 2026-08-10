import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">News Tech</div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Technology</a>
        <a href="#">Business</a>
        <a href="#">Sports</a>
      </div>
    </nav>
  );
}

export default Navbar;