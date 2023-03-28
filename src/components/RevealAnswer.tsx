import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [stealth, stealthToggle] = useState<boolean>(false);

    return (
        <div>
            <Button onClick={() => stealthToggle(!stealth)}>Reveal</Button>
            {stealth && <span>42</span>}
        </div>
    );
}
