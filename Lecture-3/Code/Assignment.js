import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./starbucks-logo.png";
import user from "./user.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="user-icon">
        <img src={user} alt="User Icon" />
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
