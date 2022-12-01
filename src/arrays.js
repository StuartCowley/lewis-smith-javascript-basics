const getNthElement = (index, array) => {
  if (index < array.length){
    return array[index];
  }
  return array[index - array.length];
  // const cycleIndex = 
  // index < array.length ? index : index - array.length;
  // return array[cycleIndex];
};

const arrayToCSVString = array => {
  // return String(array);
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {

  const arrayedTwice = [...array];
  arrayedTwice.push(element);
  return arrayedTwice;

  // const contain = [];
  // contain.push(element);
  // const newArrayx = array.concat(contain);
  // return newArrayx;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  
  const convertedNames = [];
  for (let i = 0; i < strings.length; i++) {
    convertedNames[i] = strings[i].toUpperCase();
  };
  return convertedNames;
};

const reverseWordsInArray = strings => {
  return strings.map(string => {
    return string
      .split('')
      .reverse()
      .join('');
  });
};

const onlyEven = numbers => {
  const hibby = numbers.filter(evenNumber => evenNumber % 2 === 0);
  return hibby;
};

// ^^ The above are two examples of returning a function nested in another function.
//Either with two return statements, or with one, having the nested function
//assigned to an additional variable.

const removeNthElement2 = (index, array) => {
  return array.filter((_, indexRem) => {
    return indexRem !== index;
  });
};

// const elementsStartingWithAVowel = strings => {
//   return strings.filter(str => /^[aeiou]/i.test(str));
// };

// const elementsStartingWithAVowel = (strings) => {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   return strings.filter(word => {
//     const firstLetter = word[0].toLowerCase();
    
//     return vowels.includes(firstLetter);
//   });
// };

// let array = ["ananas", "banana", "kiwi"];
// array.filter(str => /^[aeiou]/i.test(str));

const removeSpaces = string => {
  return string.replaceAll(' ', '');
};

const sumNumbers = numbers => {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length -1)
  - b.charCodeAt(b.length -1));
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
