// import React, { useRef } from 'react';
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  // const emailRef = useRef("");
  // const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
 

   console.log(name,email,password);
  };

  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div className="container w-50 mx-auto my-5 py-5">
      <h3 className="text-primary text-center mt-2">Please Register</h3>
      <Form onSubmit={handleRegister} className="my-5 py-5">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            // ref={emailRef}
            name="name"
            type="text"
            placeholder="Enter Name"
            required
          />
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            // ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-decoration-none text-danger pe-auto"
        >
          Please LogIn
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
