import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "gray"
];

export function ChangeColor(): JSX.Element {
    const [colorChoice, colorLock] = useState<string>("red");

    function colorSelector(event: React.ChangeEvent<HTMLInputElement>) {
        colorLock(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        onChange={colorSelector}
                        label={
                            <span style={{ background: color }}>{color}</span>
                        }
                        value={colorChoice}
                        checked={colorChoice === color}
                    />
                ))}
                <div>
                    <span>Chosen color: </span>
                    <span
                        data-testid="colored-box"
                        style={{ background: colorChoice }}
                    >
                        {colorChoice}
                    </span>
                    <span>.</span>
                </div>
            </div>
        </div>
    );
}
