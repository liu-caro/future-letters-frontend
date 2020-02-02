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
            <Container className="letter-container">
            <Accordion defaultActiveKey="0">
            <Card className="letter-card">
                <Card.Body>
                    <Card.Title className="display-2"> My letters</Card.Title>
                </Card.Body>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Letter numero uno
                    </Accordion.Toggle>
                     <Accordion.Collapse eventKey="0">
                          <Card.Body>Related letter 1</Card.Body>
                           </Accordion.Collapse>
                           <Accordion.Toggle as={Card.Header} eventKey="1">
                    Letter numero dos
                    </Accordion.Toggle>
                     <Accordion.Collapse eventKey="1">
                          <Card.Body>Related letter 1</Card.Body>
                           </Accordion.Collapse>
            </Card>
            </Accordion>
            </Container>
        );
    }
}

export default Letters;
