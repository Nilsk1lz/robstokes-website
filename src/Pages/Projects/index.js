import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import posts from './posts.json';

export default function Projects(props) {
    return (
        <Container>
            <Row style={{ marginTop: '0px', padding: '80px' }}>
                <Col xs={10} md={10}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h1>
                            My Projects<span style={{ color: '#E3AA49' }}>.</span>
                        </h1>

                        <div
                            style={{
                                backgroundColor: '#E3AA49',
                                height: '2px',
                                width: '100px',
                                marginTop: '20px',
                            }}
                        ></div>
                        <p style={{ marginTop: '10px', textAlign: 'left' }}>
                            Below are a few of the projects i've been working on over the past year or so. Some are
                            complete, some are still just "proof of concepts".{' '}
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                {posts.map((post) => {
                    return (
                        <Col xs="12" sm="12" md="6" lg="4" xl="3">
                            <Card style={{ marginBottom: '20px' }}>
                                <CardImg top width="180px" src={`/assets/${post.id}/thumb.png`} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{post.title}</CardTitle>
                                    <CardSubtitle>{post.category.toUpperCase()}</CardSubtitle>
                                    <CardText style={{ height: '220px' }}>{post.short_description}</CardText>
                                    <Link
                                        className={'read-more'}
                                        color="link"
                                        style={{ position: 'absolute', left: '12px', bottom: '12px' }}
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
        </Container>
    );
}
