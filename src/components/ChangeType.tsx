import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [inquiry, bureaucrat] = useState<QuestionType>(
        "short_answer_question"
    );
    //type QuestionType = "multiple_choice_question" | "short_answer_question";
    function shift(): void {
        bureaucrat(
            inquiry === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    //<Button onClick={() => setValue(1 + value)}>Add One</Button>
    return (
        <div>
            <Button onClick={shift}>Change Type</Button>
            {inquiry === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
