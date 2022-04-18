import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import explore from "../../../img/explore.PNG";

const Explore = () => {
  return (
    <Container className="container my-5 py-5">
      <Row>
        <Col
          xs={12}
          md={6}
          className=" d-flex justify-content-center my-3 align-items-center "
        >
          <img className="img-fluid rounded h-75" src={explore} alt="" />
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center my-3 align-items-center "
        >
          <div className="px-4  text-justify">
            <Fade bottom>
              <h2 className="my-2 fs-2 fw-bold pb-3">
                Exploration is really <br />
                the essence of <br />
                the human spirit
              </h2>
            </Fade>

            <Fade bottom>
              <p className="mt-3">
                Make she'd moved divided air. Whose tree that replenish tone
                hath own upon them it multiply was blessed is lights make
                gathering so day dominion so creeping air was made.
              </p>
            </Fade>
            <Button className="btn btn-primary   my-3  fw-bold" variant="btn">
              Learn More
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Explore;
