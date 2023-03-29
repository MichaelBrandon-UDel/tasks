import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [statement, informant] = useState<string>("");
    function userInput(event: React.ChangeEvent<HTMLInputElement>) {
        informant(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Label>Please Answer Here</Form.Label>
            <Form.Control
                value={statement}
                onChange={userInput}
                placeholder={"Lorem ipsum..."}
            />
            {statement === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
