import { useState } from "react";
import logo from "../../../Code/food-app.png";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo"></img>
        <h1 className="logo-name">Deliverish</h1>
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
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
