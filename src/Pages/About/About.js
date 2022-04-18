import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import myVersion from "../../img/me.PNG";
import "./About.css";

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
              <h2 className="my-2 fs-2 fw-bold pb-3">Bibi Khadiza</h2>
            </Fade>
            <Fade top>
              <h3 className="my-2 fs-2 fw-bold pb-3 ">About My Goal </h3>
            </Fade>
            <Fade bottom>
              <p className="mt-3">
                And write a small paragraph (3-5 lines) about your goal.
                Learning a new skill. A common goal for engineers is learning a
                new skill. ... Attaining a new position. ... Creating a positive
                work-life balance. ... Expanding your network. ... Improving
                your efficiency. And how you will work hard to achieve your
                goal. Keep yourself motivated. ... Set your career goals. ...
                Prepare an action plan. ... Manage your time effectively. ...
                Accompany positive people. ... Take short breaks between work.
                ... Remove distractions.
              </p>
            </Fade>
            <Button className="btn my-3  fw-bold" variant="btn">
              See Me In Github
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
