function getSquareNumbers(numbers: number[]) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        const obj = {
            number: numbers[i],
            square: numbers[i] * numbers[i],
        };

        result.push(obj);
    }

    return result;
}

const answer = getSquareNumbers([4, 5, 6, 7]);

console.log(answer);