import React from 'react';

const firebase = require("firebase");

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            passwordConfirmation: null
        };
    }
}

export default Register;
