import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import '../general.css';
import firebase from "../firebase";

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };
    }

}

export default Tags;
