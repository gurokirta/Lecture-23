"use strict";

//! Task 1
// var arr = [72, 12, 75, 3, 38, 34, 95, 99, 21, 5];

// function checkArr(number) {
//   for (var i = 0; i < arr.length; i++) {
//     var exNumber = false;
//     if (arr[i] === number) {
//       exNumber = true;
//       break;
//     }
//   }
//   return exNumber;
// }

// console.log(checkArr(10));
// console.log(checkArr(2));

//! Task 2

// function checkNum(number) {
//   var isSimple = true;
//   if (number % 2 === 0) {
//     isSimple = false;
//   }

//   return isSimple;
// }

// console.log(checkNum(1));

//! Task 3

// var numArray = [72, 12, 75, 3, 38, 34, 950, 99, 21, 50];
// var sum = 0;
// var avg = 0;
// function calcSum(numbers) {
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// sum = calcSum(numArray);

// console.log(sum);

// function calcAvg(avg) {
//   return sum / avg;
// }

// avg = calcAvg(numArray.length);

// console.log(avg);

//! Task 4

var numArray = [72, 12, 75, 3, 38, 34, 95, 99, 21, 50];

function logArray(arr) {
  return arr;
}

var outPutArr = logArray(numArray);

console.log(outPutArr);

function addToArray(randomNumbers, length = 10) {
  for (var i = 0; i < length; i++) {
    randomNumbers.push(Math.round(Math.random() * 100));
  }
  return randomNumbers;
}

console.log(addToArray(numArray, 5));

var oddArr = [];
var evenArr = [];
function evenAndOdd(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i]);
    } else {
      oddArr.push(array[i]);
    }
  }

  return;
}

var evenNum = evenAndOdd(numArray);
var oddNum = evenAndOdd(numArray);
console.log(`${evenArr} ლუწები`);
console.log(`${oddArr} კენტები`);
