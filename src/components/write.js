import React from 'react';
import {Container, Form, Button, Col} from 'react-bootstrap';
import '../css/general.css';
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
        return (
            <Container>
                <h1>Write a letter to yourself!</h1>
                <Col lg="6">
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
                            <Form.Control className="letter-body" as="textarea" type="body" placeholder="Body"
                                          value={body} onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="danger" onClick={() => {
                        }
                        }>
                            Done
                        </Button>
                    </Form>
                </Col>
                <Col lg="6">
                    <Form>
                        <Tags header={this.state.header}
                              body={this.state.body}
                              timeDelivered={this.state.timeDelivered}
                              timeCreated={new Date().toLocaleString()}/>
                    </Form>
                </Col>
            </Container>
        );
    }
}

export default Write;
