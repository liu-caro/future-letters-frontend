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
import axios from "axios";
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(this.state);
        event.preventDefault();
        const {header, body, timeDelivered} = this.state;

        axios.post('http://localhost:9000/letter/create',
            {
                body: body,
                header: header,
                replyLetters: [],
                tags: [],
                timeCreated: new Date().toLocaleString(),
                timeDelivered: timeDelivered
            })
            .then(response => console.log(response))
            .catch(e => console.log(e));
    };

    render() {
        const {header, body, timeDelivered} = this.state;

        return (
            <div className="bg-gradient-info">
                <Container className="bg-gradient-white">
                    <div className="header  pt-1 pt-md-1">
                        <h1 className="display-3">Write a letter to yourself!</h1>
                        <Form className="form" onSubmit={() => this.handleSubmit}>
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
                                        selected={timeDelivered} value={timeDelivered} onChange={this.handleDate}
                                        timeFormat={false}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Label>Prompt</Form.Label>
                            <Prompt />
                            <Form.Group controlId="letterHeader">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="title" placeholder="Main idea of letter"
                                              value={header} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="letterBody">
                                <Form.Label>Body</Form.Label>
                                <Form.Control className="letter-body" as="textarea" type="body"
                                              placeholder="What do you want to tell yourself?"
                                              value={body} onChange={this.handleChange}/>
                            </Form.Group>
                            <Button variant="navy" onClick={() => {
                            }
                            }>
                                Done
                            </Button>
                        </Form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Write;
