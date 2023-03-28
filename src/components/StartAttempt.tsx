import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, remaining] = useState<number>(4);
    const [status, statuses] = useState<boolean>(false);

    function quiz(): void {
        attempt();
        attempts > 0 ? statuses(true) : statuses(false);
        if (attempts == 0) {
            statuses(true);
        }
    }

    function attempt(): void {
        remaining(attempts > 1 ? attempts - 1 : 0);
    }

    function addTry(): void {
        remaining(attempts + 1);
    }

    function override(): void {
        statuses(false);
    }

    return (
        <div>
            <span>Quiz: </span>
            <Button onClick={quiz} disabled={status || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={override} disabled={!status}>
                Stop Quiz
            </Button>
            <Button onClick={addTry} disabled={status}>
                Mulligan
            </Button>
        </div>
    );
}
