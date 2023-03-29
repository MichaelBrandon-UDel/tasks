import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, attemptAmount] = useState<number>(3);
    const [defaultAttempts, requested] = useState<string>("");
    const parsed = parseInt(defaultAttempts) || 0;

    function bureaucracy(event: React.ChangeEvent<HTMLInputElement>) {
        requested(event.target.value);
    }

    function additionalTries() {
        if (parsed !== 0) {
            attemptAmount(parsed + attempts);
        }
    }

    function useTries() {
        attemptAmount(attempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>{attempts}</span>
            <Form.Group controlId="Add Tries">
                <Form.Label>Attempts Remaining: </Form.Label>
                <Form.Control
                    type="Number"
                    value={defaultAttempts}
                    onChange={bureaucracy}
                    placeholder={"Lorem ipsum..."}
                />
            </Form.Group>
            <div>
                <Button onClick={additionalTries}>gain</Button>
                <Button onClick={useTries} disabled={attempts <= 0}>
                    use
                </Button>
            </div>
        </div>
    );
}
