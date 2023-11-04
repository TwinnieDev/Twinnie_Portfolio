/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import HeaderImg from '../assets/img/header-img.svg'
import { useEffect, useState } from "react"
import 'animate.css'
import TrackVisibility from "react-on-screen"


export const Banner = () => {

    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(300)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <div className="text-animation">
                                        <h1>{`Hi I'm Twinnie `} <br></br>
                                            <span className="wrap">{text}</span>
                                        </h1>
                                    </div>
                                    <p>
                                        Hi! My name is Huỳnh Minh Thuyên. You can call me Twinnie.I live in Ho Chi Minh City.
                                        Welcome to my Portfolio. Let "enjoy cái momment này".
                                        I graduated from College of "Cao đẳng Kinh tế - Công nghệ TP.HCM".
                                        Major: software technology and have a Manual Test course certificate.
                                        Personality: hardworking, sociable, cheerful,... Near future orientation:
                                        Become a professional Frontend Developer, learn new knowledge, become an excellent employee who brings a lot of value to the company

                                    </p>
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt='Header Img' />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

