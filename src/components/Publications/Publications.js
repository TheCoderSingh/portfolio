import "./Publications.scss";

import Head from "../../assets/Head.png";
import ReadMore from "../../assets/ReadMore.png";

const Publications = ({ publications }) => {
    return (
        <div id="publications">
            <div className="heading">
                <h1>Publications</h1>
                <img src={Head} alt="Heading Underline" />
            </div>
            <div className="publications">
                {publications.map((publication, index) => {
                    return (
                        <div className="publication" key={index}>
                            <img src={ReadMore} alt="Publication Icon" />
                            <a href={publication.link} target="_blank">{publication.title}</a>
                            <p>{publication.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Publications;
