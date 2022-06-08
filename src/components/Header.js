import "./Header.scss";

import Logo from "../assets/Logo.png";

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
    </div>
  );
};

export default Header;
