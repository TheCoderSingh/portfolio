import "./Header.scss";

import Logo from "../assets/Logo.png";
import MenuIcon from "../assets/Menu.png";

const Header = () => {
  return (
    <div id="header">
      <a href="/" className="logo-area">
        <img src={Logo} alt="Logo" />
        <h1>Jaskaran Singh</h1>
      </a>
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/">Projects</a>
        <a href="/">Skills</a>
        <a href="/">Publications</a>
        <a href="/">Contact</a>
      </div>
      <div className="navbar-mobile">
        <img src={MenuIcon} alt="Menu Icon" className="navbar-mobile-icon" />
        <div className="navbar-mobile-container">
          <div className="navbar-mobile-items">
            <a href="/">Home</a>
            <a href="/">Projects</a>
            <a href="/">Skills</a>
            <a href="/">Publications</a>
            <a href="/">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
