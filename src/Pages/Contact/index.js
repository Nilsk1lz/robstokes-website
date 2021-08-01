import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

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
              Contact Me<span style={{ color: "#E3AA49" }}>.</span>
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
              Available for moonlighting gigs, and website building.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Row>
            <Col sm={12} xl={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "330px",
                  height: "60px",
                  alignContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "#2e2e35",
                  paddingLeft: "24px",
                  marginBottom: "20px",
                  marginRight: "20px",
                }}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  style={{ marginRight: "20px" }}
                />
                <h3 style={{ marginTop: "6px" }}>rob_stokes@me.com</h3>
              </div>
            </Col>
            <Col sm={12} xl={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "330px",
                  height: "60px",
                  alignContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "#2e2e35",
                  paddingLeft: "24px",
                  marginBottom: "20px",
                  marginRight: "20px",
                }}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  size="lg"
                  style={{ marginRight: "20px" }}
                />
                <h3 style={{ marginTop: "6px" }}>07906 888994</h3>
              </div>
            </Col>
            <Col sm={12} xl={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "330px",
                  height: "60px",
                  alignContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "#2e2e35",
                  paddingLeft: "24px",
                  marginBottom: "20px",
                  marginRight: "20px",
                }}
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  size="lg"
                  style={{ marginRight: "20px" }}
                />
                <h3 style={{ marginTop: "6px" }}>robstokes.co.uk</h3>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
