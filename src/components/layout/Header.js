import React from "react";

const Header = () => {
  return (
    <div style={headerStyle}>
      <h1>Todo list</h1>
    </div>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
