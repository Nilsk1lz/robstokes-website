import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Contact() {
  return (
    <Container>
      <Row style={{ marginTop: "0px", padding: "80px" }}>
        <Col xs={10} md={10}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1>
              Blog<span style={{ color: "#E3AA49" }}>.</span>
            </h1>

            <div
              style={{
                backgroundColor: "#E3AA49",
                height: "2px",
                width: "100px",
                marginTop: "20px",
              }}
            ></div>
            <p style={{ marginTop: "10px", textAlign: "left" }}>
              Coming Soon! (maybe)
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
