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

class LandingPage extends React.Component {
    render() {
        return (
            <>
             <Jumbotron fluid>
                 <div className = "header bg-gradient-purple pb-8 pt-5 pt-md-8">
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


                 </Container>
                 </div>
                 </Jumbotron>
            </>
            
        );
    }
}

export default LandingPage;
