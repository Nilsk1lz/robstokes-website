import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { ParallaxBanner } from "react-scroll-parallax";
import posts from "./posts.json";

export default function Project() {
  const { params } = useRouteMatch("/projects/:id");
  const [project, setProject] = useState();

  useEffect(() => {
    if (params.id) {
      const post = posts.find((p) => p.id === params.id);
      if (post) setProject(post);
    }
  }, [params]);

  return project ? (
    <Container>
      <Row style={{ marginTop: "0px", padding: "80px" }}>
        <Col xs={12}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1>
              {project.title}
              <span style={{ color: "#E3AA49" }}>.</span>
            </h1>
            <div
              style={{
                backgroundColor: "#E3AA49",
                height: "2px",
                width: "100px",
                marginTop: "20px",
                marginBottom: "40px",
              }}
            ></div>
            <ParallaxBanner
              className="full-opacity"
              layers={[
                {
                  image: "/assets/" + project.id + "/image.png",
                  amount: 1,
                },
              ]}
              style={{
                height: "200px",
              }}
            ></ParallaxBanner>
            <div style={{ margin: "20px" }}></div>
            {typeof project === "string"
              ? project.post.split("\n").map((p) => {
                  return (
                    <p style={{ marginTop: "10px", textAlign: "left" }}>{p}</p>
                  );
                })
              : project.post.map((section) => {
                  return (
                    <div>
                      {section.subheader ? (
                        <h3 style={{ marginTop: "10px", textAlign: "left" }}>
                          {section.subheader}
                        </h3>
                      ) : null}
                      <p style={{ marginTop: "10px", textAlign: "left" }}>
                        {section.post}
                      </p>
                    </div>
                  );
                })}
          </div>
        </Col>
      </Row>
    </Container>
  ) : (
    <div></div>
  );
}
