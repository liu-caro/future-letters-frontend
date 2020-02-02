import React from "react";
import '../css/general.css';
import axios from "axios";
import {Card, Container, Button, Accordion, AccordionCollapse, AccordionToggle, ListGroupItem} from 'react-bootstrap';

class Letters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 'hello',
            letters: [],
            receivedLetters: []
        }
    }

    componentDidMount() {
        const {userId} = this.state;
        axios.get(`http://localhost:9000/:' + userId + '/get/letter`).then(response => {
            const letters = response.data;
            console.log(letters);
            this.setState({letters});
        });

        axios.get('http://localhost:9000/:' + userId + '/get/receivedLetters', {
            method: 'GET',
        }).then(response => {
            const receivedLetters = response.data;
            console.log(receivedLetters);
            this.setState({receivedLetters});
        });
    }

    render() {
        return (
<<<<<<< HEAD
            <Container className="letter-container">
                <Accordion defaultActiveKey="0">
                    <Card className="letter-card">
                        <Card.Body>
                            <Card.Title className="display-3"> My letters</Card.Title>
                        </Card.Body>
                        <Accordion.Toggle className="display-4" as={Card.Header} eventKey="1">
                            Incoming Letter, sent October 14, 2010
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Today I found a ring: Sent from May 3, 2018</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Toggle className="display-4" as={Card.Header} eventKey="2">
                            Dear Future Self: Delivered Jan 14, 2020
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body> Advice to my younger self: Delivered March 11, 2011</Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body> I hate high school!!!: Delivered April 1, 2010</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
=======
            <div className="bg-gradient-info">
            <Container className="letter-container bg-gradient-white">
            <Accordion defaultActiveKey="0">
            <Card className="letter-card">
                <Card.Body>
                    <Card.Title className="display-3"> My letters</Card.Title>
                </Card.Body>
                <Accordion.Toggle className="display-4" as={Card.Header} eventKey="1">
                Incoming Letter, sent October 14, 2010
                    </Accordion.Toggle>
                     <Accordion.Collapse eventKey="1">
                          <Card.Body>Today I found a ring: Sent from May 3, 2018</Card.Body>
                           </Accordion.Collapse>
                           <Accordion.Toggle className="display-4" as={Card.Header} eventKey="2">
                               Dear Future Self: Delivered Jan 14, 2020
                    </Accordion.Toggle>
                     <Accordion.Collapse eventKey="2">
                          <Card.Body>         Advice to my younger self: Delivered March 11, 2011</Card.Body>
                           </Accordion.Collapse>
                           <Accordion.Collapse eventKey="2">
                          <Card.Body>          I hate high school!!!: Delivered April 1, 2010</Card.Body>
                           </Accordion.Collapse>
            </Card>
            </Accordion>
>>>>>>> daef39674ab0a3ea80b703af34c38891081362d9
            </Container>
            </div>
        );
    }
}

export default Letters;