function palindrome(str) {
  const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g);
  return alphanumericOnly.join("") === alphanumericOnly.reverse().join("");
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
