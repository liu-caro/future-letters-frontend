import React from "react";
import '../css/general.css';
import {Card, Container, Button, Accordion, AccordionCollapse, AccordionToggle, ListGroupItem} from 'react-bootstrap';

class Letters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 'dummy%40@email.com',
            letters: [],
            receivedLetters: []
        }
    }

    componentDidMount() {
        const {userId} = this.state;
        fetch('http://localhost:9000/:' + userId + '/get/letter', {
            method: 'GET',
        }).then(response => {
            response.json().then(body => {
                this.setState({letters: body});
                console.log(response);
            });
        });

        fetch('http://localhost:9000/:' + userId + '/get/receivedLetters', {
            method: 'GET',
        }).then(response => {
            response.json().then(body => {
                this.setState({receivedLetters: body});
                console.log(response);
            });
        });
    }

    render() {
        return (
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
            </Container>
            </div>
        );
    }
}

export default Letters;