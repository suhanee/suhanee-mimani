import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';
import pothole from "../assets/img/pothole.png";
import span from "../assets/img/span.png";
import pet from "../assets/img/pet.png";
import parking from "../assets/img/parking.png";
import dashboard from "../assets/img/dashboard.png";
import bank from "../assets/img/bank.png";

const carouselData = [
  { id: 1},
  { id: 2},
];
export const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="projects" id="projects">
      <Container className="projectssec">
      <h2>Projects</h2>
      <Row>
          <Col md={4} className="carousel2" style= {{paddingLeft: `35px`, paddingRight: `35px`}}> 
            <Slider {...settings}>
              {carouselData.map((item, index) => (
                <div key={item.id}>
                  {index === 0 ? ( 
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">AI-Based One Stop Pet Adoption Platform</h5>
                        <img src={pet} alt="prj" className="image"/>
                      </div>
                    </div>
                  ) : ( 
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title2">AI-Based One Stop Pet Adoption Platform</h5>
                        <p className="card-texth">Technology used: Keras, Tensorflow, Matplotlob, CNN, VueJS</p>
                        <p className="card-text">In this project, the goal was to create a comprehensive solution for pet lovers, offering a one-stop platform for all their needs. My team strongly believes in the mantra "every animal deserves a loving home," and our focus was on developing a "return-proof adoption" process. The primary users of this platform are adopters and listers on the pet adoption marketplace. We employed content-based filtering techniques to enhance user interaction and improve the efficiency of the pet adoption process.</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </Col>
          <Col md={4} className="carousel2" style= {{paddingLeft: `35px`, paddingRight: `35px`}}>
            
            <Slider {...settings}>
              {carouselData.map((item, index) => (
                <div key={item.id}>
                  {index === 0 ? ( 
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">Smart Parking System using Internet of Things</h5>
                        <img src={parking} alt="prj" className="image"/>
                      </div>
                      
                    </div>
                  ) : ( 
                    <div className="card">
                      <div className="card-body text-center">
                        
                        <h5 className="card-title2">Smart Parking System using Internet of Things</h5>
                        <p className="card-texth">Hardware used:  IR Sensors, Arduino UNO Unit, Servo Motors, Wires, Bread-Boards and LCD for display </p>
                        <p className="card-text">The challenge of finding parking spots for students outside our college escalated, requiring more than just security guards for proper management. This led to the development of a smart parking system encompassing both hardware and software components. The team achieved a 98% accuracy in recognizing parking availability. Upon deployment in a parking lot, the model is anticipated to deliver a 30% reduction in the time spent searching for parking areas.</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </Col>
          <Col md={4} className="carousel2" style= {{paddingLeft: `35px`, paddingRight: `35px`}} >
            <Slider {...settings}>
              {carouselData.map((item, index) => (
                <div key={item.id}>
                  {index === 0 ? ( 
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">Attention Span Detection in Online Classes</h5>
                        <img src={span} alt="prj" className="image" />
                      </div>
                      
                    </div>
                  ) : ( 
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title2">Attention Span Detection in Online Classes</h5>
                        <p className="card-texth">Technology used: Py-Feat, Euler's Angle, Python, T-Test, FEX Detection</p>
                        <p className="card-text"> Worked with a team to develop an attention span detection system tailored for online classes. We analyzed head pose and calculated Euler's angles to evaluate attention levels, achieving an accuracy of 85%. Our approach offers a solution for measuring disengagement levels. This system could be used in offline classes, improving the educational settings. Additionally, it can be modified to provide teachers with valuable insights into where students may be losing attention to modify their way of teaching.</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="carousel2" style= {{paddingLeft: `35px`, paddingRight: `35px`}} >
            
            <Slider {...settings}>
              {carouselData.map((item, index) => (
                <div key={item.id}>
                  {index === 0 ? ( 
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">Pothole Detection and Severity Analysis</h5>
                        <img src={pothole} alt="prj" className="image"/>
                      </div>
                      
                    </div>
                  ) : ( 
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title2">Pothole Detection and Severity Analysis</h5>
                        <p className="card-texth">Technology used: YoloV8, OpenCV, Python, Streamlit, Machine Learning</p>
                        <p className="card-text">I collaborated with a team of four to develop a pothole detection system that focuses on road safety. Our efforts if implemented in real life can lead to a 45% reduction in accidents and a 25% decrease in vehicular damage. We designed a user-friendly interface to integrate the model, enabling users to adjust model confidence levels and view detected potholes along with their extremities. This project can not only enhance road safety but also provide valuable data-driven insights for road maintenance and management.</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </Col>
          <Col md={4} className="carousel2" style= {{paddingLeft: `35px`, paddingRight: `35px`}}>
          <Slider {...settings}>
              {carouselData.map((item, index) => (
                <div key={item.id}>
                  {index === 0 ? ( 
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">HR Analytics Dashboard Development using PowerBI</h5>
                        <img src={dashboard} alt="prj" className="image"/>
                      </div>
                      
                    </div>
                  ) : ( 
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title2">HR Analytics Dashboard Development</h5>
                        <p className="card-texth">Technology used: Power BI, Excel</p>
                        <p className="card-text">The dashboard developed provides a comprehensive analysis and visualization of data, enabling informed decision-making. It offers real-time insights that can significantly enhance workforce productivity and employee satisfaction. By presenting key metrics and trends, the dashboard empowers users to quickly identify areas for improvement and implement targeted strategies. With its user-friendly interface and interactive features, the dashboard serves as a valuable tool for organizations seeking to optimize their operations.</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </Col>
          <Col md={4} className="carousel2" style= {{paddingLeft: `35px`, paddingRight: `35px`}}>
          <Slider {...settings}>
              {carouselData.map((item, index) => (
                <div key={item.id}>
                  {index === 0 ? ( 
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title"> Online Bank Management and Financial Services</h5>
                        <img src={bank} alt="prj" className="image" />
                      </div>
                      
                    </div>
                  ) : ( 
                    <div className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title2"> Online Bank Management and Financial Services</h5>
                        <p className="card-texth">Technology used: MySQL, Java</p>
                        <p className="card-text">Created a bank application using Java in IntelliJ to streamline banking operations and enhance the customer experience by 75%. The application offers a user-friendly interface for various banking transactions, including deposits, withdrawals, and account inquiries. Additionally, we optimized the MySQL database, leading to improved data management and system performance by 30%. These enhancements have significantly improved the efficiency of banking operations, resulting in a more seamless experience for customers and bank staff alike.</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


