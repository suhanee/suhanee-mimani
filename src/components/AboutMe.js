import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import techskills from "../assets/img/techskills.png";
import "animate.css/animate.min.css";
import aboutheading from "../assets/img/aboutheading.png"


export const Aboutme = () => {
  
  return (
    <section className="aboutme" id="aboutme">
     
        <Row className="align-items-center" style={{ marginLeft: "5vw", paddingBottom:"8vw"}}>
          <Col className="skills">
            
            <img src={aboutheading} alt="aboutheading" className="aboutheading" style={{ width: "30vw", height: "auto" , paddingBottom: "20px"}} />
            <p>
            A <span style={{color: "#34527A"}}>final-year student at Symbiosis Institute of Technology</span>, I'm endlessly passionate about designing websites and creatives as a hobby. I've developed several projects in Python and interned at <span style={{color: "#D14311"}}>Microsoft as an Associate Consultant</span>, as well as at <span style={{color: "#413ED8"}}>Orufy as a Software Development Engineer</span>. Exploring OpenAI, learning UI/UX design excites me, and I'm also working on my knowledge of data structures and algorithms. Additionally, I also have an additional degree in <span style={{color: "#34527A"}}>diploma in business management from Symbiosis Institute Of Management Pune</span>, which gives me a knack for business. Inspired by Bunny from 'Yeh Jawaani Hai Deewani,' I believe in living life with the motto of 'Main udna chahta hu, daudna chahta hu, ghirna bhi chahta hun, bas rukna nahi chahta.' 
            </p>
            
          </Col>
          <Col className="skills d-flex justify-content-end">
            <img src={techskills} alt="skills" className="techskills" style={{ width: "30vw", height: "auto" }} />
          </Col>
        </Row>
      
    </section>
  )
}

