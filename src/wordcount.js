'use strict';

export let wordCount = (str) => {
  if (typeof str !== 'string') {
    return "Invalid input";
  } else {
    let result = {};
    let strArr = str.split(' ')
      //converts all to lowercases and removes trailing spaces
      .map(s => s.trim().toLowerCase())
      //removes empty strings
      .filter(s => s !== '');

    strArr.forEach(x => {
      if (result[x] === undefined) {
        //check if the key doesn't exists in the dictionary and initialize
        result[x] = 1;
      } else {
        //if key exists increment
        result[x] += 1;
      }
    });

    return result;
  }
}