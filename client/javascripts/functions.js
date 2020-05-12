// jshint esversion: 7

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = n => {
  if (n % 3 == 0 && n % 5 == 0 && n % 7 == 0) {
    return "BitBatBot";
  }
  if (n % 3 == 0 && n % 5 == 0) {
    return "BitBat";
  }
  if (n % 7 == 0) {
    return "Bot";
  }
  if (n % 5 == 0) {
    return "Bat";
  }
  if (n % 3 == 0) {
    return "Bit";
  } else {
    return "Not";
  }
};

let findAllbitBatBotOrNots1 = arr => {
  //your code goes here
  //use map method
  let result = arr.map(i => {
    let bit = bitBatBotOrNot(i);
    console.log(`${i}: ${bit}`);
  });
};

let findAllbitBatBotOrNots2 = arr => {
  //your code goes here
  //use for statement
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    let bit = bitBatBotOrNot(result[i]);
    console.log(`${arr[i]}: ${bit}`);
  }
};

let findAllbitBatBotOrNots3 = arr => {
  //your code goes here
  //use for..of statement
  let result = [];
  for (let i of arr) {
    result.push(i);
    let bit = bitBatBotOrNot(i);
    console.log(`${i}: ${bit}`);
  }
};

let findAllbitBatBotOrNots4 = arr => {
  //your code goes here
  //use forEach method
  let result = [];
  arr.forEach(item => {
    result.push(item);
    let bit = bitBatBotOrNot(item);
    console.log(`${item}: ${bit}`);
  });
};
let findAllbitBatBotOrNotsXC = arr => {
  //your code goes here
  //use map method
  let result = [];
  for (let i in arr) {
    result.push(arr[i]);
    let bit = bitBatBotOrNot(arr[i]);
    console.log(`${arr[i]}: ${bit}`);
  }
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);

findAllbitBatBotOrNotsXC(arrOf1To100);
