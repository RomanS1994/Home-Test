String.prototype.isUpperCase = function () {
  return this.valueOf() === this.toUpperCase();
};

// console.log("a".isUpperCase()); // false
// console.log("A".isUpperCase()); // true
// console.log("sds".isUpperCase()); // false
