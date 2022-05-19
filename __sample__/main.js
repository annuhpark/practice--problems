// Code Signal Algorithms:

// Write a function that returns the sum of two numbers.
// Input: param1 = 1 and param2 = 2.
// Output: solution(param1, param2) = 3.

function solution(param1, param2) {
  return param1 + param2;
}

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// Input: year = 1905.
// Output: solution(year) = 20.

function solution(year) {
  if (year <= 100) {
    return 1;
  } else if (year >= 101 && year <= 200) {
    return 2;
  } else if (year >= 201 && year <= 300) {
    return 3;
  } else if (year >= 301 && year <= 400) {
    return 4;
  } else if (year >= 401 && year <= 500) {
    return 5;
  } else if (year >= 501 && year <= 600) {
    return 6;
  } else if (year >= 601 && year <= 700) {
    return 7;
  } else if (year >= 701 && year <= 800) {
    return 8;
  } else if (year >= 801 && year <= 900) {
    return 9;
  } else if (year >= 901 && year <= 1000) {
    return 10;
  } else if (year >= 1001 && year <= 1100) {
    return 11;
  } else if (year >= 1101 && year <= 1200) {
    return 12;
  } else if (year >= 1201 && year <= 1300) {
    return 13;
  } else if (year >= 1301 && year <= 1400) {
    return 14;
  } else if (year >= 1401 && year <= 1500) {
    return 15;
  } else if (year >= 1501 && year <= 1600) {
    return 16;
  } else if (year >= 1601 && year <= 1700) {
    return 17;
  } else if (year >= 1701 && year <= 1800) {
    return 18;
  } else if (year >= 1801 && year <= 1900) {
    return 19;
  } else if (year >= 1901 && year <= 2000) {
    return 20;
  } else {
    return 21;
  }
}

// Given the string, check if it is a palindrome.
// Input: inputString = "aabaa".
// Output: solution(inputString) = true.

function solution(inputString) {
  const arrayValues = inputString.split('');
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join('');

  if (inputString == reverseString) {
    return true;
  }
  else {
    return false;
  }
}

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Input: inputArray = [3, 6, -2, -5, 7, 3].
// Output: solution(inputArray) = 21.

var arrayOfProducts = [];
var trash = [];

function solution(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    let product = inputArray[i] * inputArray[i + 1];
    if (inputArray[i + 1] === undefined) {
      trash.push(product);
    } else {
      arrayOfProducts.push(product);
    }
  }
  let sample = arrayOfProducts[0];
  for (let y = 0; y < arrayOfProducts.length; y++) {
    if (sample < arrayOfProducts[y]) {
      sample = arrayOfProducts[y];
    }
  }
  return sample;
}

// We will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// A 1 - interesting polygon is just a square with a side of length 1. An n - interesting polygon is obtained by taking the n - 1 - interesting polygon and appending 1 - interesting polygons to its rim, side by side.
// Input: n = 3.
// Output: solution(n) = 13.

function solution(n) {
  return (n * n) + ((n - 1) * (n - 1));
}


// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non - negative integer size.Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that.Help him figure out the minimum number of additional statues needed.
// Input: statues = [6, 2, 3, 8].
// Output: solution(statues) = 3.

function solution(statuses) {
  let sortedNumbers = [...new Float64Array(statuses).sort()];
  var counter = 0;
  var newArray = [];
  for (let i = sortedNumbers[0]; i <= sortedNumbers[sortedNumbers.length - 1]; i++) {
    newArray.push(i);
  }
  for (let y = 0; y < newArray.length; y++) {
    for (let x = 0; x < sortedNumbers.length; x++) {
      if (newArray[y] === sortedNumbers[x]) {
        newArray.splice(y, 1);
      }
    }
  }
  return newArray.length;
}

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// Input: sequence: [1, 3, 2, 1]
// Output: false

