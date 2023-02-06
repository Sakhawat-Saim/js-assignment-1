//  Problem 1

// This function will solve simple mathematical equation

function mindGame(number) {
  if (typeof number !== "number") {
    return "Please enter a valid number";
  }
  const result = (number * 3 + 10) / 2 - 5;
  return result;
}

const finalResult = mindGame("5");
console.log(finalResult);

const finalResult2 = mindGame(50);
console.log(finalResult2);

// problem 2

// this function will count the chracter of a string including white space

function evenOdd(str) {
  if (typeof str !== "string") {
    return "Please enter valid string";
  }

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count += 1;
  }
  if (count % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOdd("batch7"));
console.log(evenOdd("phero"));
console.log(evenOdd(998));

// problem 3

// this function will compare the 7's subtraction logic

function isLGSeven(number) {
  if (typeof number !== "number") {
    return "Please enter a valid number";
  }
  const result = number - 7;
  if (result <= 7) {
    const lastResult = result;
    return lastResult;
  } else {
    const lastResult2 = number * 2;
    return lastResult2;
  }
}

console.log(isLGSeven(6));
console.log(isLGSeven("15"));

// problem 4

// this function will find negative number in an array

function findingBadData(array) {
  const negativeDataArray = [];
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      return "Please enter valid numbers";
    }
    if (array[i] < 0) {
      negativeDataArray.push(array[i]);
      count += 1;
    }
  }
  return count;
}

const myArray = [2, -5, -7, -13];
console.log(findingBadData(myArray));

const myArray2 = [-4, -9, -5, -33, "-55"];
console.log(findingBadData(myArray2));

// problem 5

// this function will convert gems to diamond with certain condition

function gemsToDiamond(num1, num2, num3) {
  if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
    return 'Please enter a valid number';
  }

  const friendDiamond1 = num1 * 21;
  const friendDiamond2 = num2 * 32;
  const friendDiamond3 = num3 * 43;

  const totalDiamond = friendDiamond1 + friendDiamond2 + friendDiamond3;

  if (totalDiamond < 1000 * 2) {
    return totalDiamond;
  } else {
    const finalDiamoond = totalDiamond - 2000;
    return finalDiamoond;
  }
}

console.log(gemsToDiamond(1, 1, 1));
console.log(gemsToDiamond(20, 200, 50));
console.log(gemsToDiamond(100, 5, '1'));
