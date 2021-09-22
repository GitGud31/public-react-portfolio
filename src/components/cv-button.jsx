import React from "react";
import {Button} from "react-bootstrap";

import "../styles/cv-button.css";


function CvButton({children}) {

    return (
        <Button className="btn-cv" href="/CV_eng.pdf" target="_blank" download="CV_eng.pdf">{children}</Button>
    );
}

export default CvButton;