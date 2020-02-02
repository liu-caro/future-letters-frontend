import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import '../css/general.css';
import Tags from "./tags";
import DatePicker from "react-datepicker";
import firebase from "../firebase";

class Letters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: null,
            body: null,
            replyLetters: [],
            tags: null,
            timeCreated: null,
            timeDelivered: new Date(),
            done: false
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
        const {header, body, timeCreated, timeDelivered,} = this.state;
        // connect with backend
    };

    render() {
        const {header, body, timeCreated, timeDelivered} = this.state;
        return (
            <Container>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="letterDate">
                        <Form.Label>Send Date</Form.Label>
                        <DatePicker selected={timeDelivered} onChange={this.handleDate}/>
                    </Form.Group>
                    <Form.Group controlId="letterHeader">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Title"
                                      value={header} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="letterBody">
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" type="body" placeholder="Body"
                                      value={body} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="danger" onClick={() => {
                        // connect to back end and run the algorithms
                        this.state.done = true;
                        console.log(this.state.done);
                    }
                    }>
                        Done
                    </Button>

                    {this.state.done && <Tags/>}

                    <Button variant="secondary" type="submit">
                        Write
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Letters;
