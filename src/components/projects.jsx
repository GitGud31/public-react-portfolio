import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./arrows";
import { ProjectCard } from "./card";

import Assets from "../assets/assetspath";

import "../styles/projects.css";

const projects = [

    /* Hirfa */
    {
        title: "Hirfa",
        description: `Hirfa is an app that helps you find skilled handymen near you, 
        whether you're new to the neighborhood or have trouble deciding which handymen to choose, with Hirfa consider it done. 
        - Contact your nearest handyman directly on the main page. - Post an ad with your specifications and get a response from experienced handymen. 
        - If you are a handyman don't worry anymore. 
        Hirfa is here to promote you, customers will be able to contact you directly, discuss and show your skills.`,
        category: "mobile",
        link: "https://play.google.com/store/apps/details?id=hextech.gg.corp.hirfa",
        img: [
            Assets.assets[0][0],
            Assets.assets[0][1],
            Assets.assets[0][2],
            Assets.assets[0][3],
            Assets.assets[0][4],
        ],
    },

    /* DoEm */
    {
        title: "Do'Em",
        description: `Do'Em is a note-taking mobile application for Android & iOS built with Flutter and Firebase. 
        Do'Em helps you organize your daily tasks in a check-list or as notes and save them on the Cloud. You don't have Internet? 
        No problem Do'Em caches your work and synchronizes it once you're online again. 
        The Application is presented in a beautiful user friendly UI with Two theme modes.`,
        category: "mobile",
        link: "https://play.google.com/store/apps/details?id=com.doem.doem_v2",
        img: [
            Assets.assets[1][0],
            Assets.assets[1][1],
            Assets.assets[1][2],
            Assets.assets[1][3],
            Assets.assets[1][4],
            Assets.assets[1][5],
            Assets.assets[1][6],
        ],
    },

    /* BFast */
    {
        title: "BFast",
        description: `BFast is a reaction game with multiple modes for users to test their reflexes. 
        Mode1: In this mode, while the screen is GREY , user have to wait, when the screen turns YELLOW user have to click. 
        If they click while screen is GREY, they will be redirected to TOO SOON screen which will reset the timer When the screen is YELLOW, 
        a timer counts the period since the screen turned YELLOW, and when the user taps on it they are shown the SCORE screen.
        
        Mode2: In this mode, after user clicks the start button, 
        'Bees' appear on the screen, user have to TAP them before they disapear. 'Bees' Appear Randomly on the SCREEN. 
        User gets [+1 score] for every HIT (before timer runs out). User gets [-1 life] point for MISS. After 3 misses SCORE screen is presented.
        
        Mode3: In this mode (Arrows mode). User have to follow (with gesture) the 'Bee that is pointing in some direction' shape displayed on the screen. 
        If he/she misses or doesn't touch (the screen) after a period of time they lose.
        
        Mode4: Similar to Mode2 but, with 2 kind of dots 'Wasps' and 'Bees'. User must **CLICK (Kill)** only the 'wasps' to gain points. 
         - 'Objects' appear randomly and quick in the screen.
         - 'Objects' disapear after being clicked.
        `,
        category: "mobile",
        link: "https://github.com/GitGud31/BFast-game",
        img: [
            Assets.assets[2][0],
            Assets.assets[2][1],
            Assets.assets[2][2],
            Assets.assets[2][3],
            Assets.assets[2][4],
            Assets.assets[2][5],
        ],
    },

    /* GNews */
    {
        title: "GNews",
        description: `GNews (Global News) is a personalized news application for Android and iOS that organizes 
        and highlights what’s happening in the world so you can discover more about the stories that matter to you. 
        The app offers: Two Theme modes Dark & Light, Save your favorite Articles locally, Search by Category & Keywords, 
        all presented in a beatiful modern UI.`,
        category: "mobile",
        link: "",
        img: [
            Assets.assets[3][0],
            Assets.assets[3][1],
            Assets.assets[3][2],
            Assets.assets[3][3],
            Assets.assets[3][4],
            Assets.assets[3][5],
            Assets.assets[3][6],
            Assets.assets[3][7],
        ],
    },

    /* Teleport */
    {
        title: "Teleport",
        description: `Teleport was my Master's degree final project. As a whole, 
        Teleport is a Cloud based system, made to control a telepresence robot remotly using Flutter, ROS (Robotic Operating System) and AWS Serverless. 
        Telepresence robots like this are usefull for inspections and troubleshooting at factories and patient rounds at medical facilities.`,
        category: "mobile",
        link: "https://github.com/GitGud31/PFE-Teleport",
        img: [
            Assets.assets[4][0],
        ],
    },

    /* carte fiedelite */
    {
        title: "Carte Fidèlité",
        description: `A loyalty card design for a supermarket
        `,
        category: "design",
        link: "",
        img: [
            Assets.assets[5][0],
            Assets.assets[5][1],
            Assets.assets[5][2],
            Assets.assets[5][3],
        ],
    },

    /* Cigma */
    {
        title: "Cigma couture",
        description: "A design for a sewing shop",
        category: "design",
        link: "",
        img: [
            Assets.assets[6][0],
            Assets.assets[6][1],
            Assets.assets[6][2],
            Assets.assets[6][3],
            Assets.assets[6][4],
            Assets.assets[6][5],
            Assets.assets[6][6],
        ],
    },
];


const getItems = () =>
    projects.map((p, key) => ({
        id: key,
        title: p.title,
        category: p.category,
        link: p.link,
        description: p.description,
        img: p.img,
    }));


function Projects() {
    let [items, setItems] = useState(getItems);

    const filterHandler = (i) => {

        items = getItems();

        switch (i) {
            case 1:
                items = getItems();
                break;

            case 2:
                items = items.filter(project => (project.category === "mobile"));
                break;

            case 3:
                items = items.filter(project => (project.category === "web"));
                break;

            case 4:
                items = items.filter(project => (project.category === "design"));
                break;

            default:
                items = getItems();
                break;
        }

        setItems(items);
    }

    return (<section className="projects-section">
        <div className="projects-title">
            <h1>PROJECT<span>S</span></h1>
        </div>

        <div className="projects-content">
            <div className="filter">
                <ButtonGroup>
                    <Button onClick={() => filterHandler(1)} size="sm" className="btn-filter">all</Button>
                    <Button onClick={() => filterHandler(2)} size="sm" className="btn-filter">mobile</Button>
                    <Button onClick={() => filterHandler(3)} size="sm" className="btn-filter">web</Button>
                    <Button onClick={() => filterHandler(4)} size="sm" className="btn-filter">design</Button>
                </ButtonGroup>
            </div>

            <ScrollMenu
                wrapperClassName="slider"
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                onWheel={onWheel}>

                {
                    items.map(function (project) {

                        return <ProjectCard
                            key={project.id}
                            itemId={project.id}
                            title={project.title}
                            description={project.description}
                            repo={project.link}
                            category={project.category}
                            imgLink={project.img}
                        />
                    })
                }
            </ScrollMenu>

        </div>

    </section>);
}

export default Projects;


function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}