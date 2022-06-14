import { useState } from "react";

import "./Projects.scss";

import Head from "../../assets/Head.png";
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiFillGithub,
  AiFillEye,
} from "react-icons/ai";

const Projects = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

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
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <div className="slider-images">
                    <div className="project">
                      <img
                        src={slide?.image}
                        alt="image"
                        key={index}
                        className="slider-image"
                      />
                      <h1>{slide?.title}</h1>
                      <a href={slide.github} target="_blank"><AiFillGithub className="project-icon" /></a>
                      <a href={slide.live} target="_blank"><AiFillEye className="project-icon" /></a>
                      <p>{slide?.description}</p>
                      <div className="technologies">
                        {slide?.technologies?.map((technology, index) => {
                          return <div key={index} className="technology">{technology}</div>;
                        })}
                      </div>
                    </div>

                    {current + 1 === slides.length ? (
                      <div className="project project-2">
                        <img
                          src={slides[index - 1]?.image}
                          alt="image"
                          key={index - 1}
                          className="slider-image"
                        />
                        <h1>{slides[index - 1]?.title}</h1>
                        <a href={slides[index - 1].github} target="_blank"><AiFillGithub className="project-icon" /></a>
                        <a href={slides[index - 1].live} target="_blank"><AiFillEye className="project-icon" /></a>
                        <p>{slides[index - 1]?.description}</p>
                        <div className="technologies">
                          {slides[index - 1]?.technologies?.map((technology, index) => {
                            return <div key={index} className="technology">{technology}</div>;
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="project project-2">
                        <img
                          src={slides[index + 1]?.image}
                          alt="image"
                          key={index + 1}
                          className="slider-image"
                        />
                        <h1>{slides[index + 1]?.title}</h1>
                        <a href={slides[index + 1].github} target="_blank"><AiFillGithub className="project-icon" /></a>
                        <a href={slides[index + 1].live} target="_blank"><AiFillEye className="project-icon" /></a>
                        <p>{slides[index + 1]?.description}</p>
                        <div className="technologies">
                          {slides[index - 1]?.technologies?.map((technology, index) => {
                            return <div key={index} className="technology">{technology}</div>;
                          })}
                        </div>
                      </div>
                    )}

                  </div>
                )
                }
              </div>
            );
          })}
        </div>
      </div>
    </div >
  );
};

export default Projects;
