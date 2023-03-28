import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

interface DHProps {
    dhValue: number;
    setDhValue: (newDH: number) => void;
}

function Doubler({ dhValue, setDhValue }: DHProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: DHProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [initial, mathProcess] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{initial}</span>
            </div>
            <Doubler setDhValue={mathProcess} dhValue={initial}></Doubler>
            <Halver setDhValue={mathProcess} dhValue={initial}></Halver>
        </div>
    );
}
