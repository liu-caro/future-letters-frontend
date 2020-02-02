import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import '../css/general.css';
import firebase from "../firebase";
import DatePicker from "react-datepicker";

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: null,
            body: null,
            timeDelivered: null,
            timeCreated: null,
            tags: []
        };
    }

    // TODO: add connector from backend endpoints

    render() {
        return (
            <Container>
                <h3>Tags</h3>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="letterDate">
                        <Form.Label>Send Date</Form.Label>
                    </Form.Group>
                </Form>
            </Container>
        );
    }

}

export default Tags;
