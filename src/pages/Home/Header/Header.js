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
                    <h3>Arduino UNO v2</h3>
                    <p>Arduino Uno is a programmable opernsource microcontroller board</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50 mx-auto px-5"
                    src="https://m.media-amazon.com/images/I/51q83dEsrJS._AC_SX425_.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Raspberry Pi 4</h3>
                    <p>Worlds Most Smallest single board on chip Personal Computer</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50 mx-auto px-5"
                    src="https://m.media-amazon.com/images/I/814i3vQA01L._SL1500_.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Oscilloscope</h3>
                    <p> instrument that graphically displays varying electrical voltage</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Header;