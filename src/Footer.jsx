import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <h2>
            <span>NEWS</span> TECH
          </h2>

          <p>
            News, technology and ideas for
            the digital generation.
          </p>
        </div>

        <div className="footer-column">
          <h3>Categories</h3>

          <a href="#technology">Technology</a>
          <a href="#business">Business</a>
          <a href="#sports">Sports</a>
          <a href="#education">Education</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <a href="#home">About Us</a>
          <a href="#home">Contact</a>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms</a>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>

          <a href="#home">Instagram</a>
          <a href="#home">LinkedIn</a>
          <a href="#home">Twitter / X</a>
          <a href="#home">YouTube</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 News Tech. All rights reserved.
        </p>

        <p>
          Built with React + Vite
        </p>
      </div>

    </footer>
  );
}

export default Footer;