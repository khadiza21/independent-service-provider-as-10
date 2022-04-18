import React from "react";
import { Accordion } from "react-bootstrap";
import { Bounce, Fade } from "react-reveal";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="my-5 py-5">
      <Bounce top>
        <h2 className=" b-text text-center mt-5  pt-5 fw-bold">OURS BLOGS</h2>
      </Bounce>
      <Accordion className="container my-3 py-2 " defaultActiveKey="0">
        <Accordion.Item eventKey="0" className=" border-0 shadow rounded my-4">
          <Accordion.Header>
            <Fade top>
              <h5 className="fw-bold ques">
                Difference between authorization and authentication?
              </h5>
            </Fade>{" "}
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>
                Authentication is the first step of a secuirity access control.
                But Authorization comes after authentication.
              </li>
              <li>
                Authentication verifies the user's identity but authorization
                grants permission to the user do something.
              </li>
              <li>
                Authentication is visible by the user but authorization is
                invisible by the user.
              </li>
              <li>
                Authentication is changeable by the user but authorization
                cann't changeable by the user.
              </li>

              <li>
                Authentication transmit info through an ID token but
                authorization send through an access token.
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className=" border-0 shadow rounded my-4">
          <Accordion.Header>
            <Fade bottom>
              <h5 className="fw-bold ques">
            
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h5>
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
         <h5>Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app.Firebase system is easy and safe.In firebase Growth and User Engagement is awesome.Firebase Increase my Earnings.That's why I using firebase.</h5>
         <ol>
           <h5>Of course. Have other options have to
                implement authentication.</h5>
                <li>Basic -HTTP Basic Authentication is rarely recommended due to its inherent security vulnerabilities.</li>
                <li>Bearer - Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens.</li>
                <li>OAuth - OAuth 2.0 is the best choice for identifying personal user accounts and granting proper permissions. ETc.</li>
             

         </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className=" border-0 shadow rounded my-4">
          <Accordion.Header className="ques">
            <Fade top>
              <h5 className="fw-bold ques">
                What other services does firebase provide other than
                authentication?
              </h5>{" "}
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
            <h5>
              There are many services which Firebase provides, Most useful of
              them are:
            </h5>
            <ol>
              <li>Cloud Firestore.</li>
              <li>Cloud Storage and Hosting</li>
              <li>Cloud Functions</li>
              <li> Google Analytics.</li>
              <li>Predictions and Cloud Messaging etc.</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
