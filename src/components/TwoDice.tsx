import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1, roll1] = useState<number>(1);
    const [die2, roll2] = useState<number>(2);

    function firstRoll(): void {
        roll1(d6);
    }

    function secondRoll(): void {
        roll2(d6);
    }

    return (
        <div>
            <Button onClick={firstRoll}>Left Die</Button>
            <span data-testid="left-die"> {die1} </span>
            <Button onClick={secondRoll}>Right Die</Button>
            <span data-testid="right-die"> {die2} </span>
            {die1 === die2 && die1 === 1 ? (
                <span>Lose</span>
            ) : die1 === die2 && die1 !== 1 ? (
                <span>Win</span>
            ) : (
                <span></span>
            )}
        </div>
    );
}
