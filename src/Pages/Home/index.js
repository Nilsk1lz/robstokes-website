import React from "react";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import posts from "../Projects/posts.json";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";

function Welcome() {
  return (
    <Row>
      <Col xs={1}></Col>
      <Col>
        <Row style={{ marginTop: "60px", padding: "0px" }}>
          <Col xs={12} md={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h1>Rob</h1>
              <h1>
                Stokes<span style={{ color: "#E3AA49" }}>.</span>
              </h1>

              <div
                style={{
                  backgroundColor: "#E3AA49",
                  height: "2px",
                  width: "100px",
                  marginTop: "20px",
                }}
              ></div>
              <p style={{ marginTop: "10px" }}>
                Carving out a place on the internet
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div></div>
          </Col>
          <Col xs={12} md={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h4>INTRODUCTION</h4>
              <h2 style={{ textAlign: "left" }}>
                UI/UX Designer, Tinkerer, Home Automation Enthusiast, Hardware
                Hacker
              </h2>
              <p style={{ marginTop: "10px", textAlign: "left" }}>
                My day job is software development, but my spare time is 3D
                Printing, electronic building, home automating geekness.
              </p>
              <p style={{ textAlign: "left" }}>
                Available for moonlighting gigs, and website building.
              </p>
              <Link
                className={"read-more"}
                color="link"
                style={{ marginLeft: 0 }}
                to="/contact"
              >
                GET IN TOUCH!
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
}

export default function Home() {
  return (
    <>
      <Container
        style={{ width: "100%", margin: 0, padding: 0, maxWidth: "none" }}
      >
        <ParallaxBanner
          className="your-class"
          layers={[
            {
              image: "/assets/electronics.jpeg",
              amount: 0.2,
              props: {
                style: { opacity: 0.6 },
              },
            },
            {
              children: <Welcome />,
              amount: 0,
            },
          ]}
          style={{
            height: "700px",
            // opacity: 0.2,
          }}
        ></ParallaxBanner>
        <Row>
          <Col xs={1}></Col>
          <Col>
            <Row style={{ marginTop: "80px", padding: "0px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h5>PROJECTS</h5>
                <h2>My Latest Posts</h2>

                <div
                  style={{
                    backgroundColor: "#E3AA49",
                    height: "2px",
                    width: "100px",
                    marginTop: "20px",
                    marginBottom: "40px",
                  }}
                ></div>
              </div>
              {posts
                .slice(1)
                .slice(-4)
                .map((post) => {
                  return (
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <Card style={{ marginBottom: "20px" }}>
                        <CardImg
                          top
                          width="180px"
                          src={`/assets/${post.id}/thumb.png`}
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardTitle tag="h5">{post.title}</CardTitle>
                          <CardSubtitle>
                            {post.category.toUpperCase()}
                          </CardSubtitle>
                          <CardText style={{ height: "220px" }}>
                            {post.short_description}
                          </CardText>
                          <Link
                            className={"read-more"}
                            color="link"
                            style={{
                              position: "absolute",
                              left: "12px",
                              bottom: "12px",
                            }}
                            to={`/projects/${post.id}`}
                          >
                            Read More...
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    </>
  );
}
