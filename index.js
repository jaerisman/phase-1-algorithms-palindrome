function isPalindrome(word) {
  let splitWord = word.split(""); 
  let reverseWordArray = splitWord.reverse(); 
  let joinWordReversed = reverseWordArray.join(""); 

  if(joinWordReversed === word) {
    return true;
  } else {
    return false;
  };
};

//Add your pseudocode and written explanation of your solution here:
/*
1. Split word into array of letters using the split() method. Name this variable splitWord.
2. Reverse the splitWord variable using the reverse() method. Name this variable reverseWordArray.
3. Join the reversed array of letters into a word usin the join() method. Name this variable joinWordReversed.
4. Use an if else function to test if joinWordReversed is equal to the original word passed in the isPalindrome function.
5. Return true if joinWordReversed is equal to word; return false if it is not. 
/*
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("abba"));
  console.log("=>", isPalindrome("tacocat"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("santa"));
}

module.exports = isPalindrome;
