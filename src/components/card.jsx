import React, { useState } from "react";
import { Card, Carousel, Modal } from "react-bootstrap";

import "../styles/card.css";

export function ProjectCard({ title, description, category, imgLink, repo }) {


    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(true);
    }

    return (
        <>
            <Card className="project-card" >
                <Card.Img className="card-img" variant="top" src={imgLink[0]} />
                <Card.Text>{title}</Card.Text>
                <Card.Link onClick={() => handleShow()}>Expand</Card.Link>
            </Card>

            <Modal
                show={show}
                size="lg"
                onHide={() => setShow(false)}>

                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">{title}</Modal.Title>
                </Modal.Header>

                <Carousel className="modal-caroussel">
                    {imgLink.map((img, k) =>

                        <Carousel.Item key={k}>
                            <img className="modal-img" src={img} alt="" />
                        </Carousel.Item>)
                    }
                </Carousel>

                <Modal.Body>
                    {description}
                </Modal.Body>

                {
                    (repo === "")
                        ?
                        <><br /></>

                        :
                        <Modal.Footer>
                            <><br /></>
                            <Card.Link className="project-link" href={repo} target="_blank">open link</Card.Link>
                        </Modal.Footer>
                }

            </Modal>
        </>
    );
}