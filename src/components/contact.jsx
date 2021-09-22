import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from 'emailjs-com';

import "../styles/contact.css";
import mailImg from "../assets/mail.png";


const useFormSubmit = () => {
    const ref = useRef();
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        sendEmail(ref, setInputs);
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputs(
            inputs => ({
                ...inputs,
                [event.target.name]: event.target.value
            })
        );
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs,
        ref
    };
}

const sendEmail = function (form, setInputs) {

    // (YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID) can be found in your Emailjs account
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_USER_ID")
        .then((result) => {
            setInputs({ name: "", email: "", message: "" });
        }, (error) => {
            throw error;
        });
};

function Contact() {
    const { handleSubmit, handleInputChange, inputs, ref } = useFormSubmit();

    return (<section className="contact-section">

        <div className="contact-content">
            <div className="contact-title">
                <h1>contact <span>me</span></h1>
            </div>

            <div className="contact-main-text">
                <h6>
                    Always open to opportunities!
                    Got an intersting project ? Let's work together!
                </h6>
                <h6>Send me an Email and I'll respond as soon as possible.</h6>
            </div>

            <div className="mail-img">
                <img src={mailImg} alt="" />
            </div>
        </div>

        <div className="sized-box"></div>

        <div className="contact-form">
            <Form
                ref={ref}
                onSubmit={handleSubmit}
                autoComplete="off">

                <Form.Group controlId="username">
                    <Form.Label >Full name</Form.Label>
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Michael Scott"
                        required
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={inputs.name} />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={inputs.email} />
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Label >Your message</Form.Label>
                    <Form.Control
                        name="message"
                        as="textarea"
                        rows={3}
                        required
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={inputs.message} />
                </Form.Group>

                <Button className="submit-button" type="submit">
                    Submit
                </Button>
            </Form>
        </div>


    </section>);
}

export default Contact;