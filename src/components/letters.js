import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import '../general.css';
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
            timeDelivered: null,
            done: false
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {header, body, timeCreated, timeDelivered} = this.state;

    };

    render() {
        const {header, body, timeCreated, timeDelivered} = this.state;
        return (
            <Container>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="letterDate">
                        <Form.Label>Send Date</Form.Label>
                        <DatePicker
                            selected={this.state.date}
                            onSelect={this.handleSelect} //when day is clicked
                            onChange={this.handleChange} //only when value has changed
                        />
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
                    <Button variant="danger" type="submit" onClick={() => {
                        // connect to back end and run the algorithms

                    }}>
                        Done
                    </Button>
                    {this.state.done && <Tags />}
                </Form>
            </Container>
        );
    }
}

export default Letters;
