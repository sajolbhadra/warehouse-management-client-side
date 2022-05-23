import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Extrasection = () => {
    return (
        <div>
            <h2>Extra</h2>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Extrasection;