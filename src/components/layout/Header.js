import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={headerStyle}>
      <h1>Todo list</h1>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      |
      <Link to="/about" style={linkStyle}>
        About
      </Link>
    </div>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "white"
};

export default Header;
