//Develop a function that checks if a given string (array of characters) is a palindrome (i.e., it reads the same forward and backward)

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
      if (str[left] !== str[right]) {
          return false;
      }
      left++;
      right--;
  }
  return true;
}
const word1 = "racecar";
const word2 = "hello";
console.log(isPalindrome(word1));
console.log(isPalindrome(word2));

