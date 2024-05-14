import { CgBrowser } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import Head from "../../assets/Head.png";
import "./Projects.scss";

const Projects = ({ data }) => {
  return (
    <div id="projects">
      <div className="heading">
        <h1>Projects</h1>
        <img src={Head} alt="Heading Underline" />
      </div>

      <div className="projects-gallery">
        {data.map((project) => (
          <div className="project">
            <img src={project.image} alt={`${project.title}`} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="links">
              <a href={project.live} target="_blank" rel="noreferrer">
                <CgBrowser />

                <span>View Live</span>
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
