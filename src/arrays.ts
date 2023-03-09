/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const bookends = [...numbers];
    let newBookends = [];
    if (numbers.length == 0) {
        return bookends;
    }
    if (numbers.length == 1) {
        newBookends = [bookends[0], bookends[0]];
    } else {
        newBookends = [bookends[0], bookends[bookends.length - 1]];
    }
    return newBookends;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triples: number[] = [...numbers];
    const tripled = triples.map((tripled: number): number => tripled * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const converts = [...numbers];
    const converted = converts.map((convert: string): number =>
        Number.isNaN(parseInt(convert)) ? 0 : parseInt(convert)
    );
    return converted;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const fortunes = [...amounts];
    const cashless = fortunes.map((fortune: string): string =>
        fortune.replace("$", "")
    );
    const values = cashless.map((noCash: string): number =>
        Number.isNaN(parseInt(noCash)) ? 0 : Number(noCash)
    );
    return values;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const sentences = [...messages];
    const exclamations = sentences.map((sentence: string): string =>
        sentence.endsWith("!") ? sentence.toUpperCase() : sentence
    );
    const noQuestions = exclamations.filter(
        (exclamation: string): boolean => !exclamation.endsWith("?")
    );
    return noQuestions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const wordCounters = [...words];
    const smallWords = wordCounters.filter(
        (wordCounter: string): boolean => !(wordCounter.length >= 4)
    );
    return smallWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rainbow = [...colors];
    const razer = rainbow.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return razer;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const values = [...addends];
    let added = "empty";
    if (values.length == 0) {
        added = "0";
    } else {
        const adding = values.map((value: number): number => value);
        added = adding.join("+");
    }
    const math = values.reduce(
        (total: number, value: number) => total + value,
        0
    );
    const final = math.toString() + "=" + added;
    return final;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const ints = [...values];
    /*
    if (ints.length == 0) {
        return [0];
    } else {
    */
    const positives = ints.every((int: number): boolean => int >= 0);
    if (positives) {
        const math = ints.reduce(
            (total: number, int: number) => total + int,
            0
        );
        const addSum = [...ints, math];
        return addSum;
    } else {
        const negativeIndex = ints.findIndex((int: number): boolean => int < 0);
        const negativeFilter = ints.filter(
            (int: number): boolean => ints.indexOf(int) < negativeIndex
        );
        const negMath = negativeFilter.reduce(
            (total: number, postNeg: number) => total + postNeg,
            0
        );
        ints.splice(negativeIndex + 1, 0, negMath);
        return ints;
    }
}
