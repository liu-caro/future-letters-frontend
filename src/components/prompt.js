import React, {useState} from 'react';
import {Button, Alert} from 'react-bootstrap';

function Prompt() {
    const [show, setShow] = useState(true);

    // selects a random prompt in the list
    const generatePrompt = (prompts) => {
        let i = prompts.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = prompts[i];
            prompts[i] = prompts[j];
            prompts[j] = temp;
        }
        return prompts;
    };

    // list of prompts
    const prompts = ["What are you thankful for today?", "Who do you wish you talked to more?",
        "What do you wish you did differently this year and why?",
        "What are you proud of today?", "What's something that's been on your mind lately?",
        "What's something you really want to do in the next year?", "Who is someone you wish you said thank you to?",
        "What made you smile today?", "What advice do you wish you gave yourself a year ago?", "Where do you see yourself in 3 years?",
        "What is something you wish you changed about yourself?", "What makes you unique?", "Who do you care about?",
    ];

    return (
        <>
            <Alert show={show} variant="light">
                <Alert.Heading onClick={generatePrompt(prompts)}>{prompts[0]}</Alert.Heading>
                <hr/>
                <div className="d-flex justify-content-end">
                    <Button size="sm" onClick={() => setShow(false)} variant="outline-primary">
                        Hide
                    </Button>
                    <Button size="sm" onClick={() => generatePrompt(prompts)}>
                        New prompt
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Prompt</Button>}
        </>
    );
}

export default Prompt;
