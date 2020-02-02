import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import firebase from "../firebase";
import '../css/general.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            passwordConfirmation: null
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password, passwordConfirmation} = this.state;

        if (!this.passwordIsValid()) {
            this.setState({errors: 'Passwords do not match'});
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                this.setState({errors: error});
            });
    };

    passwordIsValid = () => this.state.password === this.state.passwordConfirmation;

    render() {
        const {email, password, passwordConfirmation} = this.state;
        return (
            <Container>
                <h1>Register</h1>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Email"
                                      value={email} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                                      value={password} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPasswordConfirmation">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password"
                                      value={passwordConfirmation} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Register;
