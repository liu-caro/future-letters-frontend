import React from 'react';

const firebase = require("firebase");

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        };
    }
}

export default Login;
