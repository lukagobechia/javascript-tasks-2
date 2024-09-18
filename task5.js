function findPalindrome(array) {
  const reversedString = [];
  const palindrome = [];
  for (let i = 0; i < array.length; i++) {
    reversedString.push(array[i].split('').reverse().join(''));
    if(array[i].match(reversedString[i])) palindrome.push(array[i])
  }
  return palindrome;
}
console.log(findPalindrome(["level", "giga", "ana", "button", "abba", "noon","tata"]));
