import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [alter, lockIn] = useState<boolean>(false);
    const [IGN, confirm] = useState<string>("Your Name");
    const [idCheck, idConfirm] = useState<boolean>(true);

    function alterations(event: React.ChangeEvent<HTMLInputElement>) {
        lockIn(event.target.checked);
    }

    function nameInput(event: React.ChangeEvent<HTMLInputElement>) {
        confirm(event.target.value);
    }

    function tsa(event: React.ChangeEvent<HTMLInputElement>) {
        idConfirm(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="student-editor"
                label="Make Alterations"
                checked={alter}
                onChange={alterations}
            />
            {alter === true ? (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student Checker"
                    checked={idCheck}
                    onChange={tsa}
                />
            ) : null}
            <div>
                {alter === true ? (
                    <Form.Group controlId="idCard">
                        <Form.Label>Student Name: </Form.Label>
                        <Form.Control value={IGN} onChange={nameInput} />
                    </Form.Group>
                ) : null}
            </div>
            <div>
                {idCheck === true ? (
                    <span>{IGN} is a student</span>
                ) : (
                    <span>{IGN} is not a student</span>
                )}
            </div>
        </div>
    );
}
