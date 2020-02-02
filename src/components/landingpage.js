/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {Card, CardBody, CardTitle, Container, Row, Col, Button, Jumbotron} from "reactstrap";
import {Link, Route} from "react-router-dom";
import BottleWhite from "../images/BottleWhite.png";
import LogoBottle from "../images/LogoBottle.png";
import Typed from 'react-typed';

class LandingPage extends React.Component {
    render() {
        return (
            <>
             <Jumbotron fluid>
                 <div className = "header bg-gradient-info pb-8 pt-5 pt-md-8">
                 <Container fluid>
                      <h1 className="display-1">MiraiMessage</h1>
                      <img className="formatbottle" src={BottleWhite}></img>
                      <p className="lead">Hello there! Do you have something on your mind? Something that you want to vent of your system,
                      but no one to vent to? Write a letter to your future self!
                      Pick a date to deliver it by, and you might just recieve a reply ;)</p>
                        <div className="header-body">
                            {/* Card stats */}
                            <Row className="mt-4">
                                <Col lg="2">
                                    <Link to="login">
                                        <Button color="secondary">Get Started!
                                        </Button>
                                    </Link>
                                </Col>
                                <hr/>
                            </Row>
                        </div>
                    <div className="letter-area">
                        <div className="mt-5 ml-5">

                        <h1 className="mb-4">
                            Dear Future Me,
                        </h1>
                         <span className="mb-5">


                        </span>   
                        <Typed
                            className="mt-5 ml-3"
                            strings={[
                                'I want you to know that I am proud of your progress', 
                                'I want you to know that I love you',
                                'I want you to know that it is ok to ask for help']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop >
                        </Typed>
                        </div>
                    </div>    


                 </Container>
                 </div>
                 </Jumbotron>
            </>
            
        );
    }
}

export default LandingPage;
