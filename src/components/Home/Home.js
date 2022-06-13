import "./Home.scss";

import Diamond from "../../assets/Diamond.png";
import Jas from "../../assets/Jas.png";

const Home = () => {
    return (
        <div id="home">
            <div className="info">
                <img src={Diamond} alt="Diamond" />
                <div className="info-text">
                    <h2>Hi! I'm Jaskaran</h2>
                    <h1>I develo<span>p high</span></h1>
                    <h1>quality we<span>b and</span></h1>
                    <h1>mobile</h1>
                    <h1>appli<span>cations</span></h1>
                </div>
            </div>
            <div className="main-img">
                <img src={Jas} alt="Jaskaran Picture" />
            </div>
        </div>
    );
}

export default Home;
