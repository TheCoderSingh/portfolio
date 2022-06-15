import "./Contact.scss";

import Head from "../../assets/Head.png";
import { AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact">
            <div className="heading">
                <h1>Contact</h1>
                <img src={Head} alt="Heading Underline" />
            </div>
            <div className="contact">
                <div className="contact-left">
                    <div className="contact-left-top">
                        <div className="contact-text">
                            <h2>Let&apos;s grab a coffee!</h2>
                            <p>Please feel free to ping me if you’d like to grab a coffee and want to chat. You can connect with me on social media or send me a message here.</p>
                        </div>
                    </div>
                    <div className="contact-left-bottom">
                        <a href="https://linkedin.com/in/TheCoderSingh" target="_blank" className="contact-btn">
                            <AiFillLinkedin className="contact-icon" />
                            <span>@TheCoderSingh</span>
                        </a>
                        <a href="https://twitter.com/TheCoderSingh" target="_blank" className="contact-btn">
                            <AiFillTwitterSquare className="contact-icon" />
                            <span>@TheCoderSingh</span>
                        </a>
                        <a href="https://instagram.com/CoderSingh" target="_blank" className="contact-btn">
                            <AiFillInstagram className="contact-icon" />
                            <span>@CoderSingh</span>
                        </a>
                        <a href="https://github.com/TheCoderSingh" target="_blank" className="contact-btn">
                            <AiFillGithub className="contact-icon" />
                            <span>@TheCoderSingh</span>
                        </a>
                        <a href="mailto:thecodersingh@gmail.com" target="_blank" className="contact-btn">
                            <FaEnvelope className="contact-icon" />
                            <span>thecodersingh@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div className="contact-right">
                    <form action="https://formsubmit.co/thecodersingh@gmail.com" method="POST">
                        <input placeholder="Name" name="name" />
                        <input placeholder="Email" type="email" name="email" />
                        <textarea placeholder="Message" name="message"></textarea>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;