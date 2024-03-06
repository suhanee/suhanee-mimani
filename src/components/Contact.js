import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon3 from '../assets/img/email.png';
import footer from "../assets/img/footer.png";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    message: ""
  });

  return (
    <section className="contact" id="contact">
      <Container className="maincontact">
        <Row className="align-items-center">
          <Col >
            <div className="contactcard">
              <h2>Get In Touch</h2>
              <h3>Let's work Together</h3>
              <p>
                Embracing innovation and staying at the forefront of
                technology is a shared passion, and I believe our
                collaboration will be a dynamic fusion of creativity and
                expertise. Together, we can navigate the evolving landscape
                of advancements, contributing to solutions and pushing the
                boundaries of what's possible. I look forward to the synergy
                of our skills and the exciting journey of exploring, learning,
                and creating in the realm of the latest technological frameworks.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <a href="mailto:mimanisuhanee@gmail.com">
                  <img style={{ width: "40px" }} src={navIcon3} alt="" />
                </a>
                <p style={{ paddingTop: "15px" }}>
                  mimanisuhanee@gmail.com
                </p>
              </div>
            </div>
          </Col>

          <Col >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <form>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value
                            })
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value
                            })
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value
                            })
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          value={formData.phoneNo}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phoneNo: e.target.value
                            })
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value
                            })
                          }
                        ></textarea>
                        <button
                          type="button"
                          onClick={() => {
                            const {
                              firstName,
                              lastName,
                              email,
                              phoneNo,
                              message
                            } = formData;
                            const emailBody = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone No.: ${phoneNo}\nMessage: ${message}`;
                            const mailtoLink = `mailto:mimanisuhanee@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
                              emailBody
                            )}`;
                            window.open(mailtoLink);
                          }}
                        >
                          Send
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <footer
        className="footer"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <h4>Let's connect and create something amazing together! </h4>
        <h6>Crafted with passion and precision by Suhanee Mimani </h6>
        
      </footer>
    </section>
  );
};
