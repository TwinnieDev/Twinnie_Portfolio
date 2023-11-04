/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

    const projects = [
        {
            title: "Project FrontEnd Landing Page",
            description: "Design & Development",
            imgUrl: projImg1,
            href: 'https://twinniedev.github.io/BurrgerNice/'
        },
        {
            title: "Project Clone FrontEnd Shoping Page",
            description: "Design & Development",
            imgUrl: projImg2,
            href: 'https://twinniedev.github.io/TwinGames/'
        },
        {
            title: "Project Portfolio Page",
            description: "Design & Development",
            imgUrl: projImg3,
            href: 'https://twinniedev.github.io/Twinnie_Portfolio/'
        },
        {
            title: "Project FrontEnd Landing Page",
            description: "Design & Development",
            imgUrl: projImg1,
            href: 'https://twinniedev.github.io/BurrgerNice/'
        },
        {
            title: "Project Clone FrontEnd Shoping Page",
            description: "Design & Development",
            imgUrl: projImg2,
            href: 'https://twinniedev.github.io/TwinGames/'
        },
        {
            title: "Project Portfolio Page",
            description: "Design & Development",
            imgUrl: projImg3,
            href: 'https://twinniedev.github.io/Twinnie_Portfolio/'
        },
    ];


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>
                                        This is a few projects i used to be do it. Project Shoping Page and Landing Page i was coded with HTML,CSS and JS
                                        But project Portfolio Page i'm code with reactJS. Please watch and rate me on a scale of 1 to 10 to my project.
                                        Hope to see your review soon
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Comming soon ...</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Comming soon ...</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}