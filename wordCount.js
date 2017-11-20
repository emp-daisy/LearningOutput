//Write a function called *words* that takes in a string argument and counts the occurrences of each word in the string.  The function should return a JSON object showing the words identified, and their occurrences. For example for the input `olly olly in come free`, the output should be **{olly: 2, in: 1, come: 1, free: 1}**

const wordCount = (str) => {
  let result = {};
  
  let strArr = str.split(' ').map(s => s.trim().toLowerCase());
  for (let i = 0; i< strArr.length; i++){
    if(result[strArr[i]] === undefined){
      //check if the key doesn't exists in the dictionary and initialize
      result[strArr[i]] = 1;
    }else{
      //if key exists increment
      result[strArr[i]] += 1;
    }
  }
  
  return result;
}

console.log(wordCount("olly olly in come free"));