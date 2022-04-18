import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Fade, Flip } from "react-reveal";
import banner from "../../../img/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <Container className="container my-5 py-3">
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center my-3 align-items-center "
        >
          <div className="px-2  text-justify">
            <Flip top>
              <h1 className="my-2 ban-t">TRALIVE BK </h1>
            </Flip>
            <Fade bottom>
              <h5 className="mt-3">
                Happy Travel with best guide. Let’s start your journey with us,
                your dream will come true.
              </h5>
            </Fade>
            <Button className="btn btn-primary my-3 fw-bold" variant="btn">
              SEE MORE
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="my-3">
          <img className="img-fluid rounded " src={banner} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
