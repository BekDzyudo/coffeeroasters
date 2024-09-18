// style
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
// image
import logo from "../../assets/shared/desktop/logo.svg";
import menu from "../../assets/shared/mobile/icon-hamburger.svg"

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/create-plan">CREATE YOUR PLAN</NavLink>
            </li>
          </ul>
        </div>
        <img className="menu" src={menu} alt="" />
      </div>
    </header>
  );
}

export default Navbar;
