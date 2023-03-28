import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holiday = "🎇" | "⚔️" | "🎃" | "🦃" | "🎄";
const transition_A: Record<holiday, holiday> = {
    "🎄": "🎃",
    "🎃": "🎇",
    "🎇": "⚔️",
    "⚔️": "🦃",
    "🦃": "🎄"
};

const transition_B: Record<holiday, holiday> = {
    "🎇": "⚔️",
    "⚔️": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎇"
};

export function CycleHoliday(): JSX.Element {
    const [currHoliday, futureHoliday] = useState<holiday>("🎇");
    function alphabetSort(): void {
        const nextHolidayAtoZ = transition_A[currHoliday];
        futureHoliday(nextHolidayAtoZ);
    }
    function timeSort(): void {
        const nextHolidayClock = transition_B[currHoliday];
        futureHoliday(nextHolidayClock);
    }
    return (
        <div>
            <div>
                <span>Current Holiday: {currHoliday}</span>
            </div>
            <div>
                <Button onClick={alphabetSort}>
                    Next Holiday in the Alphabet
                </Button>
                <Button onClick={timeSort}>Next Holiday in the Year</Button>
            </div>
        </div>
    );
}
