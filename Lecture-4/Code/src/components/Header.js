import { useState } from "react";
import logo from "../../../Code/food-app.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <header className="flex">
      <div>
        <img src={logo} alt="Logo" className="w-75px"></img>
        <h1 className="logo-name">Deliverish</h1>
      </div>

      <nav>
        <ul>
          <li>Online Status: {onlineStatus === true ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery </Link>
          </li>
          <li>
            <Link to=""></Link>Cart
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
