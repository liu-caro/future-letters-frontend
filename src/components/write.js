import React from 'react';
import {Container, Form, Button, Col} from 'react-bootstrap';
import '../css/general.css';
import Prompt from "./prompt";
import Tags from "./tags";
import DatePicker from "react-datepicker";
import axios from "axios";

class Write extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "hi",
            header: "hi",
            tags: "hi",
            timeCreated: new Date(),
            timeDeliver: new Date()
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
        const {body, header, tags, timeCreated, timeDeliver} = this.state;
        axios.post('http://localhost:9000/letter/create', {
            body: body, header: header, tags: tags, timeCreated: timeCreated, timeDeliver: timeDeliver
        }).then(response => {
            this.setState(response);
            console.log(response);
        });
    };

    render() {
        const {header, body, timeDeliver} = this.state;

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
                            <DatePicker selected={timeDeliver} onChange={this.handleDate}/>
                        </Form.Group>
                        <Prompt prompts={prompts}/>
                        <Form.Group controlId="letterHeader">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="title" placeholder="Title" name="header"
                                          value={header} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="letterBody">
                            <Form.Label>Body</Form.Label>
                            <Form.Control className="letter-body" as="textarea" type="body" name="body"
                                          placeholder="Body"
                                          value={body} onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Done
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Write;
