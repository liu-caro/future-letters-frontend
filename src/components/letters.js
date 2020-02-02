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
            <div className="bg-gradient-info">
<<<<<<< HEAD
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
                         <Card>
                          <Card.Body>Today I found a ring: Sent from May 3, 2018</Card.Body>
                          <Card.Footer>It was just lying on in the sidewalk, so i picked it up.
                                        It looked like a wedding ring, a huge diamond was set on top gold.
                                        I wonder if it fell off someone's finger, or if it was dropped. It 
                                        reminded me of the ring that Bryan gave me 5 years ago.
                                        Sometimes I wonder  wonder why I still have it. Maybe
                                        I should throw mine on the sidewalk. In the afternoon....
                                        </Card.Footer>
                                        </Card>
                           </Accordion.Collapse>
                           <Accordion.Toggle className="display-4" as={Card.Header} eventKey="2">
                               Dear Future Self: Delivered Jan 14, 2020
                    </Accordion.Toggle>
                     <Accordion.Collapse eventKey="2">
                     <Card>
                          <Card.Body>         Advice to my younger self: Delivered March 11, 2011</Card.Body>
                          <Card.Footer> DONT. CUT. YOUR HAIR. It looks HORRIBLE and even if you think you
                              look super cool in those trousers, you're WRONG. Also please please please don't
                              quit the swim team! I know you hate practicing but it's so important to keep
                              your passions. You were so close to beating Michael's time....
                          </Card.Footer>
                          </Card>
                           </Accordion.Collapse>
                           <Accordion.Collapse eventKey="2">
                           <Card>
                          <Card.Body>          I hate high school!!!: Delivered April 1, 2010</Card.Body>
                          <Card.Footer> Everyone SUCKS and classes are SoOoOoOoO boring!!!
                            I hope you're having more fun in college. I bet you're partying it up EVERY day
                            and having a super fun time while im stuck at home doing homework. Life is so
                            unfair and I can't WAIT to grow up!!! I hate being young, i have to listen to
                            mom and dad all the time...
                          </Card.Footer>
                          </Card>
                           </Accordion.Collapse>
            </Card>
            </Accordion>
            </Container>
=======
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
                                <Card.Body> Advice to my younger self: Delivered March 11, 2011</Card.Body>
                            </Accordion.Collapse>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body> I hate high school!!!: Delivered April 1, 2010</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
>>>>>>> 92ce488f97f70eae33bc4d6c7fe79bf380406072
            </div>
        );
    }
}

export default Letters;
