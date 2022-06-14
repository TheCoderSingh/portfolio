import { useState } from "react";

import "./Projects.scss";

import Head from "../../assets/Head.png";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const Projects = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id="projects">
            <div className="heading">
                <h1>Projects</h1>
                <img src={Head} alt="Heading Underline" />
            </div>

            <div className="projects-showcase">
                <div className="top-arrows">
                    <AiFillLeftCircle className="left-arrow" onClick={prevSlide} />
                    <AiFillRightCircle className="right-arrow" onClick={nextSlide} />
                </div>

                <div className="slider">
                    <AiFillLeftCircle className="left-arrow" onClick={prevSlide} />
                    <AiFillRightCircle className="right-arrow" onClick={nextSlide} />

                    {slides.map((slide, index) => {
                        return (
                            <div className={index === current ? "slide active" : "slide"} key={index}>
                                {index === current && (
                                    <div className="slider-images">
                                        <img src={slide.image} alt="image" key={index} className="slider-image" />

                                        {current + 1 === slides.length ?
                                            <img src={slides[index - 1].image} alt="image" key={index - 1} className="slider-image slider-image-second" /> :
                                            <img src={slides[index + 1].image} alt="image" key={index + 1} className="slider-image slider-image-second" />
                                        }
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
