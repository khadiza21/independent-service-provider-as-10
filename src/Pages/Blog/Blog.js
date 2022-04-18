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
                Context provides a way to share values like these between
                components without having to explicitly pass a prop through
                every level of the tree.
              </li>
              <li>
                This is the alternative to "prop drilling" or moving props from
                grandparent to child to parent, and so on.
              </li>
              <li>
                Context is primarily used when some data needs to be accessible
                by many components at different nesting levels
              </li>
              <li>
                Apply it sparingly because it makes component reuse more
                difficult
              </li>

              <li>
                It is a much-needed assistant, helping readers define unknown
                words and make sense of outside information.
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className=" border-0 shadow rounded my-4">
          <Accordion.Header>
            <Fade bottom>
              <h5 className="fw-bold ques">  Why are you using firebase? What other options do you have to implement authentication?</h5>
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>
                Semantic HTML tags are those that clearly describe their meaning
                in a human- and machine-readable way
              </li>
              <li>
                A semantic element clearly describes its meaning to both the
                browser and the developer.
              </li>
              <li>
                Examples of semantic elements: form , table , and article -
                Clearly defines its content.
              </li>
              <li>
                {" "}
                Semantically correct HTML helps search engines, screen readers
              </li>
              <li>
                {" "}
                Other user devices determine the significance and context of web
                content
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className=" border-0 shadow rounded my-4">
          <Accordion.Header className="ques">
            <Fade top>
              <h5 className="fw-bold ques">
              What other services does firebase provide other than authentication?
              </h5>{" "}
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>
                When an element is styled with display:inline, it will not start
                on a new line, will only take up as much width as the content it
                contains, and will not cause a line break after it.
              </li>
              <li>
                The difference between an inline element and an inline-block
                element is that an inline-block element can take up specified
                width and height.
              </li>
              <li>
                But, it will also not start on a new line within its parent or
                cause a line break after it.
              </li>

              <li>
                inline The element doesn’t start on a new line and only occupy
                just the width it requires.
              </li>
              <li>
                {" "}
                Block-level elements create a larger structure than inline
                elements.
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
