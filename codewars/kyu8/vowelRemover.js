function shortcut(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== "a" &&
      string[i] !== "e" &&
      string[i] !== "i" &&
      string[i] !== "o" &&
      string[i] !== "u"
    ) {
      result += string[i];
    }
  }
  return result;
}

console.log(shortcut("hello"));

//a, e, i, o, u
