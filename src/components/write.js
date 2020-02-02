import React from 'react';
import {Container, Form, Button, Col} from 'react-bootstrap';
import '../css/general.css';
import Prompt from "./prompt";
import Tags from "./tags";
import DatePicker from "react-datepicker";

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
        const {header, body} = this.state;

        // connect with backend
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
                    <h1>Write a letter to yourself!</h1>
                    <Form className="form" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="letterDate">
                            <Form.Label>Send Date</Form.Label>
                            <DatePicker selected={timeDelivered} onChange={this.handleDate}/>
                        </Form.Group>
                        <Prompt prompts={prompts}/>
                        <Form.Group controlId="letterHeader">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="title" placeholder="Title"
                                          value={header} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="letterBody">
                            <Form.Label>Body</Form.Label>
                            <Form.Control className="letter-body" as="textarea" type="body" placeholder="Body"
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