function solution(sequence) {
  var bad = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      bad++;
      if (i !== 0 && sequence[i] >= sequence[i + 2]) {
        if (sequence[i - 1] >= sequence[i + 1]) {
          return false;
        }
      }
    }
  }
  return bad < 2;
}

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
// Input: matrix = [[0, 1, 1, 2],
//                  [0, 5, 0, 0],
//                  [2, 0, 3, 3]]
// Output: solution(matrix) = 9


function solution(matrix) {
  let total = 0;
  for (let i = 0; i < matrix.length; i++) {
    // console.log(matrix[i]);
    for (let y = 0; y < matrix[i].length; y++) {
      // console.log(matrix[i][y]);
      if (matrix[i][y] === 0) {
        continue;
      } else if (i > 0 && matrix[i - 1][y] === 0) {
        continue;
      } else if (i > 1 && matrix[i - 2][y] === 0) {
        continue;
      } else if (i > 2 && matrix[i - 3][y] === 0) {
        continue;
      } else {
        total = total + matrix[i][y];
      }
    }
  }
  return total;
}

// Given an array of strings, return another array containing all of its longest strings.
// Input: inputArray = ["aba", "aa", "ad", "vcd", "aba"]
// Output: solution(inputArray) = ["aba", "vcd", "aba"]

function solution(inputArray) {
  let counter = 0;
  let finalArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    for (let y = 0; y < inputArray[i].length; y++) {
      if (y > counter) {
        counter = y;
      }
    }
  }
  for (let x = 0; x < inputArray.length; x++) {
    if (inputArray[x].length === counter + 1) {
      finalArray.push(inputArray[x]);
    }
  }
  return finalArray;
}

// Given two strings, find the number of common characters between them.
// Input: s1: "aabcc"
// s2: "adcaa"
// Output: 3.

function solution(s1, s2) {
  let counter = 0;
  const arrays1 = s1.split('');
  const arrays2 = s2.split('');
  const allEqual = arr => arr.every(val => val === arr[0]);
  if (allEqual(arrays1) && allEqual(arrays2) && arrays1[0] === arrays2[0]) {
    if (arrays1.length > arrays2.length) {
      return arrays2.length;
    } else {
      return arrays1.length;
    }
  } else if (arrays1.length < arrays2.length) {
    for (let i = 0; i < arrays1.length; i++) {
      for (let y = 0; y < arrays2.length; y++) {
        if (arrays1[i] === arrays2[y]) {
          counter++;
          arrays2.splice(y, 1);
        }
      }
    }
  } else {
    for (let i = 0; i < arrays2.length; i++) {
      for (let y = 0; y < arrays1.length; y++) {
        if (arrays2[i] === arrays1[y]) {
          counter++;
          arrays1.splice(y, 1);
        }
      }
    }
  }
  return counter;
}

// Ticket numbers usually consist of an even number of digits.A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.
// Input: n = 1230
// Output: True
// Input: n = 239017
// Output: False

function solution(n) {
  const toArray = n.toString().split('');
  const halfOfLength = (toArray.length) / 2;
  let counter1 = 0;
  let counter2 = 0;
  for (let i = 0; i < halfOfLength; i++) {
    counter1 = counter1 + parseInt(toArray[i]);
  }
  for (let y = halfOfLength; y < toArray.length; y++) {
    counter2 = counter2 + parseInt(toArray[y]);
  }
  if (counter1 === counter2) {
    return true;
  } else {
    return false;
  }
}

// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
// Input: a = [-1, 150, 190, 170, -1, -1, 160, 180]
// Output: solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]

function solution(a) {
  let arrayOfHeight = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      arrayOfHeight.push(a[i]);
    }
  }
  arrayOfHeight.sort((a, b) => a - b);
  // console.log(arrayOfHeight);
  for (let x = 0; x < a.length; x++) {
    if (a[x] === -1) {
      continue;
    } else if (a[x] !== -1) {
      a.splice(x, 1, arrayOfHeight[0]);
      arrayOfHeight.splice(0, 1);
    }
  }
  return a;
}
