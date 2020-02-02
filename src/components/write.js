import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col,
    Row
  } from "reactstrap";
import '../css/general.css';
import Prompt from "./prompt";
import Tags from "./tags";
import DatePicker from "react-datepicker";
import ReactDatetime from "react-datetime";
import CalIcon from "../images/cal.png";

class Write extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: null,
            body: null,
            timeDelivered: new Date()
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleDate = date => {
        this.setState({
            startDate: date
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {header, body, timeDelivered} = this.state;

        fetch('http://localhost:9000/letter/create', {
            method: 'POST',
            // body: data
        }).then(response => {
            response.json().then(body => {
                this.setState({ header, body, timeDelivered});
                console.log(response);
            });
        });
    };

    render() {
        const {header, body, timeDelivered} = this.state;

        // list of prompts
        const prompts = ["What are you thankful for today?", "Who do you wish you talked to more?",
            "What do you wish you did differently this year and why?",
            "What are you proud of today?", "What's something that's been on your mind lately?",
            "What's something you really want to do in the next year?", "Who is someone you wish you said thank you to?",
            "What made you smile today?", "What advice do you wish you gave yourself a year ago?", "Where do you see yourself in 3 years?",
            "What is something you wish you changed about yourself?", "What makes you unique?", "Who do you care about?",
        ];
        return (
            <div>
                <Container>
                    
                    <Form className="form" onSubmit={this.handleSubmit}>
                        <h1 className="display-3">Write a letter to yourself!</h1>
                        <Form.Group controlId="letterDate">
                            <Form.Label>Send Date</Form.Label>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <img className="class-icon" src={CalIcon}></img>
                                </InputGroupText>
                                </InputGroupAddon>
                                <ReactDatetime
                                inputProps={{
                                    placeholder: "Deliver to myself on"
                                }}
                                timeFormat={false}
                                />
                            </InputGroup>
                            {/* <DatePicker selected={timeDelivered} onChange={this.handleDate}/> */}
                        </Form.Group>
                        <Prompt prompts={prompts}/>
                        <Form.Group controlId="letterHeader">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="title" placeholder="Main idea of letter"
                                          value={header} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="letterBody">
                            <Form.Label>Body</Form.Label>
                            <Form.Control className="letter-body" as="textarea" type="body" placeholder="What do you want to tell yourself?"
                                          value={body} onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="danger" onClick={() => {
                        }
                        }>
                            Done
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Write;
