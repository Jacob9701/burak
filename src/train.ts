// function getSquareNumbers(numbers: number[]) {
//   const result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     const obj = {
//       number: numbers[i],
//       square: numbers[i] * numbers[i],
//     };

//     result.push(obj);
//   }

//   return result;
// }

// const answer = getSquareNumbers([4, 5, 6, 7]);

// console.log(answer);





// function palindromCheck(word: string): boolean {
//   let reversed = "";

//   for (let i = word.length - 1; i >= 0; i--) {
//     reversed += word[i];
//   }

//   if (word === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromCheck("non")); // true
// console.log(palindromCheck("kitob")); // false






// export enum HttpCode {
//   OK = 200,
//   CREATED = 201,
//   NOT_MODIFIED = 304,
//   BAD_REQUEST = 400,
//   UNAUTHORIZED = 401,
//   FORBIDDEN = 403,
//   NOT_FOUND = 404,
//   INTERNAL_SERVER_ERROR = 500,
// }

// export enum Message {
//   SOMETHING_WENT_WRONG = "Something went wrong!",
//   NO_DATA_FOUND = "No data is found!",
//   CREATE_FAILED = "Create is failed!",
//   UPDATE_FAILED = "Update is failed!",
// }

// class Errors extends Error {
//   public code: HttpCode;
//   public message: Message;

//   constructor(statusCode: HttpCode, statusMessage: Message) {
//     super();
//     this.code = statusCode;
//     this.message = statusMessage;
//   }
// }

// export default Errors;



//O-TASK

// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;

//   for (let item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }

//   return sum;
// }

// console.log(
//   calculateSumOfNumbers([5, "hello", false, { age: 20 }, 15, null, 25])
// );


function objectToArray(obj: { [key: string]: any }): [string, any][] {
  const result: [string, any][] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }

  return result;
}

const laptop = {
  brand: "Apple",
  model: "MacBook Air",
  year: 2024,
  price: 1500,
};

console.log(objectToArray(laptop));