import "./Home.scss";

import Diamond from "../../assets/Diamond.png";
import Jas from "../../assets/Image.png";

const Home = () => {
  return (
    <div>
      <div id="home">
        <div className="info">
          <img src={Diamond} alt="Diamond" />
          <div className="info-text">
            <h2>Hi! I'm Jaskaran</h2>
            <h1>
              I develo<span>p high</span>
            </h1>
            <h1>
              quality we<span>b and</span>
            </h1>
            <h1>mobile</h1>
            <h1>
              appli<span>cations</span>
            </h1>
          </div>
        </div>
        <div className="main-img">
          <img src={Jas} alt="Jaskaran" />
        </div>
      </div>
      <div className="main-btns">
        <div className="contact-btn">
          <a
            href="https://drive.google.com/file/d/10aYW7LgLUKZ9gMHFTHKg3g7mWT6zz1Cl/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            My Resume
          </a>
        </div>
        <div className="contact-btn">
          <a href="#contact">Get in touch</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
