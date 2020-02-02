import React, {useState} from 'react';
import {Button, Alert} from 'react-bootstrap';

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

function Prompt(prompts) {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert show={show} variant="light">
                <Alert.Heading>{prompts[0]}</Alert.Heading>
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
