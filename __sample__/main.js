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
