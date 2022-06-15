import "./Skills.scss";

import Head from "../../assets/Head.png";
import HTML from "../../assets/HTML5.png";
import CSS from "../../assets/CSS3.png";
import SASS from "../../assets/SASS.png";
import JS from "../../assets/JS.jpeg";
import Jquery from "../../assets/Jquery.svg";
import Nodejs from "../../assets/Nodejs.svg";
import React from "../../assets/React.png";

const Skills = () => {
    return (
        <div id="skills">
            <div className="heading">
                <h1>Skills</h1>
                <img src={Head} alt="Heading Underline" />
            </div>
            <div className="skills">
                <img src={HTML} alt="HTML Logo" />
                <img src={CSS} alt="CSS Logo" />
                <img src={SASS} alt="SASS Logo" />
                <img src={JS} alt="Javascript Logo" />
                <img src={Jquery} alt="Jquery Logo" />
                <img src={Nodejs} alt="Node.js Logo" />
                <img src={React} alt="ReactJS Logo" />
            </div>
        </div>
    );
};

export default Skills;
