import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Simulate } from 'react-dom/test-utils';
import Site from './../../img/site.png'

const Extrasection = () => {
    return (
        <div>
            <h2 className='text-center py-3'>Key Features</h2>
            <Container>
                <Row>
                    <Col className='shadow p-3 mb-5 bg-white rounded mx-3'>
                        <img src="" alt="" />
                        <h3>Inventory Mangement</h3>
                        <p>Inventory Management allows you to create one product and configure multiple same products .
                        </p>
                    </Col>
                    <Col className='shadow p-3 mb-5 bg-white rounded mx-3'>
                        <img src="" alt="" />
                        <h3>Excelent UI Experience</h3>
                        <p>User Can sign Up and Update the Inventory and add Item</p>
                    </Col>
                    <Col className='shadow p-3 mb-5 bg-white rounded mx-3'>
                        <img src="" alt="" />
                        <h3>Update Inventory</h3>
                        <p>Inventory Management allows you to create one product and configure multiple same products .</p>
                    </Col>
                </Row>
            </Container>


            {/* <Container>
                <Row>
                    <Col>
                        <Row> Unlilmited Prooduct</Row>
                        <Row> Unlilmited Prooduct</Row>
                        <Row> Unlilmited Prooduct</Row>
                    </Col>
                    <Col>
                        <img className='w-100' src={Site} alt="" />
                    </Col>
                </Row>
            </Container> */}
        </div>
    );
};

export default Extrasection;