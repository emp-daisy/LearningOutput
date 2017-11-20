'use strict';

module.exports = {
  wordCount: (str) => {
    if (typeof str !== 'string') {
      return "Invalid input";
    } else {
      let result = {};
      let strArr = str.split(' ').map(s => s.trim().toLowerCase());

      for (let i = 0; i < strArr.length; i++) {
        //Looping througt the words
        if (strArr[i] !== '') {
          //check that the word isn't an empty string

          if (result[strArr[i]] === undefined) {
            //check if the key doesn't exists in the dictionary and initialize
            result[strArr[i]] = 1;
          } else {
            //if key exists increment
            result[strArr[i]] += 1;
          }
        }
      }
      return result;
    }
  }
}


//console.log(wordCount("olly olly in come free"));