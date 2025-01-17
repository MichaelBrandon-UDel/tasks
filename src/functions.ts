/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const celsius: number = ((temperature - 32) * 5) / 9;
    return celsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let valueSum = 0;
    if (first > 0) {
        valueSum += first;
    }
    if (second > 0) {
        valueSum += second;
    }
    if (third > 0) {
        valueSum += third;
    }
    return valueSum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const shout: string = message.toUpperCase();
    return shout + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let question = true;
    question = message.slice(message.length - 1) == "?" ? true : false;
    return question;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    const truth: string = word;
    if (truth.includes("yes") || truth.includes("YES")) {
        return true;
    }
    if (truth.includes("no") || truth.includes("NO")) {
        return false;
    }
    return null;
}
