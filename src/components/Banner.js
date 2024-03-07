import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/temp2.png";
import navIcon1 from '../assets/img/githuborg.png';
import navIcon2 from '../assets/img/linkedin.png';
import navIcon3 from '../assets/img/email.png';
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "UI/UX Designer", "Software Engineer", "Data Analyst"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home" style={{ position: "relative" }}>
      <img src={headerImg} alt="Header Img" style={{ width: "100%", height: "auto", paddingBottom:"2vw" }} />
      <Container className="textmain" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Row className="align-items-top">
          <Col md={6}>
            
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>{`Hi! I'm Suhanee`}</h1>
                  <h2>
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "UI/UX Designer", "Software Engineer", "Data Analyst"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p> An optimistic go-getter who takes pleasure in not only motivating but also entertaining those in my orbit while pursuing success.</p>
                </div>

              )}
            </TrackVisibility>
            
            <Row>
              <Col className="social-icon">
                <div style={{ display: 'flex', paddingTop: '7vw', alignItems: 'center', gap:'1vw', width: '10vw' }}>
                  <a href="https://github.com/suhanee"><img src={navIcon1} alt="" /></a>
                  <a href="https://www.linkedin.com/in/suhanee-mimani/"><img src={navIcon2} alt="" /></a>
                  <a href="mailto:mimanisuhanee@gmail.com"><img src={navIcon3} alt="" /></a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
