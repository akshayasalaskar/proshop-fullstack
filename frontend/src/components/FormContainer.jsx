import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FormContainer = (props) => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={16}>
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormContainer;
