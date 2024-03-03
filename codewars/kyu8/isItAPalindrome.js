function isPalindrome(x) {
  const arr = x.split("").reverse().join("").toUpperCase();

  return arr === x.toUpperCase();
}
console.log(isPalindrome("Madam"));
