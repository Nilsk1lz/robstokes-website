import React from "react";
import { Container, Row, Col } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <div style={{ height: "2px", backgroundColor: "#e3aa49" }}></div>
            <div
              style={{
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              Copyright - Rob Stokes, 2021
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Example;
