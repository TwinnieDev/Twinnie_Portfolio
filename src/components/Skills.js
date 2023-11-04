/* eslint-disable jsx-a11y/img-redundant-alt */
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col >
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                I have knowledge about HTML, CSS, SASS, Javascript, framework: ReactJS,Bootstrap,Jquery
                                a little PHP, ASP and Manual Testing.
                                I can do Manual Testing and become the Tester if you want.
                                I can write test script, test case, know skill testing ex:
                                "Equivalence partitioning","Boundary value analysis","Decision Tables",... 
                                good English skill
                                and good skills Microsoft Office: (World, Excel, Power Ponit)
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>UX/UI Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <image className="background-image-legt" src={colorSharp} />
        </section>
    )
}