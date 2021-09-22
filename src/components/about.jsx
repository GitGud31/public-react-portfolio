import React from "react";

import CvButton from "./cv-button";
import profileImg from "../assets/profile-img.png";

import "../styles/about.css";

function About() {
    return (<section className="about-section">



        <div className="about-content">

            <div className="about-title">
                <h1>About <span>me</span></h1>
            </div>

            <div className="about-main-text">
                <h6>
                    LEHBAB M'Hamed loves Reading, Cycling, Designing, Programming and Breaking things to fix them later.
                    Now he graduated, he works as a freelancer.
                    He also, does not love talking about himself in the 3rd person.
                </h6>
            </div>

            <CvButton>download cv</CvButton>

        </div>

        <div className="sized-box"></div>

        <div className="profile-img">
            <img src={profileImg} alt="" />
        </div>

    </section>);
}

export default About;