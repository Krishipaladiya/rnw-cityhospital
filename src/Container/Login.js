import React from 'react'
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'

const Login = () => {
  return (
    <>
      <section id="appointment" className="appointment">
        <Container>
          <div className="section-title">
            <h2>Login</h2>
          </div>
          <Form className="php-email-form">
            <Row className="d-flex justify-content-center">
              <Col md={8}>
                <FormGroup className="mt-3 mt-md-0">
                  <Input
                    type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                  />
                  <div className="validate" />
                </FormGroup>
              </Col>
              <Col md={8}>
                <FormGroup className="mt-3 mt-md-0">
                  <Input
                    type="password" name="password" className="form-control" id="password" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter password" autoComplete="off"
                  />
                  <div className="validate" />
                </FormGroup>
              </Col>
            </Row>
            <div className="text-center">
              <Button
                type="submit" className='shadow-none'
              >
                Login
              </Button>
            </div>
            <Row className="text-center">
              <h6>Or</h6>
              <Col md={12}>
                <Button
                  type="submit" className='bg-white shadow-none' style={{ color: 'black', border: '1px solid' }}
                >
                  <img src="assets/img/google-logo.png" alt="" /> Sigin Using Google
                </Button>
              </Col>
            </Row>
            <div className="text-center">
              <div>
                <p className="d-inline mt-2">Create a new account: </p>
                <Button
                  className='btn btn-link bg-white shadow-none border-0'
                >
                  Signup
                </Button>
              </div>
            </div>
            <div className="text-center">
              <Button
                className='btn btn-link bg-white shadow-none border-0'
              >
                Forgot Password?
              </Button>
            </div>
          </Form>
        </Container>
      </section>
    </>
  )
}

export default Login