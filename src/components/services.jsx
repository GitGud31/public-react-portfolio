import React from "react";
import "../styles/services.css";
import img from "../assets/Innovation.png";

const services = [
    {
        title: "Mobile Dev",
        content: "Builds Clean, Modern mobile application designs - Optimized for Performance. For Android and iOS.",
    },

    {
        title: "Web Dev",
        content: "Builds a modern and responsive design that makes your website accessible to all users, regardless of their device.",
    },

    {
        title: "Design",
        content: "Designs professional yet Amazing & Creative logo designs that reflects your company's personality and spirit.",
    },
];


function ServiceCard(props) {
    return (<div className="service">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
    </div>);
}

function Services() {
    return (
        <section id="services" className="services-section">
            <div className="services-title">
                <h1>SERVICE<span>S</span></h1>
            </div>
            <div className="services-content">
                <div className="service-img">
                    <img src={img} alt="" />
                </div>

                <div className="sized-box"></div>

                <div className="services-cards">
                    <ServiceCard title={services[0].title} content={services[0].content} />
                    <ServiceCard title={services[1].title} content={services[1].content} />
                    <ServiceCard title={services[2].title} content={services[2].content} />
                </div>
            </div>

        </section>
    );
}

export default Services;