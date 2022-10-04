// I did not manage to solve this one properly. I had played for a bit with for loops but I did //
// not manage to reset 'i' back to 0 and restart the for loop.
// This one solves part 1 of the second half of the problem:
//
// {
//   if (index < array.length) {
//     return array[index];
//   }
//   for (let i = 0; index >= array.length; i += 1) {
//     return array[i];
//   }
//   return array[index];
// };

const getNthElement = (index, array) => {
  if (index === array.length) {
    return array[0];
  }
  if (index > array.length) {
    return array[1];
  }
  return array[index];
};

const arrayToCSVString = array => {
  // your code here
};

const csvStringToArray = string => {
  // your code here
};

const addToArray = (element, array) => {
  // your code here
};

const addToArray2 = (element, array) => {
  // your code here
};

const removeNthElement = (index, array) => {
  // your code here
};

const numbersToStrings = numbers => {
  // your code here
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
