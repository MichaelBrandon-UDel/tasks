import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface CIProps {
    colorIndex: number;
    setColorIndex: (newIndex: number) => void;
}

interface PrevProps {
    index: number;
}

function ChangeColor({ colorIndex, setColorIndex }: CIProps): JSX.Element {
    //const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ index }: PrevProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[index],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [color, colorSelection] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[color]}</span>
            <div>
                <ChangeColor
                    colorIndex={color}
                    setColorIndex={colorSelection}
                ></ChangeColor>
                <ColorPreview index={color}></ColorPreview>
            </div>
        </div>
    );
}
