import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  
  const [
    signInWithEmailAndPassword,
    user,
    // loading,
    // error,
  ] = useSignInWithEmailAndPassword(auth);



  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;


    signInWithEmailAndPassword(email, password)

  
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  if (user) {
    navigate("/home");
  };

  return (
    <div className="container w-50 mx-auto my-5 py-5">
      <h3 className="text-primary text-center mt-2">Please LoiIn</h3>
      <Form onSubmit={handleSubmit} className="mt-5 pt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
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
            ref={passwordRef}
            type="password"
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
          New to Tralve BK?{" "}
          <Link to="/register" onClick={navigateRegister} className="text-decoration-none text-danger pe-auto">
            Please Register
          </Link>{" "}
        </p>
    </div>
  );
};

export default Login;
