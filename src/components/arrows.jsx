import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";
import "../styles/arrow.css";

function Arrow({
    children,
    disabled,
    onClick
}) {
    return (
        <div
            className="arrow"
            disabled={disabled}
            onClick={onClick}>
            <img src={children} alt="" />
        </div>
    );
}

export function LeftArrow() {

    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Arrow disabled={false} onClick={() => scrollPrev()}>
            {rightArrow}
        </Arrow>
    );
}

export function RightArrow() {

    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Arrow disabled={false} onClick={() => scrollNext()}>
            {leftArrow}
        </Arrow>
    );
}
