import logo from "../../../Code/food-app.png";

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
