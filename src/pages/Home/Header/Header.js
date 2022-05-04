import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-50 text-center mx-auto px-5"
                    src="https://www.arduino.cc/en/uploads/Main/A000066_iso_both.jpg"
                    alt="First slide"
                    
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50 mx-auto px-5"
                    src="https://m.media-amazon.com/images/I/51q83dEsrJS._AC_SX425_.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50 mx-auto px-5"
                    src="https://m.media-amazon.com/images/I/814i3vQA01L._SL1500_.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Header;