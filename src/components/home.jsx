/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../styles/home.css";
import hi from "../assets/hi.gif";
import biglogo from "../assets/bigbrandlogo.svg";
import Typewriter from "typewriter-effect";
import fb from "../assets/icon-facebook.svg";
import gh from "../assets/icon-github.svg";
import ig from "../assets/icon-instagram.svg";
import lk from "../assets/icon-linkedin.svg";
import tw from "../assets/icon-twitter.svg";

const texts = ["Embedded systems engineer", "Flutter developer", "Web developer", "UX/UI Designer"];

function Home() {

    return (<section className="home-section">
        <div className="main-content">
            <div className="main-text">
                <h3>Howdy! <img className="gif" src={hi} alt="hi" />
                    <br />
                    I'm LEHBAB M'HAMED and I am, 
                    <div className="typer">
                        <Typewriter options={{
                            strings: texts,
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            skipAddStyles: false,
                            deleteSpeed: 3,
                            pauseFor: 700,
                        }} />
                    </div>
                </h3>

                <div className="social-icons">
                    <a href="https://www.facebook.com/m.lehbab.sama/" target="_blank"><img src={fb} alt="facebook-icon" /></a>
                    <a href="https://twitter.com/medlehbab724" target="_blank"><img src={tw} alt="twitter-icon" /></a>
                    <a href="https://www.instagram.com/m_lehbab/" target="_blank"><img src={ig} alt="instagram-icon" /></a>
                    <a href="https://www.linkedin.com/in/m-hamed-l-b70185185/" target="_blank"><img src={lk} alt="linkedin-icon" /></a>
                    <a href="https://github.com/GitGud31" target="_blank"><img src={gh} alt="github-icon" /></a>
                </div>
            </div>

            <div className="big-logo">
                <img src={biglogo} alt="logo" />
            </div>
        </div>
    </section>);
}

export default Home;