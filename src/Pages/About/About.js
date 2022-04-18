import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import myVersion from "../../img/me.PNG";


const About = () => {
  return (
    <Container className="container my-5 py-3">
      <Row>
        <Col
          xs={12}
          md={6}
          className=" d-flex justify-content-center my-3 align-items-center "
        >
          <img className="img-fluid rounded h-75" src={myVersion} alt="" />
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center my-3 align-items-center "
        >
          <div className="px-4  text-justify">
            <Fade bottom>
              <h2 className="my-2 text-info fs-2 fw-bold pb-3">Bibi Khadiza</h2>
            </Fade>
            <Fade top>
              <h5 className="my-2 text-primary fw-bold pb-3 ">About My Goal </h5>
            </Fade>
            <Fade bottom>
              <p className="mt-3">
                And write a small paragraph (3-5 lines) about your goal. I'm
                Khadiza.I sudiet in Bcs in CSE . I want to be a Software
                Engineer. Now I want to be MERN Stack Developer. I love tech
                field so that I love to do this work. So my next shortterm goal
                is to be a Developer or MERN stack.And my leargest goal is To Be
                a Software Engineer.
              </p>
            </Fade>
            <br />
            <Fade top>
              <h5 className="my-2 text-primary fw-bold pb-3 ">
                How to Archive my Goal{" "}
              </h5>
            </Fade>
            <Fade bottom>
              <p className="mt-3">
                A common goal for engineers is learning a new skill.So, I'm
                focusing to gain new skill.Skills can be gain by day-by-day
                practice. So I should practice more and more.I have to dedicated
                about my goals. I shouldn't dissapointed about my loss moment.I
                should keep myself motivated.I will prepare an action plan and
                Manage my time effectively.I should accompany positive people
                .And finally achive my goal by my work hard and creative a
                positive work-life balance.
              </p>
            </Fade>
            <Button className="btn btn-primary   my-3  fw-bold" variant="btn">
              Connect With Me
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
