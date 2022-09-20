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

// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).
// Input: "the-stealth-warrior"
//Output: "theStealthWarrior"

function toCamelCase(str) {
  let stringToArray = str.split('');
  // console.log(stringToArray);
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i] === '-' || stringToArray[i] === '_') {
      let upperCasedLetter = stringToArray[i + 1].toUpperCase();
      // console.log(upperCasedLetter);
      stringToArray.splice(i, 2, upperCasedLetter);
    }
  }
  const string = stringToArray.join('');
  return string;
}

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.No floats or non - positive integers will be passed.
// Input: For example, when an array is passed like [19, 5, 42, 2, 77]..
// Outout: 7.

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) { return a - b; });
  return numbers[0] + numbers[1];
};

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Input: nums = [1, 2, 3, 1]
// Output: true

var containsDuplicate = function (nums) {
  const unique = [...new Set(nums)];
  console.log(unique, nums);
  if (JSON.stringify(unique) === JSON.stringify(nums)) {
    return false;
  } else {
    return true;
  }
};

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true
// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function (s, t) {
  const sortedS = s.split('').sort();
  const sortedT = t.split('').sort();
  if (JSON.stringify(sortedS) === JSON.stringify(sortedT)) {
    return true;
  } else {
    return false;
  }
};

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let x = 0; x < nums.length; x++) {
      if (i === x) {
        continue;
      }
      const remainingNum = target - nums[i];
      if (nums[x] === remainingNum) {
        return [i, x];
      }
    }
  }
}

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Input: strs = [""]
// Output: [[""]]

// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function(strs) {
  const sortedStrs = strs.map(word => word.split('').sort().join(''));
  // console.log(sortedStrs);
  const hash = {};
  for (let i = 0; i < strs.length; i++) {
    if (!hash[sortedStrs[i]]) {
      hash[sortedStrs[i]] = [strs[i]];
    } else {
      hash[sortedStrs[i]].push(strs[i]);
    }
  }
  return Object.values(hash);
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function(nums, k) {
  // console.log(nums);
  const hash = {};
  const finalArr = [];
  for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);\
    if (!hash[nums[i]]) {
      hash[nums[i]] = [nums[i]];
    } else {
      hash[nums[i]].push(nums[i]);
    }
  }
  const groupedElements = Object.values(hash);
  let topFrequent = [];
  // console.log(groupedElements);
  const elementsInOrder = groupedElements.sort(function(a, b) {
    return b.length - a.length
  });
  // console.log(elementsInOrder);
  for (let i = 0; i < k; i++) {
    finalArr.push(elementsInOrder[i][0]);
  }
  return finalArr;
};


// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function(s) {
  const replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const sFlipped = replaced.split('').reverse().join('');
  if (replaced === sFlipped) {
    return true;
  } else {
    return false;
  }
};

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function(nums) {
  let finalArray = [];
  let counter = 0;
  let finalProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let x = 0; x < nums.length; x++) {
      if (i === x) {
        continue;
      } else {
        finalProduct = finalProduct * nums[x];
      }
    }
    finalArray.push(finalProduct);
    finalProduct = 1;
  }
  return finalArray;
};

// We are going to write a function called fizzbuzz that will accept no arguments.

// The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:

// For every number that is divisible by 3 and 5, console log "FizzBuzz".
// For every number that is divisible by only 3 and not 5, console log "Fizz".
// For every number that is divisible by only 5 and not 3, console .log "Buzz".

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0 && i % 5 !== 0) {
            console.log('Fizz');
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// Count the Employees: (Query Question)
// The result should contain the IDs of all the companies that have more than 10000 employees, in ascending order in the following format:

SELECT COMPANY.ID
  FROM COMPANY
  WHERE COMPANY.EMPLOYEES > 10000;

// Given an array of integers, find the sum of its elements.

// Function Description

// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

// simpleArraySum has the following parameter(s):

// ar: an array of integers

function simpleArraySum(ar) {
  let counter = 0;
  for (let i = 0; i < ar.length; i++) {
    counter = counter + ar[i];
  }
  return counter;
}

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

function compareTriplets(a, b) {
  let finalArray = [];
  let counter1 = 0;
  let counter2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      counter1 = counter1 + 1;
    } else if (a[i] < b[i]) {
      counter2 = counter2 + 1;
    } else if (a[i] === b[i]) {
      continue;
    }
  }
  finalArray.push(counter1);
  finalArray.push(counter2);
  return finalArray;
}

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .
// Return

// long: the sum of all array elements

function aVeryBigSum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }
  return sum;
}

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(array) {
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    counter1 = counter1 + array[i][i];
  }
  for (let y = 0; y < array.length; y++) {
    counter2 = counter2 + array[y][counter3];
    counter3 = counter3 - 1;
  }
  if (counter1 >= counter2) {
    return counter1 - counter2;
  } else if (counter1 < counter2) {
    return counter2 - counter1;
  }
}

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    console.log((sum - maxVal) + ' ' + (sum - minVal));
}

// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
  let biggestNumber = Math.max(...candles);
  let counter = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === biggestNumber) {
      counter = counter + 1;
    }
  }
  return counter;
}

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
  let positiveNumber = 0;
  let negativeNumber = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === 1) {
      positiveNumber = positiveNumber + 1;
    } else if (Math.sign(arr[i]) === -1) {
      negativeNumber = negativeNumber + 1;
    } else {
      zero = zero + 1;
    }
  }
  const finalPositive = (positiveNumber / arr.length).toFixed(6);
  // console.log(finalPositive);
  const finalNegative = (negativeNumber / arr.length).toFixed(6);
  const finalZero = (zero / arr.length).toFixed(6);
  console.log(`${finalPositive}`);
  console.log(`${finalNegative}`);
  console.log(`${finalZero}`);
}

// Given an array a, your task is to apply the following mutation to it:

// Array a mutates into a new array b of the same length
// For each i from 0 to a.length - 1 inclusive, b[i] = a[i - 1] + a[i] + a[i + 1]
// If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it is considered to be 0
// For a = [4, 0, 1, -2, 3], the output should be solution(a) = [4, 5, -1, 2, 1].

function solution(a) {
  let finalArray = [];
  let counter = 0;
  if (a.length === 1) {
    finalArray.push(a[0]);
    return finalArray;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i - 1] === undefined) {
      // console.log('hello');
      counter = counter + a[i] + a[i + 1];
      // console.log(counter);
      finalArray.push(counter);
      counter = 0;
    } else if (a[i + 1] === undefined) {
      counter = counter + a[i] + a[i - 1];
      finalArray.push(counter);
      counter = 0;
    } else {
      counter = a[i - 1] + a[i] + a[i + 1];
      finalArray.push(counter);
      counter = 0;
    }
  }
  return finalArray;
}

// Best time to buy and sell stock:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function maxProfit(prices) {
  let buy = prices[0];
  prices[0] = 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
      prices[i] = 0;
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
    return profit;
  }
}
