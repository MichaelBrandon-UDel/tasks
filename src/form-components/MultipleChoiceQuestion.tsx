import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [option, decision] = useState<string>("");
    function questionnaire(event: React.ChangeEvent<HTMLSelectElement>) {
        decision(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Select: </Form.Label>
                <Form.Select value={option} onChange={questionnaire}>
                    {options.map((pick: string) => (
                        <option key={pick} value={pick}>
                            {pick}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {option === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
            </div>
        </div>
    );
}
