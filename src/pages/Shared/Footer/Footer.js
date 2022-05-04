import React from 'react';
import  './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
               <div className="container">
                   <div className="row">
                        <div className="footer-col">
                            <h4>About Solo Traveler</h4>
                            <ul>
                                <li><a href="https://www.google.com">About Us</a> </li>
                                <li><a href="https://www.google.com">Our Story</a> </li>
                                <li><a href="https://www.google.com">Our Services</a> </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Follow Us Online</h4>
                            <div className="social-links">
                               <a href="https://www.google.com"><i className="fab fa-facebook-f"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-twitter"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-instagram"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-linkedin-in"></i></a> 
                                
                            </div>
                        </div>
                   </div>
               </div>
               <h6 style={{color:'white', marginTop:'35px'}} className="text-center"> All © copyright reserved 2022-2023</h6>
           </footer>
        </div>
    );
};

export default Footer;