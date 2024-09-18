// style
import "./footer.scss";

// icons
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";
import logo from "../../assets/shared/desktop/logo.svg";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
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
        <div className="iconShow">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
