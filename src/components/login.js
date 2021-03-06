import React from 'react';
import {Container, Form, Button} from "react-bootstrap";
import firebase from "../firebase";
import '../css/general.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.props.history.push('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    render() {
        const {email, password} = this.state;
        return (
            <div className="bg-gradient-info">
            <Container className="letter-container bg-gradient-white ">
                <div className = "header  pt-1 pt-md-1">
                <h1 className="display-3"> Login</h1>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail" className="display-4">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Email"
                                      value={email} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="display-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                                      value={password} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
            </Container>
            </div>
        );
    }
}

export default Login;
