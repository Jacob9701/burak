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





function palindromCheck(word: string): boolean {
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  if (word === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromCheck("non")); // true
console.log(palindromCheck("kitob")); // false